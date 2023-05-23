import StyledHeader, { StyledNavbarLink, StyledNavbar } from "./Header.style";

type NavbarLinks = {
  text: string;
  url: string;
};

type HeaderProps = {
  links: NavbarLinks[];
  heading: string;
};

const Header = ({ links, heading }: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledNavbarLink to={"/"}>
        <h1>{heading}</h1>
      </StyledNavbarLink>
      <StyledNavbar>
        <ul>
          {links.map(({ text, url }) => (
            <li key={text}>
              <StyledNavbarLink key={text} to={url}>
                {text}
              </StyledNavbarLink>
            </li>
          ))}
        </ul>
      </StyledNavbar>
    </StyledHeader>
  );
};

export default Header;
