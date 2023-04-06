import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { SignInFormValues, SignUpFormValues } from "types";
import { FirebaseError } from "firebase/app";
import { getFirebaseErrorMessage } from "utils";

interface UserState {
  name: string;
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
  isLoading: boolean;
  errorMessage: string | null;
  isAuth: boolean;
  uid: null | string;
}

export const fetchSignUpUser = createAsyncThunk<
  Omit<UserState, "isLoading" | "errorMessage" | "isAuth">,
  SignUpFormValues,
  { rejectValue: string }
>(
  "user/fetchSignUpUser",
  async ({ name, email, password, confirmPassword }, { rejectWithValue }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      // updateProfile(auth.currentUser as User, { displayName: name });
      return {
        email: user.email,
        name: name,
        password: password,
        confirmPassword: confirmPassword,
        uid: user.uid,
      };
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(getFirebaseErrorMessage(firebaseError.code));
    }
  },
);

export const fetchSignInUser = createAsyncThunk<
  Pick<UserState, "email" | "password">,
  SignInFormValues,
  { rejectValue: string }
>("user/fetchSignInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return {
      email: user.email,
      password: password,
      uid: user.uid,
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
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAuth: (state, { payload }) => {
      state.isAuth = true;
      state.name = payload.name;
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
export const { setUserAuth, unsetUserAuth } = userSlice.actions;
