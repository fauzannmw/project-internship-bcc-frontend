import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/NavbarAuth";
import { ReactComponent as Image } from "../../assets/Image/Mentor.svg";
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
import Mentoree from "../../api/Mentoree";
import { useAuth } from "../../config/Auth";
import { Redirect } from "react-router-dom";
import jwt from "jsonwebtoken";

const RegisterMentee = () => {
  const { setAuthTokens } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(email);
    console.log(password);
    console.log("====================================");

    await Mentoree.post("/mentor/login", {
      email: email,
      password: password,
    }).then(async (res) => {
      console.log(res);
      res.status === 200 && setAuthTokens(await jwt.decode(res.data.token));
      if (res.status == 200) {
        console.log("Login Berhasil");
        // return <Redirect to="/" />;
        window.location.href = "/";
      }
    });

    // Fetch Start
    // const token = await fetch("", {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
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
                Masuk sebagai Mentor
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

export default RegisterMentee;
