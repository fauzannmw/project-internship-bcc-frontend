import React from "react";
import { useAuth } from "../../../config/Auth";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  StyledCard,
  Title,
  Text,
  Subtitle,
  Atribute,
  StyledButton,
  StyledImage,
  Desc,
} from "./ContentStyle";
import Review1 from "../../../assets/Profile/review-1.png";
import Review2 from "../../../assets/Profile/review-2.png";
import Review3 from "../../../assets/Profile/review-3.png";

const Content = () => {
  const { setAuthTokens } = useAuth();
  const Logout = () => {
    setAuthTokens();
    localStorage.clear();
  };
  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        margin: "0 auto",
        background: "#ecf0f1",
      }}
    >
      <Container>
        <Row>
          <Col xs={12} sm={3}>
            <StyledCard style={{ width: "263px", height: "344px" }}>
              <Card.Body>
                <Text className="text-center">
                  <Title>Subjek</Title>
                  <Atribute>Subjek yang diajarkan</Atribute>
                  <Subtitle>- Pemrograman C++</Subtitle>
                  <Subtitle>- Pemrograman Java</Subtitle>
                  <Subtitle>- Pemrograman Web</Subtitle>
                  <Subtitle>- Algoritma Struktur Data</Subtitle>
                </Text>
              </Card.Body>
            </StyledCard>
            <StyledButton>
              <Title
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#3498DB",
                }}
              >
                Edit Profile
              </Title>
            </StyledButton>
            <StyledButton>
              <a href="/withdraw">
                <Title
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#3498DB",
                  }}
                >
                  Tarik Saldo
                </Title>
              </a>
            </StyledButton>
            <StyledButton style={{ background: "#3498DB" }}>
              <Link onClick={Logout} to="/">
                <Title
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "#FFFFFF",
                  }}
                >
                  Keluar dari akun
                </Title>
              </Link>
            </StyledButton>
          </Col>
          <Col xs={12} sm={9}>
            <Text>
              <Title>Bio</Title>
              <Subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque volutpat elementum nullam eros. Donec purus,
                pharetra, condimentum mi enim suspendisse viverra vel. Arcu dui
                cursus pellentesque ornare volutpat consectetur leo, ornare.
                Platea dolor neque netus vel posuere. Amet mi praesent neque
                dolor eget vel proin nunc eu. Ipsum lacus amet bibendum eu
                sagittis dui nullam proin. Tellus sem.
              </Subtitle>
            </Text>
            <Text>
              <Title>Metode Pengajaran</Title>
              <Subtitle>- Tatap Muka</Subtitle>
              <Subtitle>- Online</Subtitle>
            </Text>
            <Text>
              <Title>Pengalaman</Title>
              <Subtitle>- Juara 1 BRI x Google Hackathon 2020</Subtitle>
              <Subtitle>
                - Asisten laboratorium Teknik Informatika 2017-2019
              </Subtitle>
            </Text>
            <Text>
              <Title>Ulasan</Title>
              <Row style={{ paddingTop: "30px" }}>
                <Col xs={12} md={2}>
                  <StyledImage src={Review1} rounded />
                </Col>
                <Col xs={12} md={10}>
                  <Text style={{ paddingTop: "10px" }}>
                    <Subtitle>Jeremy</Subtitle>
                    <Desc>
                      “Penjelasan dari Pak Dadang mudah dimengerti sama pemula
                      seperti saya yang baru mulai belajar pemrograman”
                    </Desc>
                  </Text>
                </Col>
              </Row>
              <Row style={{ paddingTop: "30px" }}>
                <Col xs={12} md={2}>
                  <StyledImage src={Review2} rounded />
                </Col>
                <Col xs={12} md={10}>
                  <Text style={{ paddingTop: "10px" }}>
                    <Subtitle>Martin</Subtitle>
                    <Desc>
                      “Penjelasan dari Pak Dadang mudah dimengerti sama pemula
                      seperti saya yang baru mulai belajar pemrograman”
                    </Desc>
                  </Text>
                </Col>
              </Row>
              <Row style={{ paddingTop: "30px" }}>
                <Col xs={12} md={2}>
                  <StyledImage src={Review3} rounded />
                </Col>
                <Col xs={12} md={10}>
                  <Text style={{ paddingTop: "10px" }}>
                    <Subtitle>Mario</Subtitle>
                    <Desc>
                      “Penjelasan dari Pak Dadang mudah dimengerti sama pemula
                      seperti saya yang baru mulai belajar pemrograman”
                    </Desc>
                  </Text>
                </Col>
              </Row>
            </Text>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
