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


const Contact = ({ formData, setForm, navigation }) => {
  const { ads, price, phone } = formData;
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
                <FormInputTitle>Judul Iklan Anda</FormInputTitle>
                <FormInputBox
                  type="text"
                  name="ads"
                  value={ads}
                  onChange={setForm}
                  required
                />
              </FormInputs>
              <FormInputs>
                <FormInputTitle>Tarif (Rp/bulan) </FormInputTitle>
                <FormInputBox
                  type="number"
                  name="price"
                  value={price}
                  onChange={setForm}
                />
              </FormInputs>
              <FormInputs>
                <FormInputTitle>Nomor Telepon</FormInputTitle>
                <FormInputBox
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={setForm}
                />
              </FormInputs>
              <FormInputButton
                style={{ height: "40px" }}
                // onClick={() => navigation.next()}
              >
                Submit
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

export default Contact
