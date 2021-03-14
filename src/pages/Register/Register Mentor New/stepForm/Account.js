import React from "react";
import Navbar from "../../../../components/Navbar/NavbarAuth";
import { Link } from "react-router-dom";
import { ReactComponent as Image } from "../../../../assets/Image/Mentor.svg";
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
} from "./GeneralStyle";

const Account = () => {
  return (
    <div>
      <Container>
        <FormContainer>
          <FormContentLeft>
            <Image
              style={{
                marginTop: "100px",
                maxHeight: "500px",
                maxWidth: "500px",
              }}
            />
          </FormContentLeft>
          <FormContentRight>
            <Form>
              <FormTitle>Daftar sebagai mentor</FormTitle>
              <FormSubtitle>
                Silakan isi data-data dibawah ini dengan benar.
              </FormSubtitle>
              <FormInputs>
                <FormInputTitle>Nama Lengkap</FormInputTitle>
                <FormInputBox type="text" name="name" />
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
                <FormInputBox type="password" name="passwordConfirm" />
              </FormInputs>
              <FormInputButton>Selanjutnya</FormInputButton>
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

export default Account;
