import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #ecf0f1;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  padding: 0.5rem calc((100vw - 1000px) / 2); //
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    display: flex;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  margin-top: -5px;
`;

export const HamburgerIcon = styled.div`
  display: none;
  color: #34495e;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 70%);
    font: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: #34495e;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ffba15;
  }
`;

export const NavRoutes = styled(LinkS)`
  color: #34495e;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ffba15;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLinkLogin = styled(LinkR)`
  border-radius: 50px;
  background: #ffba15;
  white-space: nowrap;
  padding: 8px 26px;
  color: #34495e;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const NavBtnLinkRegister = styled(LinkR)`
  border-radius: 50px;
  background: #ecf0f1;
  white-space: nowrap;
  padding: 8px 26px;
  color: #34495e;
  font-size: 18px;
  outline: none;
  border: 2px solid #ffba15;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
