import { createSlice } from "@reduxjs/toolkit";

interface themeState {
  theme: string;
}

const initialState: themeState = {
  theme: "dark",
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state) {
      state.theme === "dark" ? (state.theme = "light") : (state.theme = "dark");
    },
  },
});
export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
