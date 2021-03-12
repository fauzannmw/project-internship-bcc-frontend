import styled from "styled-components";
import { Card, Col, Button } from "react-bootstrap";

export const StyledCard = styled(Card)`
  width: 18rem;
  filter: drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275)),
    drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035)),
    drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725)),
    drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802));
  border-radius: 16px;
`;

export const Text = styled.div`
  flex-direction: row;
  color: #34495e;
  margin-left: 10px;
  @media screen and (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export const Subtitle = styled.div`
  /* text-align: center; */
  font-size: 20px;
  font-weight: 600;

  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`;

export const Desc = styled.div`
  /* text-align: center; */
  font-size: 16px;

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`;
