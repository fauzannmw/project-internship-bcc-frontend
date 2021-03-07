import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  min-width: 100%;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ecf0f1;

  @media screen and (min-width: 1000px) {
    /* flex-direction: row;
    justify-content: space-between; */
  }
`;

export const FormContainer = styled.div`
  margin: 50px auto;
  width: 1000px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const FormContentLeft = styled.div`
  background: #fff;
  border-radius: 10px 0 0 10px;
  position: relative;
`;
export const FormContentRight = styled.div`
  border-radius: 0 10px 10px 0;
  position: relative;
  background: #fff;
`;
export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: start;
  width: 80%;
  margin-bottom: 1rem;
  color: #34495e;
`;
export const FormSubtitle = styled.p`
  font-size: 1rem;
  text-align: start;
  width: 80%;
  margin-bottom: 1rem;
  color: #34495e;
`;

export const FormInputs = styled.div`
  margin-bottom: 0.5rem;
  width: 80%;
`;
export const FormInputTitle = styled.label`
  display: inline-block;
  font-size: 1rem;
  margin-bottom: 6px;
  color: #34495e;
`;

export const FormInputBox = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 8px;
  height: 40px;
  width: 100%;
  border: 2px solid #34495e;
`;

export const FormInputButton = styled.button`
  width: 80%;
  height: 50px;
  margin-top: 10px;
  border-radius: 8px;
  background: #ffba15;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    background: #ffba15;
    opacity: 0.5;
    color: #fff;
    transition: all 0.4s ease-out;
  }
`;
