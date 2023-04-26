import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase";
import {
  User,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { SignInFormValues, SignUpFormValues } from "types";
import { FirebaseError } from "firebase/app";
import { getFirebaseErrorMessage } from "utils";

interface UserState {
  name: string | null;
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
  isLoading: boolean;
  errorMessage: string | null;
  isAuth: boolean;
  uid: null | string;
  verificationStatus: boolean;
}

export const fetchSignUpUser = createAsyncThunk<
  Omit<UserState, "isLoading" | "errorMessage" | "isAuth">,
  SignUpFormValues,
  { rejectValue: string }
>(
  "user/fetchSignUpUser",
  async ({ name, email, password, confirmPassword }, { dispatch, rejectWithValue }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser as User, { displayName: name });
      await sendEmailVerification(user);
      dispatch(setVerificationStatus(user.emailVerified));
      return {
        email: user.email,
        name: user.displayName,
        password: password,
        confirmPassword: confirmPassword,
        uid: null,
        verificationStatus: user.emailVerified,
      };
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
    }
  },
);

export const fetchSignInUser = createAsyncThunk<
  Pick<UserState, "email" | "password" | "name" | "verificationStatus">,
  SignInFormValues,
  { rejectValue: string }
>("user/fetchSignInUser", async ({ email, password }, { dispatch, rejectWithValue }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    dispatch(setVerificationStatus(user.emailVerified));
    return {
      email: user.email,
      password: password,
      uid: user.uid,
      name: user.displayName,
      verificationStatus: user.emailVerified,
    };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
  }
});

const initialState: UserState = {
  email: "",
  name: "",
  password: null,
  confirmPassword: null,
  isLoading: false,
  errorMessage: null,
  isAuth: false,
  uid: "",
  verificationStatus: false,
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
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.errorMessage = payload;
      }
    });
  },
});

export default userSlice.reducer;
export const { setUserAuth, unsetUserAuth, setVerificationStatus } = userSlice.actions;
