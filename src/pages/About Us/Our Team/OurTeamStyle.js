import styled from "styled-components";

export const Title = styled.h1`
  font-family: Montserrat;
  color: #34495e;
  font-size: 48px;
  font-weight: 900;
`;
export const Subtitle = styled.div`
  width: 100%;
  font-size: 8px;
  text-align: center;

  @media screen and (min-width: 800px) {
    width: 100%;
    margin-top: 0;
    font-size: 20px;
    text-align: center;
  }
`;

export const Name = styled.p`
  width: 100%;
  font-size: 18px;
  text-align: center;
`;

export const Desc = styled.p`
  width: 100%;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  font-weight: 300;
  opacity: 70%;
`;
