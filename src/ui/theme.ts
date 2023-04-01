import { css } from "styled-components";

export const themeColors = css`
  html[theme="dark"] {
    --primary: #7b61ff;
    --primary-light: #917cff;
    --secondary: #80858b;
    --black: rgba(0, 0, 0, 0.2);
    --dark: #242426;
    --graphite: #323537;
    --error: #ff5154;
    --light: #afb2b6;
    --white: #fff;
    --green: #00a340;
    --yellow: #f3a608;
    --orange: #f45d2d;
  }
  html[theme="light"] {
    --primary: #7b61ff;
    --primary-light: #917cff;
    --secondary: #80858b;
    --dark: #fff;
    --light: #323537;
    --white: #242426;
    --graphite: #fff;
    --black: #afb2b6;
    --error: #ff5154;
    --green: #00a340;
    --yellow: #f3a608;
    --orange: #f45d2d;
  }
`;
