import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  EmailAuthProvider,
  User,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  reauthenticateWithCredential,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";

import { comparePasswords } from "services";
import { SignInFormValues, SignUpFormValues } from "types";
import { getFirebaseErrorMessage } from "utils";
import { auth } from "../../firebase";

interface UserState {
  name: string;
  email: string;
  isLoading: boolean;
  errorMessage: string | null;
  isAuth: boolean;
  uid: null | string;
  verificationStatus: boolean;
  isOpenModal: boolean;
  isPasswordChanged: boolean;
  isResetEmailSent: boolean;
}

export const fetchSignUpUser = createAsyncThunk<
  Pick<UserState, "email" | "name" | "verificationStatus" | "uid">,
  SignUpFormValues,
  { rejectValue: string }
>(
  "user/fetchSignUpUser",
  async ({ name, email, password, confirmPassword }, { dispatch, rejectWithValue }) => {
    try {
      const isPasswordsMatch = comparePasswords(password, confirmPassword);
      if (!isPasswordsMatch) {
        throw new Error("Passwords don't match");
      }
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser as User, { displayName: name });
      await sendEmailVerification(user, { url: "http://localhost:3000/react-pixema-app/sign-in" });
      dispatch(setVerificationStatus(user.emailVerified));
      return {
        email: user.email as string,
        name: user.displayName as string,
        uid: user.uid,
        verificationStatus: user.emailVerified,
      };
    } catch (error) {
      if (error instanceof Error) {
        const { message } = error as Error;
        return rejectWithValue(message);
      }
      const firebaseError = error as FirebaseError;
      return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
    }
  },
);

export const fetchSignInUser = createAsyncThunk<
  Pick<UserState, "email" | "name" | "verificationStatus" | "uid">,
  SignInFormValues,
  { rejectValue: string }
>("user/fetchSignInUser", async ({ email, password }, { dispatch, rejectWithValue }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    dispatch(setVerificationStatus(user.emailVerified));
    return {
      email: user.email as string,
      uid: user.uid,
      name: user.displayName as string,
      verificationStatus: user.emailVerified,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchChangeUserEmail = createAsyncThunk<
  Pick<UserState, "email">,
  { newEmail: string; password: string },
  { rejectValue: string }
>("user/fetchChangeUserEmail", async ({ newEmail, password }, { dispatch, rejectWithValue }) => {
  try {
    const user = auth.currentUser as User;
    if (user) {
      const credential = EmailAuthProvider.credential(user.email as string, password);
      await reauthenticateWithCredential(user, credential);
      await updateEmail(user, newEmail);
      await sendEmailVerification(user, { url: "http://localhost:3000/react-pixema-app/sign-in" });
      dispatch(setVerificationStatus(user.emailVerified));
      dispatch(handleConfirmModal(false));
    }
    return {
      email: auth.currentUser?.email as string,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchChangeUserName = createAsyncThunk<
  Pick<UserState, "name">,
  { name: string },
  { rejectValue: string }
>("user/fetchChangeUserName", async ({ name }, { dispatch, rejectWithValue }) => {
  try {
    await updateProfile(auth.currentUser as User, { displayName: name });
    dispatch(handleConfirmModal(false));
    return {
      name: auth.currentUser?.displayName as string,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchChangePassword = createAsyncThunk<
  void,
  { password: string; newPassword: string; confirmPassword: string },
  { rejectValue: string }
>(
  "user/fetchChangePassword",
  async ({ password, newPassword, confirmPassword }, { rejectWithValue }) => {
    try {
      const isPasswordsMatch = comparePasswords(password, confirmPassword);
      if (!isPasswordsMatch) {
        throw new Error("Passwords don't match");
      }
      const user = auth.currentUser as User;
      if (user) {
        const credential = EmailAuthProvider.credential(user.email as string, password);
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
      }
    } catch (error) {
      if (error instanceof Error) {
        const { message } = error as Error;
        return rejectWithValue(message);
      }
      const firebaseError = error as FirebaseError;
      return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
    }
  },
);

export const fetchSentResetPasswordEmail = createAsyncThunk<
  boolean,
  { email: string },
  { rejectValue: string }
>("user/fetchSentResetPasswordEmail", async ({ email }, { rejectWithValue }) => {
  try {
    sendPasswordResetEmail(auth, email);
    return true;
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

export const fetchConfirmResetPassword = createAsyncThunk<
  void,
  { oobCode: string; password: string },
  { rejectValue: string }
>("user/fetchConfirmResetPassword", async ({ oobCode, password }, { rejectWithValue }) => {
  try {
    confirmPasswordReset(auth, oobCode, password);
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

const initialState: UserState = {
  email: "",
  name: "",
  isLoading: false,
  errorMessage: null,
  isAuth: false,
  uid: null,
  verificationStatus: false,
  isOpenModal: false,
  isPasswordChanged: false,
  isResetEmailSent: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setVerificationStatus: (state, { payload }) => {
      state.verificationStatus = payload;
    },
    setUserAuth: (state, { payload }) => {
      state.isAuth = true;
      state.name = payload.displayName;
      state.email = payload.email;
      state.uid = payload.uid;
    },
    unsetUserAuth: (state) => {
      state.isAuth = false;
      state.name = initialState.name;
      state.email = initialState.email;
      state.uid = initialState.uid;
    },
    handleConfirmModal: (state, { payload }) => {
      state.isOpenModal = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.name = payload.name;
      state.uid = payload.uid;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.errorMessage = payload;
      }
    });
    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.name = payload.name;
      state.uid = payload.uid;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.errorMessage = payload;
      }
    });
    builder.addCase(fetchChangeUserEmail.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchChangeUserEmail.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.email = payload.email;
    });
    builder.addCase(fetchChangeUserEmail.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.errorMessage = payload;
      }
    });
    builder.addCase(fetchChangeUserName.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchChangeUserName.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.name = payload.name;
    });
    builder.addCase(fetchChangeUserName.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.errorMessage = payload;
      }
    });
    builder.addCase(fetchChangePassword.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchChangePassword.fulfilled, (state) => {
      state.isLoading = false;
      state.isPasswordChanged = true;
    });
    builder.addCase(fetchChangePassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.errorMessage = payload;
      }
    });
    builder.addCase(fetchSentResetPasswordEmail.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchSentResetPasswordEmail.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isResetEmailSent = payload;
    });
    builder.addCase(fetchSentResetPasswordEmail.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.errorMessage = payload;
      }
    });
    builder.addCase(fetchConfirmResetPassword.pending, (state) => {
      state.isLoading = true;
      state.errorMessage = null;
    });
    builder.addCase(fetchConfirmResetPassword.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchConfirmResetPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.errorMessage = payload;
      }
    });
  },
});

export default userSlice.reducer;
export const { setUserAuth, unsetUserAuth, setVerificationStatus, handleConfirmModal } =
  userSlice.actions;
