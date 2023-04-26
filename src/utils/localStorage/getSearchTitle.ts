export const getSearchTitle = (): string => {
  const searchTitle = localStorage.getItem("searchTitle");
  if (searchTitle) {
    return JSON.parse(searchTitle);
  } else return "";
};
