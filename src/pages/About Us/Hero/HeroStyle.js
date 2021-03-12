import styled from "styled-components";

export const Title = styled.h1`
  font-family: Montserrat;
  color: #34495e;
  font-size: 36px;
  font-weight: bold;

  @media screen and (max-width: 576px) {
    font-size: 28px;
    font-weight: 900;
    text-align: center;
    font-family: Montserrat;
  }
`;
export const Subtitle = styled.div`
  font-size: 16px;

  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`;
