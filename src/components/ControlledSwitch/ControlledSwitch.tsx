import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useEffect, useState } from "react";
import { setTheme } from "store/features";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { Color } from "ui";

const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 32,
  height: 20,
  padding: 0,
  borderRadius: 10,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? Color.PRIMARY : Color.PRIMARY_LIGHT,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 16,
    height: 16,
    borderRadius: 12,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? Color.SECONDARY : Color.GRAPHITE,
    boxSizing: "border-box",
  },
}));

export const ControlledSwitch = () => {
  const [checked, setChecked] = useState(true);
  const { theme } = useAppSelector((state) => state.theme);
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
