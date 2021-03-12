import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import {
  StyledImage,
  Text,
  Title,
  Subtitle,
  MainTitle,
  StartButton,
} from "./StartNowStyle";
import Gambar from "../../assets/Hero Ilustration/illustration_landing_page_2.svg";

const StartNow = () => {
  return (
    <div style={{ background: "#ecf0f1" }}>
      <Container
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          margin: "0 auto",
          background: "#ecf0f1",
        }}
        fluid
      >
        <Row>
          <Col>
            <MainTitle>Siap membangun masa depan ?</MainTitle>
          </Col>
        </Row>
        <Row>
          <StyledImage src={Gambar} fluid />
          <Text>
            <Title>Mulai dari sekarang!</Title>
            <Subtitle>
              Tidak ada kata terlambat untuk belajar. Jika kamu ingin membangun
              masa depan lebih cerah, tunggu apa lagi? daftar sekarang dan cari
              mentor yang sesuai untukmu.
            </Subtitle>
            <StartButton variant="warning">
              <Link to="/explore" style={{ color: "#fff" }}>
                Kuy Mulai!
              </Link>
            </StartButton>
          </Text>
        </Row>
      </Container>
    </div>
  );
};

export default StartNow;
