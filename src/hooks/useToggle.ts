import { useState, useCallback } from "react";

export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [state, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);
  return [state, toggle];
};
