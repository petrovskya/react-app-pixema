import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

import { Color, Media } from "ui";

const StyledSettingsForm = styled("form")`
  display: grid;
  gap: 40px;
  width: 100%;
  color: ${Color.WHITE};
`;

const SettingsFormField = styled("div")`
  display: grid;
  gap: 20px;
`;

const SettingsFieldWrapper = styled("div")`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  padding: 40px;
  border-radius: 10px;
  background-color: ${Color.BLACK};
  ${Media.TABLET} {
    flex-direction: column-reverse;
    padding: 20px;
  }
`;

const SettingsColumnFieldWrapper = styled("div")`
  display: grid;
  justify-items: center;
  gap: 20px;
  padding: 40px;
  border-radius: 10px;
  background-color: ${Color.BLACK};
  ${Media.TABLET} {
    padding: 20px;
  }
`;

const ResetPasswordWrapper = styled("div")`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 40px;
  border-radius: 10px;
  background-color: ${Color.BLACK};
  ${Media.TABLET} {
    flex-direction: row;
    padding: 20px;
  }
`;

const FormText = styled("p")`
  display: flex;
  flex-direction: column;
`;

const FormTextSecondary = styled("span")`
  color: ${Color.SECONDARY};
`;

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

export {
  StyledSettingsForm,
  SettingsFormField,
  ResetPasswordWrapper,
  SettingsFieldWrapper,
  FormTextSecondary,
  FormText,
  StyledSwitch,
  SettingsColumnFieldWrapper,
};
