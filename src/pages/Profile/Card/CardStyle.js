import styled from "styled-components";
import { Card, Image, Col } from "react-bootstrap";

export const StyledCard = styled(Card)`
  padding: 32px 48px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12);
  border-radius: 16px;

  @media screen and (max-width: 1400px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 576px) {
  }
`;

export const StyledImage = styled(Image)`
  width: 150px;
  @media screen and (max-width: 1024px) {
    width: 80%;
    margin-top: 20px;
  }
`;

export const Text = styled.div`
  color: #34495e;
  font-family: Montserrat;
  padding-top: 15px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Icon = styled.div`
  padding-top: 15px;
  font-weight: 600;
  font-size: 24px;
  color: #ffba15;
`;

export const Atribute = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #b6b6b6;
`;

export const Data = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #506880;
`;
