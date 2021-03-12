import React from "react";
import { FaBars } from "react-icons/fa";
// import { ReactComponent as Logo } from "../../assets/Logo/LogoNav.svg";
import Logo from "../../assets/Logo/mentoree-nav.png";
import {
  Nav,
  NavbarContainer,
  NavBtn,
  NavItem,
  NavLinks,
  NavLogo,
  HamburgerIcon,
  NavMenu,
  NavBtnLinkRegister,
  NavBtnLinkLogin,
  NavRoutes,
} from "./NavbarStyle";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            {/* <Logo /> */}
            <img src={Logo} alt="Logo"/>
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
          <NavBtn>
            <NavBtnLinkRegister to="/sign-up">Daftar</NavBtnLinkRegister>
            <NavBtnLinkLogin to="/sign-in">Masuk</NavBtnLinkLogin>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
