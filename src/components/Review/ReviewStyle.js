import styled from "styled-components";
import { Image } from "react-bootstrap";

export const Text = styled.div`
  flex-direction: row;
  color: #34495e;
  @media screen and (max-width: 576px) {
    text-align: center;
  }
`;

export const Title = styled.div`
  width: 100%;
  margin-top: 0;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  font-family: Montserrat;

  @media screen and (max-width: 576px) {
    font-size: 24px;
    font-weight: 900;
    text-align: center;
    font-family: Montserrat;
  }
`;

export const StyledImage = styled(Image)`
  @media screen and (max-width: 576px) {
    width: 35%;
    margin: 0 auto;
  }
`;

export const Subtitle = styled.div`
  font-size: 20px;
  font-weight: 600;

  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`;

export const Desc = styled.div`
  font-size: 16px;

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;
