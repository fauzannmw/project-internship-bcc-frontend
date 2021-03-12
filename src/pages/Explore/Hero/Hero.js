import React from "react";
import { Container, Row } from "react-bootstrap";
import { StyledImage, Title, Subtitle, Text } from "./HeroStyle";
import Gambar from "../../../assets/Explore/illustration_explore_1.svg";

const Hero = () => {
  return (
    <div>
      <Container
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          margin: "0 auto",
          background: "#ecf0f1",
        }}
        fluid
      >
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Text>
            <Title>Cari Mentor</Title>
            <Subtitle>
              Pilih kategori subjek, lalu pilih mentor yang sudah tersedia di
              bawah ini. Pastikan pilih mentor yang sesuai dengan kriteria kamu.
            </Subtitle>
          </Text>

          <StyledImage src={Gambar} fluid />
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
