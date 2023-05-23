import { ThemeProvider } from "styled-components";
import StyledFooter from "./Footer.style";
import theme from "../../../theme";

export type SocialMediaLink = {
  icon: string;
  alt: string;
  href: string;
};

type FooterProps = {
  links: SocialMediaLink[];
};

const Footer = ({ links }: FooterProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <StyledFooter>
        <ul>
          {links.map((link: SocialMediaLink) => (
            <li key={link.alt}>
              <a href={link.href} key={link.alt}>
                <img src={link.icon} alt={link.alt} />
              </a>
            </li>
          ))}
        </ul>

        <p>Author: Igor Virag</p>
        <small>&copy;Bookstore</small>
      </StyledFooter>
    </ThemeProvider>
  );
};

export default Footer;
