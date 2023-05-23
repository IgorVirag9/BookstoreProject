import { StyledError, StyledMessage } from "./ErrorMessageBox.style";

export type ErrorMessageBoxProps = {
  message: string;
  errorMessage: string;
};

const ErrorMessageBox = () => {
  return (
    <StyledError>
      <StyledMessage>Something went wrong, try again later...</StyledMessage>
    </StyledError>
  );
};

export default ErrorMessageBox;
