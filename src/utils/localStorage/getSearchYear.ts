export const getSearchYear = (): string => {
  const searchYear = localStorage.getItem("searchYear");
  if (searchYear) {
    return JSON.parse(searchYear);
  } else return "";
};
