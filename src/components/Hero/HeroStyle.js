import styled from "styled-components";
import { Image } from "react-bootstrap";
import { Link as LinkR } from "react-router-dom";

export const Text = styled.div`
  color: #34495e;
  margin-left: 10px;

  @media screen and (max-width: 2000px) {
    width: 60%;
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

export const Images = styled.img``;

export const GambarStyled = styled.img`
  @media screen and (max-width: 1400px) {
    width: 100%;
    margin-top: 0;
    font-size: 12px;
    text-align: center;
  }
`;
