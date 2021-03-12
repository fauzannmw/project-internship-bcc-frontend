import React from "react";
import { FaBars } from "react-icons/fa";
// import { ReactComponent as Logo } from "../../assets/Logo/LogoNav.svg";
import Logo from "../../assets/Logo/mentoree-nav.png";
import {
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  HamburgerIcon,
  NavMenu,
  NavRoutes,
} from "./NavbarStyle";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            {/* <Logo /> */}
            <img src={Logo} alt="Logo" />
          </NavLogo>
          <HamburgerIcon>
            <FaBars size={30} />
          </HamburgerIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about-us">About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/explore">Explore</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
