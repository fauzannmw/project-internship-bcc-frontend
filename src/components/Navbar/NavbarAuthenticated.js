import React from "react";
import { NavDropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/Logo/mentoree-nav.png";
import MoneyIcon from "../../assets/Navbar/money-icon.svg";
import ProfileIcon from "../../assets/Navbar/profile-icon-new.svg";
import LogoutIcon from "../../assets/Navbar/logout-icon.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../config/Auth";
import {
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  HamburgerIcon,
  NavMenu,
  NavBtnLinkRegister,
  NavBtnLinkLogin,
  NavRoutes,
  NavBtn,
  Balance,
  StyledImage,
} from "./NavbarStyle";

const Navbar = () => {
  const { setAuthTokens, authTokens } = useAuth();
  const Logout = () => {
    setAuthTokens();
    localStorage.clear();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
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
          <NavBtn>
            <NavLinks to="/top-up">
              <StyledImage src={MoneyIcon} />
              <Balance>100.000</Balance>
            </NavLinks>
          </NavBtn>
          <NavBtn>
            <NavLinks
              to={
                authTokens.role === "mentee"
                  ? "/profile-mentee"
                  : "/profile-mentor"
              }
            >
              <StyledImage src={ProfileIcon} />
              <Balance style={{ color: "#34495E" }}>Profile</Balance>
            </NavLinks>
          </NavBtn>
          <NavBtn>
            <NavLinks onClick={Logout} to="/">
              <StyledImage src={LogoutIcon} />
            </NavLinks>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
