export const getAppTheme = (): string => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    return JSON.parse(theme);
  } else return "dark";
};
