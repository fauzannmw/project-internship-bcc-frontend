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

const Account = ({ formData, setForm, navigation }) => {
  const { name, email, password, passwordConfirm } = formData;
  return (
    <div>
      <Navbar />
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
                <FormInputBox
                  type="text"
                  name="name"
                  value={name}
                  onChange={setForm}
                  // required="true"
                />
              </FormInputs>
              <FormInputs>
                <FormInputTitle>Email</FormInputTitle>
                <FormInputBox
                  type="email"
                  name="email"
                  value={email}
                  onChange={setForm}
                />
              </FormInputs>
              <FormInputs>
                <FormInputTitle>Password</FormInputTitle>
                <FormInputBox
                  type="password"
                  name="password"
                  value={password}
                  onChange={setForm}
                />
              </FormInputs>
              <FormInputs>
                <FormInputTitle>Konfirmasi Password</FormInputTitle>
                <FormInputBox
                  type="password"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  onChange={setForm}
                />
              </FormInputs>
              <FormInputButton onClick={() => navigation.next()}>
              {/* <FormInputButton onClick={() => console.log(formData)}> */}
                Selanjutnya
              </FormInputButton>
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
