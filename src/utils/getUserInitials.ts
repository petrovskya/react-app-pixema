export const getUserInitials = (name: string): string => {
  const initials = name
    .trim()
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
  return initials;
};
