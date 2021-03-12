import styled from "styled-components";
import { Image, Form, Button } from "react-bootstrap";

export const Text = styled.div`
  color: #34495e;
  margin-left: 10px;

  @media screen and (max-width: 2000px) {
    width: 100%;
  }
  @media screen and (max-width: 1400px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-right: 10px;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 48px;
  font-weight: 900;
  font-family: Montserrat;
`;

export const Subtitle = styled.div`
  font-weight: 300;
  font-size: 18px;
`;

export const FormLabel = styled(Form.Label)`
  font-weight: 600;
  font-size: 20px;
  color: #506880;
`;

export const StyledForm = styled(Form)`
  @media screen and (min-width: 1400px) {
    margin-left: 60px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-left: -60px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: -100px;
  }

  @media screen and (max-width: 576px) {
    margin-left: 20px;
  }

  @media screen and (max-width: 376px) {
    margin-left: 10px;
  }
`;

export const StyledFormControl = styled(Form.Control)`
  color: #506880;
  font-weight: 300;
  font-size: 14px;
  width: 340px;
  height: 50px;
  background: #ffffff;
  border-radius: 8px;

  @media screen and (max-width: 576px) {
    width: 340px;
  }

  @media screen and (max-width: 376px) {
    width: 324px;
  }

  @media screen and (max-width: 320px) {
    width: 260px;
  }
`;

export const StyledButton = styled(Button)`
  width: 200px;
  height: 44px;
  background: #3498db;
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
`;
