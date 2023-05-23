import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 1rem 0;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    padding: 0;

    li {
      list-style-type: none;
    }
  }

  p {
    margin: 0;
  }
`;

export default StyledFooter;
