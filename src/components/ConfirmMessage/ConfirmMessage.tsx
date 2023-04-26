import React from "react";
import { StyledConfirmMessage } from "./styles";

export const ConfirmMessage = () => (
  <StyledConfirmMessage>
    Ooops.. You need to confirm your email first.
    <br />
    A confirmation email has been sent to your address.
    <br />
    The email may be accidentally in the spam folder.
    <br />
    Refresh the page after confirmation.
  </StyledConfirmMessage>
);
