import { ChangeEvent, useCallback, useState } from "react";

export const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [value],
  );
  return { value, onChange };
};
