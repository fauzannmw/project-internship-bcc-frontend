import React from "react";
import { FaBars } from "react-icons/fa";
import { ReactComponent as Logo } from "../../assets/Logo/LogoNav.svg";
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
            <Logo />
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
              <NavRoutes to="/explore">Explore</NavRoutes>
            </NavItem>
            <NavItem>
              <NavLinks to="profile">Profile</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLinkLogin to="/sign-out">Keluar</NavBtnLinkLogin>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
