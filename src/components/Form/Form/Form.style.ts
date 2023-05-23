import styled from "styled-components";

export const FormWrapper = styled.section`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  margin: auto;
  max-width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 310px;

  form {
    width: 100%;
  }

  a {
    text-decoration: none;
    margin-top: 30px;
  }

  Button {
    min-width: 150px;
    max-width: 200px;
    margin-bottom: 30px;
  }
`;
