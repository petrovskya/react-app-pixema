import RotateLoader from "react-spinners/ClipLoader";

import { Color } from "ui";

import { LittleSpinnerStyles } from "./styles";

export const LittleSpinner = () => (
  <div className="sweet-loading">
    <RotateLoader
      cssOverride={LittleSpinnerStyles}
      color={Color.BLACK}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
);
