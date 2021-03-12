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

const Address = ({ formData, setForm, navigation }) => {
  const { address, about, cv } = formData;
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
            <Form noValidate>
              <FormTitle>Daftar sebagai mentor</FormTitle>
              <FormSubtitle>
                Silakan isi data-data dibawah ini dengan benar.
              </FormSubtitle>
              <FormInputs>
                <FormInputTitle>Alamat</FormInputTitle>
                <FormInputBox
                  type="text"
                  name="address"
                  value={address}
                  onChange={setForm}
                  required
                />
              </FormInputs>
              <FormInputs>
                <FormInputTitle>Latar Belakang</FormInputTitle>
                <FormInputBox
                  type="text"
                  name="about"
                  value={about}
                  onChange={setForm}
                />
              </FormInputs>
              <FormInputs>
                <FormInputTitle>Unggah CV Anda (Opsional)</FormInputTitle>
                <input type="file" name="cv" value={cv} onChange={setForm} />
              </FormInputs>
              <FormInputButton
                style={{ height: "40px" }}
                onClick={() => navigation.next()}
              >
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

export default Address;
