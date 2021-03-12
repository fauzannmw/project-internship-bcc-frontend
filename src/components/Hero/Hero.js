import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StyledImage, Title, Subtitle, Text } from "./HeroStyle";
import Gambar from "../../assets/Hero Ilustration/illustration_1.svg";

const Reason = () => {
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
            <Title>Temukan mentor yang berpengalaman</Title>
            <Subtitle>
              Mentor adalah orang yang memiliki kebijaksanaan dan ini merupakan
              kombinasi dari pengetahuan dan pengalaman yang dimiliki. Mereka
              adalah seseorang yang berada di suatu bidang dan berhasil pada apa
              yang telah mereka lakukan.
            </Subtitle>
          </Text>

          <StyledImage src={Gambar} fluid />
        </Row>
      </Container>
    </div>
  );
};

export default Reason;
