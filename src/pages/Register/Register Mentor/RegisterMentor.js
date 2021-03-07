import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/NavbarAuth";
import { ReactComponent as Image } from "../../../assets/Image/Mentor.svg";
import {
  Container,
  Form,
  FormContainer,
  FormContentLeft,
  FormContentRight,
  FormSubtitle,
  FormTitle,
  FormInputs,
  FormInputTitle,
  FormInputBox,
  FormInputButton,
} from "./RegisterMentorStyle";

const RegisterMentee = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <FormContainer>
          <FormContentLeft>
            {/* <img className="form-img" src={Image} alt="spaceship" /> */}
            <Image
              style={{
                marginTop: "100px",
                maxHeight: "500px",
                maxWidth: "500px",
              }}
            />
          </FormContentLeft>
          <FormContentRight>
            <Form noValidate>
              <FormTitle>Lorem Ipsum</FormTitle>
              <FormSubtitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </FormSubtitle>
              <FormInputs>
                <FormInputTitle>Nama Lengkap</FormInputTitle>
                <FormInputBox type="text" name="username" />
              </FormInputs>
              <FormInputs>
                <FormInputTitle>Email</FormInputTitle>
                <FormInputBox type="email" name="email" />
              </FormInputs>
              <FormInputs>
                <FormInputTitle>Password</FormInputTitle>
                <FormInputBox type="password" name="password" />
              </FormInputs>
              <FormInputs>
                <FormInputTitle>Konfirmasi Password</FormInputTitle>
                <FormInputBox type="password" name="password2" />
              </FormInputs>
              <FormInputButton type="submit">Selanjutnya</FormInputButton>
            </Form>
          </FormContentRight>
        </FormContainer>
        <div
          className="text-center"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <p>
            Sudah mempunyai akun ?{" "}
            <Link to="/sign-in">
              <span>Login</span>
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default RegisterMentee;
