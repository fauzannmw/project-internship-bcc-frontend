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

const Occupation = ({ formData, setForm, navigation }) => {
  const { occupation, category, teachingMethod } = formData;
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
                <FormInputTitle>Pekerjaan</FormInputTitle>
                <FormInputBox
                  type="text"
                  name="occupation"
                  value={occupation}
                  onChange={setForm}
                  required
                />
              </FormInputs>
              <FormInputs>
                <FormInputTitle>Kategori Subjek</FormInputTitle>
                <FormInputBox
                  type="text"
                  name="category"
                  value={category}
                  onChange={setForm}
                />
              </FormInputs>
              <FormInputs>
                <FormInputTitle>Metode pengajaran</FormInputTitle>
                <FormInputBox
                  type="text"
                  name="teachingMethod"
                  value={teachingMethod}
                  onChange={setForm}
                />
              </FormInputs>
              <FormInputButton onClick={() => navigation.next()}>
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

export default Occupation;
