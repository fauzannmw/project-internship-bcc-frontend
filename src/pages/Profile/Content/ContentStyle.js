import styled from "styled-components";
import { Card, Button, Image } from "react-bootstrap";

export const StyledCard = styled(Card)`
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
  border-radius: 16px;

  /* @media screen and (max-width: 576px) {
      text-align: center
  } */
`;

export const Text = styled.div`
  color: #34495e;
  font-family: Montserrat;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
`;

export const Subtitle = styled.div`
  font-weight: 300;
  font-size: 18px;
`;

export const Atribute = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #b6b6b6;
`;

export const StyledButton = styled(Button)`
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  width: 263px;
  height: 56px;
  margin-top: 20px;

  :hover {
    background: #ccf2f4;
  }
`;

export const StyledImage = styled(Image)`
  @media screen and (max-width: 576px) {
    width: 35%;
    margin: 0 auto;
  }
`;

export const Desc = styled.div`
  font-size: 16px;

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;
