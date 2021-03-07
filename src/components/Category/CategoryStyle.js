import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const LandingContentTop = styled.div`
  width: 100%;
  height: 85vh;
  text-align: center;
  padding: 3rem;
  background: #ecf0f1;
  @media screen and (min-width: 1200px) {
    height: 100vh;
  }
`;

export const LandingContentBottom = styled.div`
  width: 100%;
  height: 85vh;
  text-align: center;
  padding: 3rem;
  background: #ecf0f1;
  margin-top: -100px;
`;

export const LandingContentTitle = styled.h1`
  font-family: Montserrat;
  color: #34495e;
  font-size: 48px;
  font-weight: 900;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-width: 250px;
  max-height: 400px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
  border-radius: 10px;
  margin: 50px 20px 50px;

  @media screen and (min-width: 1200px) {
    margin: 25px 50px 75px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 10px;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`;

export const Text = styled.p`
  line-height: 25px;
  color: #6c757d;
`;

export const Image = styled.img`
  
`;

export const CategorySubtitle = styled.div`
  width: 100%;
  margin-top: -40px;
  text-align: center;
  background: #ecf0f1;
  
`;

export const BtnKategori = styled(LinkR)`
  border-radius: 50px;
  background: #ffba15;
  white-space: nowrap;
  padding: 12px 26px;
  color: #34495e;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 100%;
  font-size: 20px;
  text-align: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
