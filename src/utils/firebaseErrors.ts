export enum FirebaseErrorMessage {
  WEAK_PASSWORD = "Password should be at least 6 characters.",
  UNKNOWN_ERROR = "Unknown error. Please, reload page.",
  CREDENTIAL_ALREADY_IN_USE = "Credential already in use",
  EMAIL_EXISTS = "This email already exists",
  INVALID_EMAIL = "Invalid email. Email must contain '@'.",
  INVALID_PASSWORD = "Wrong password! Try again.",
  USER_DELETED = "Oops. User not found.",
}

export const getFirebaseErrorMessage = (code: string): FirebaseErrorMessage => {
  switch (code) {
    case "auth/weak-password":
      return FirebaseErrorMessage.WEAK_PASSWORD;
    case "auth/email-already-in-use":
      return FirebaseErrorMessage.EMAIL_EXISTS;
    case "auth/credential-already-in-use":
      return FirebaseErrorMessage.CREDENTIAL_ALREADY_IN_USE;
    case "auth/invalid-email":
      return FirebaseErrorMessage.INVALID_EMAIL;
    case "auth/wrong-password":
      return FirebaseErrorMessage.INVALID_PASSWORD;
    case "auth/user-not-found":
      return FirebaseErrorMessage.USER_DELETED;
    default:
      return FirebaseErrorMessage.UNKNOWN_ERROR;
  }
};
