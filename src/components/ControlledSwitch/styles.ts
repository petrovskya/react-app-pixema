import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

import { Color } from "ui";

const StyledSwitch = styled(Switch)(({ theme }) => ({
  display: "flex",
  width: 32,
  height: 20,
  padding: 0,
  borderRadius: 10,
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
      color: "#fff",
      transform: "translateX(12px)",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? Color.PRIMARY : Color.PRIMARY_LIGHT,
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 16,
    height: 16,
    borderRadius: 12,
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    backgroundColor: theme.palette.mode === "dark" ? Color.SECONDARY : Color.GRAPHITE,
    boxSizing: "border-box",
    opacity: 1,
  },
}));

export { StyledSwitch };
