import styled from "styled-components";

const StyledInput = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
    margin-left: 10px;
  }

  input {
    text-align: center;
    width: 100%;
    height: 45px;
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    font-size: 16px;
    font-weight: 400;
    color: #444;
    padding: 0;
    border-width: 1px;
    margin-bottom: 15px;
  }
`;

export default StyledInput;
