import styled from "styled-components";
import { Card } from "react-bootstrap";

export const Text = styled.div`
  flex-direction: row;
  color: #34495e;
  margin-left: 10px;
  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
  @media screen and (max-width: 576px) {
    margin-left: 0;
    margin-bottom: 20px;
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

export const EmptyCard = styled(Card)`
  height: 21.5rem;

  @media screen and (max-width: 1024px) {
    height: 18.5rem;
  }
  @media screen and (max-width: 768px) {
    height: 17.7rem;
  }
  @media screen and (max-width: 576px) {
    height: 22.3rem;
  }
`;

export const Subtitle = styled.div`
  /* text-align: center; */
  font-size: 18px;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;

export const Desc = styled.div`
  /* text-align: center; */
  font-size: 13px;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }

  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`;
