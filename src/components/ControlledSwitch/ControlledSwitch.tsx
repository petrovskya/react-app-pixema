import { useEffect, useState } from "react";

import { setTheme } from "store/features";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { getTheme } from "store/selectors";

import { StyledSwitch } from "./styles";

export const ControlledSwitch = () => {
  const { theme } = useAppSelector(getTheme);
  const [checked, setChecked] = useState(true);
  const dispatch = UseAppDispatch();

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  const handleChange = (prev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTheme());
    setChecked((prev) => !prev);
  };

  return <StyledSwitch checked={checked} onChange={handleChange} />;
};
