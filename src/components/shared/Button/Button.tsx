import StyledButton, { ButtonVariant } from "./Button.style";

type ButtonProps = {
  text: string;
  onClickHandler: any;
  variant?: ButtonVariant;
  type?: "button" | "submit";
};

const Button = ({
  text,
  onClickHandler,
  variant = "primary",
  type = "button",
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClickHandler} variant={variant} type={type}>
      {text}
    </StyledButton>
  );
};

export default Button;
