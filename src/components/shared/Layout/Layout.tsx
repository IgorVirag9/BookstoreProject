import Header from "../Header/Header";
import { navbarData } from "../../../data/navbar";
import Footer from "../Footer/Footer";
import { socialMediaLinks } from "../../../data/footer";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<Record<never, any>>) => {
  return (
    <>
      <Header links={navbarData.links} heading={navbarData.heading} />
      <main>{children}</main>
      <Footer links={socialMediaLinks} />
    </>
  );
};

export default Layout;
