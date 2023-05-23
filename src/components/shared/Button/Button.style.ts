import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary";

const StyledButton = styled.button<{ variant: ButtonVariant }>`
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.colors.primary : theme.colors.fifth};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  color: #444;
  cursor: pointer;
`;

export default StyledButton;
