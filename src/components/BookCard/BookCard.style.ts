import styled from "styled-components";

const StyledBookCard = styled.article`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fbeec1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  margin: 30px;
  text-align: center;

  img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    margin: 0;
    margin-bottom: 5px;
    color: #666;
  }

  h2 {
    font-size: 1.5rem;
    margin: 0;
    margin-bottom: 5px;
  }

  a {
    text-decoration: none;
    margin: 1em;
    list-style-type: none;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const StyledBookCardButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;

  cursor: pointer;

  &:hover {
    background-color: #005ca6;
  }
`;

export default StyledBookCard;
