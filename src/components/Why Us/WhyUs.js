import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Text, Title, Subtitle, Desc, StyledImage } from "./WhyUsStyle";
import Image1 from "../../assets/Why Us/image-rounded1.png";
import Image2 from "../../assets/Why Us/image-rounded2.png";
import Image3 from "../../assets/Why Us/image-rounded3.png";
import Image4 from "../../assets/Why Us/image-rounded4.png";

const WhyUs = () => {
  return (
    <div style={{ background: "#ecf0f1" }}>
      <Container
        className="text-center"
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
        fluid
      >
        <Row>
          <Col>
            <Text>
              <Title>Mengapa harus memilih kami ?</Title>
            </Text>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col xs={12} md={4}>
            <StyledImage
              src={Image1}
              rounded
              style={{ marginBottom: "10px" }}
            />
            <Text>
              <Subtitle>Kemudahan Akses</Subtitle>
              <Desc>
                Tentukan subjek yang ingin dipelajari dan temukan mentor yang
                cocok untukmu
              </Desc>
            </Text>
          </Col>
          <Col xs={12} md={4}>
            <StyledImage
              src={Image4}
              rounded
              style={{ marginBottom: "10px" }}
            />
            <Text>
              <Subtitle>Mentor Berpengalaman</Subtitle>
              <Desc>
                Kamu tidak perlu ragu dengan mentor-mentor yang ada di website
                kami karena para mentor di sini merupakan mentor yang sudah ahli
                di bidangnya
              </Desc>
            </Text>
          </Col>
          <Col xs={12} md={4}>
            <StyledImage
              src={Image3}
              rounded
              style={{ marginBottom: "10px" }}
            />
            <Text>
              <Subtitle>Harga Terjangkau</Subtitle>
              <Desc>
                Tidak perlu khawatir soal harga karena di sini kamu dapat
                menemukan mentor terbaik dengan harga yang terjangkau
              </Desc>
            </Text>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyUs;
