import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/NavbarAuth";
import { ReactComponent as Image } from "../../../assets/Image/Mentee.svg";
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
} from "./RegisterMenteeStyle";
import Mentoree from "../../../api/Mentoree";
import { useAuth } from "../../../config/Auth";
import { Redirect } from "react-router-dom";
import jwt from "jsonwebtoken";

const RegisterMentee = () => {
  const { setAuthTokens, authTokens } = useAuth();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);

    // Axios Start
    const res = await Mentoree.post("/user/register", {
      email: email,
      name: name,
      password: password,
      confirmPassword: confirmPassword,
    });
    console.log(res);
    await Mentoree.post("/user/login", {
      email: email,
      password: password,
    }).then(async (res) => {
      console.log(res);
      res.status === 200 && setAuthTokens(await jwt.decode(res.data.token));
      if (res.status == 200) {
        console.log("Login Berhasil");
        window.location.href = "/";
      }
    });
    // Axios End

    // Fetch Start
    // setMentor(res.data.mentor);
    // const token = await fetch("", {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //     name: name,
    //   }), // body data type must match "Content-Type" header
    // }).then((res) => res.json());
    // console.log(token);
    // Fetch End
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
                <FormInputTitle>Nama Lengkap</FormInputTitle>
                <FormInputBox
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormInputs>
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
              <FormInputs>
                <FormInputTitle>Konfirmasi Password</FormInputTitle>
                <FormInputBox
                  type="password"
                  name="password2"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FormInputs>
              <FormInputButton onClick={(e) => onSubmit(e)}>
                Daftar
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

export default RegisterMentee;
