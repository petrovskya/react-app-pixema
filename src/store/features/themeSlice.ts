import { createSlice } from "@reduxjs/toolkit";
import { getAppTheme } from "utils/localStorage";

interface themeState {
  theme: string;
}

const initialState: themeState = {
  theme: getAppTheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state) {
      state.theme === "dark" ? (state.theme = "light") : (state.theme = "dark");
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
