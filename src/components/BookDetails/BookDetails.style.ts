import styled from "styled-components";

const StyledBookDetails = styled.section`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  display: flex;
  align-items: end;

  line-height: 1.6;

  img {
    width: 450px;
    height: 600px;
    margin: 40px;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    margin: 0;
    margin-left: auto;
  }
`;

export const StyledBookInfo = styled.div`
  height: 180px;
  margin-top: 3%;
`;

export default StyledBookDetails;
