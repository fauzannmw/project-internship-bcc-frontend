import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/NavbarAuth";
import { Card, Col, Container, Row } from "react-bootstrap";
import Mentee from "../../assets/Image/Mentee.svg";
import Mentor from "../../assets/Image/Mentor.svg";
import { BtnContent, Content } from "./LoginStyle";

const LoginGateaway = () => {
  return (
    <>
      <Navbar />
      <Content>
        <Container style={{ marginTop: "100px", background: "#ecf0f1" }}>
          <Row>
            <Col className="d-flex justify-content-center">
              <Card
                className="text-center"
                style={{
                  borderRadius: "10px",
                  width: "420px",
                  height: "500px",
                  marginRight: "-100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card.Body>
                  <Card.Img
                    src={Mentor}
                    style={{ height: "350px", marginBottom: "40px" }}
                  ></Card.Img>
                  <BtnContent to="/login-mentor">
                    Masuk Sebagai Mentor
                  </BtnContent>
                </Card.Body>
              </Card>
            </Col>
            <Col className="d-flex justify-content-center">
              <Card
                className="text-center"
                style={{
                  borderRadius: "10px",
                  width: "420px",
                  height: "500px",
                  marginRight: "-100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Card.Body>
                  <Card.Img
                    src={Mentee}
                    style={{ height: "350px", marginBottom: "40px" }}
                  ></Card.Img>
                  <BtnContent to="/login-mentee">
                    Masuk Sebagai Mentee
                  </BtnContent>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
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
      </Content>
    </>
  );
};

export default LoginGateaway;
