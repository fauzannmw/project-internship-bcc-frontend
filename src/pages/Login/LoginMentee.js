import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/NavbarAuth";
import { ReactComponent as Image } from "../../assets/Image/Mentee.svg";
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
} from "./LoginStyle";

const LoginMentee = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(email);
    console.log(password);
    console.log("====================================");
    const token = await fetch("", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }), // body data type must match "Content-Type" header
    }).then((res) => res.json());
    console.log(token);
  };
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
              <FormTitle>Lorem Ipsum</FormTitle>
              <FormSubtitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </FormSubtitle>
              <FormInputs>
                <FormInputTitle>Email</FormInputTitle>
                <FormInputBox
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormInputs>
              <FormInputs>
                <FormInputTitle>Password</FormInputTitle>
                <FormInputBox
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormInputs>
              <FormInputButton onClick={(e) => onSubmit(e)}>
                Masuk sebagai Mentee
              </FormInputButton>
            </Form>
          </FormContentRight>
        </FormContainer>
        <div
          className="text-center"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <p>
            Belum mempunyai akun ?{" "}
            <Link to="/sign-up">
              <span>Daftar Sekarang</span>
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default LoginMentee;
