import styled from "styled-components";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";

export const Title = styled.h1`
  font-family: Montserrat;
  color: #34495e;

  margin-top: 0;
  font-size: 36px;
  font-weight: bold;
  font-family: Montserrat;

  @media screen and (max-width: 576px) {
    font-size: 24px;
    font-weight: 900;
    text-align: center;
    font-family: Montserrat;
  }
`;

export const MentorBtn = styled.button``;

export const StyledDropDown = styled(DropdownButton)`
  color: #b6b6b6;
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  font-family: Montserrat;

  @media screen and (max-width: 576px) {
    font-size: 18px;
    font-weight: 900;
  }
`;

export const StyledDropDownItem = styled(Dropdown.Item)`
  width: 360px;
  @media screen and (max-width: 576px) {
    width: 300px;
    font-size: 14px;
    font-weight: bold;
  }
`;
