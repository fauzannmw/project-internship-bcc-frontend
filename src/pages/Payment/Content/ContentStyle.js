import styled from "styled-components";
import { Image, Button } from "react-bootstrap";

export const Text = styled.div`
  color: #34495e;
  margin-left: 10px;

  @media screen and (max-width: 2000px) {
    width: 55%;
  }
  @media screen and (max-width: 1400px) {
    margin-top: 100px;
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

export const StyledImage = styled(Image)`
  @media screen and (max-width: 2000px) {
    width: 40%;
  }
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

export const Title = styled.div`
  width: 100%;
  font-size: 48px;
  font-weight: 900;
  font-family: Montserrat;

  @media screen and (max-width: 2000px) {
    width: 60%;
    margin-top: 100px;
  }

  @media screen and (max-width: 1400px) {
    width: 80%;
    margin-top: 0;
    font-size: 38px;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    font-size: 32px;
    text-align: center;
    /* margin-top: 100px; */
  }
`;

export const Subtitle = styled.div`
  width: 100%;
  font-size: 8px;
  margin-top: 0;
  font-size: 20px;

  @media screen and (max-width: 576px) {
    width: 100%;
    margin-top: 0;
    font-size: 14px;
    text-align: center;
  }
  @media screen and (min-width: 1400px) {
    width: 70%;
  }
`;

export const PriceTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #506880;

  @media screen and (min-width: 1400px) {
    width: 70%;
    margin-top: 150px;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    margin-top: 0;
    font-size: 14px;
    text-align: center;
  }
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 32px;
  color: #ffba15;

  @media screen and (max-width: 576px) {
    width: 100%;
    margin-top: 0;
    font-size: 14px;
    text-align: center;
  }
`;

export const StyledButton = styled(Button)`
  width: 300px;
  height: 50px;
  /* width: 320px;
  height: 54px; */
  background: #3498db;
  border-radius: 8px;
  font-weight: 600;
  font-size: 20px;
  align-items: center;
  color: #ffffff;
  border: 0px solid #3498db;

  &:hover {
    background: #3498db;
    opacity: 0.5;
  }

  @media screen and (max-width: 576px) {
    width: 50%;
    height: 38px;
    margin-top: 0;
    margin-left: 95px;
    margin-right: auto;
    font-size: 14px;
  }
`;

export const SaldoText = styled.p`
  color: #b6b6b6;
  font-weight: 600;
  font-size: 16px;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 38px;
    font-size: 14px;
    text-align: center;
  }
`;
