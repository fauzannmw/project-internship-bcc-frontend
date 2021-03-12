import styled from "styled-components";
import { Image, Button } from "react-bootstrap";
import { Link as LinkR } from "react-router-dom";

export const Text = styled.div`
  color: #34495e;
  margin-left: 10px;

  @media screen and (max-width: 2000px) {
    width: 60%;
  }
  @media screen and (min-width: 1366px) {
    margin-top: 100px;
    width: 45%;
  }
  @media screen and (max-width: 1366px) {
    width: 45%;
  }
  @media screen and (max-width: 768px) {
    width: 45%;
    margin-top: 0;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-right: 10px;
  }
`;

export const MainTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  font-family: Montserrat;
  color: #34495e;
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-weight: 900;
  font-size: 48px;

  @media screen and (max-width: 576px) {
    font-size: 30px;
    font-weight: 900;
    text-align: center;
  }
`;

export const StyledImage = styled(Image)`
  @media screen and (max-width: 1400px) {
    width: 45%;
  }
  @media screen and (max-width: 768px) {
    width: 45%;
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const Subtitle = styled.div`
  font-weight: 300;
  font-size: 18px;

  @media screen and (max-width: 576px) {
    width: 100%;
    margin-top: 0;
    font-size: 14px;
    text-align: center;
  }
`;

export const StartButton = styled(Button)`
  width: 300px;
  height: 60px;
  background: #ffba15;
  border-radius: 30px;
  font-weight: bold;
  font-size: 24px;
  color: #ffffff;
  margin-top: 50px;

  &:hover {
    background: #ffba15;
    opacity: 0.5;
    color: #ffffff;
  }
`;
