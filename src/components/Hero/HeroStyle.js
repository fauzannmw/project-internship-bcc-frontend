import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  flex-grow: 1;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ecf0f1;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Text = styled.div`
  flex-direction: row;
  color: #34495e;
  margin-left: 10px;
`;

export const Title = styled.div`
  width: 100%;
  font-size: 10px;
  text-align: center;

  @media screen and (min-width: 800px) {
    width: 100%;
    margin-top: 0;
    font-size: 48px;
    font-weight: 900;
    text-align: center;
    font-family: Montserrat;
  }
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

export const ImageContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  @media screen and (min-width: 800px) {
    width: 70%;
    margin-top: 0;
    text-align: left;
    font-size: 25px;
  }
`;

export const Images = styled(LinkR)`
  width: 80%;
  @media screen and (min-width: 800px) {
    width: 50%;
  }
`;
