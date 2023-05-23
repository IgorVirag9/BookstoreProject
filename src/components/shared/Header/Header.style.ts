import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  height: 60px;
  padding: 0 30px;
  font-size: 1.2rem;
  line-height: 1.5;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;

  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    padding: 0;
    text-decoration: none;

    li {
      list-style-type: none;
      transition: transform 0.2s ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.3);
      }
    }
  }
`;

export const StyledNavbarLink = styled(Link)`
  padding: 0 20px;
  text-decoration: none;
  color: black;
`;

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export default StyledHeader;
