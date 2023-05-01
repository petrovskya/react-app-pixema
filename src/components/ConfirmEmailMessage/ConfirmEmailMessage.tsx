import { StyledConfirmEmailMessage } from "./styles";

export const ConfirmEmailMessage = () => (
  <StyledConfirmEmailMessage>
    <h2>Ooops.. </h2>
    <h3>You need to confirm your email first.</h3>
    <p>
      {" "}
      A confirmation email has been sent to your address. The email may be accidentally in the spam
      folder.
    </p>
    <span> Refresh the page after confirmation.</span>
  </StyledConfirmEmailMessage>
);
