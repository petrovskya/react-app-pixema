import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { Color } from "ui";
import { SpinnerStyles } from "./styles";

export const Spinner = () => {
  return (
    <div className="sweet-loading">
      <MoonLoader
        cssOverride={SpinnerStyles}
        color={Color.PRIMARY_LIGHT}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
