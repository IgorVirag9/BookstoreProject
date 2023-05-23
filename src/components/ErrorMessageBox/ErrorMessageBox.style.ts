import styled from "styled-components";

export const StyledError = styled.section`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  display: flex;
  align-items: center;
  background-color: #fbeec1;
  text-align: center;
  width: 350px;
  height: 120px;
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.third};
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  margin-top: 20%;
  margin-left: 40%;
  margin-bottom: 160px;
`;

export const StyledMessage = styled.p`
  margin-left: 10px;
`;
