import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Text, Title, Subtitle, Desc, StyledImage } from "./ReviewStyle";
import Image1 from "../../assets/Review/review-image-1.png";
import Image2 from "../../assets/Review/review-image-2.png";
import Image3 from "../../assets/Review/review-image-3.png";

const Review = () => {
  return (
    <div style={{ background: "#ecf0f1" }}>
      <Container
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <Row>
          <Col>
            <Text>
              <Title>Apa kata mereka ?</Title>
            </Text>
          </Col>
        </Row>
        <Row style={{ paddingTop: "30px" }}>
          <Col xs={12} md={3} className="text-center">
            <StyledImage src={Image1} rounded />
          </Col>
          <Col xs={12} md={9} style={{ paddingTop: "30px" }}>
            <Text>
              <Subtitle>Jeremy</Subtitle>
              <Desc>
                “Sebelum aku kenal dengan mentoree, aku sering diremehkan oleh
                teman-temanku karena tidak bisa bermain gitar, tapi setelah
                kenal dengan mentoree dan melakukan program mentoringnya,
                sekarang aku bisa menunjukkan skillku ke teman-teman dan
                keluarga.”
              </Desc>
            </Text>
          </Col>
        </Row>
        <Row style={{ paddingTop: "30px" }}>
          <Col xs={12} md={3} className="text-center">
            <StyledImage src={Image2} rounded />
          </Col>
          <Col xs={12} md={9} style={{ paddingTop: "30px" }}>
            <Text>
              <Subtitle>Mario</Subtitle>
              <Desc>
                “Asli! belajar pemrograman sama mentor di Mentoree bikin cepet
                paham sama konsepnya. Gak ada lagi yang namanya bingung waktu
                ngesolve problem di ujian praktikum.”
              </Desc>
            </Text>
          </Col>
        </Row>
        <Row style={{ paddingTop: "30px" }}>
          <Col xs={12} md={3} className="text-center">
            <StyledImage src={Image3} rounded />
          </Col>
          <Col xs={12} md={9} style={{ paddingTop: "30px" }}>
            <Text>
              <Subtitle>Lina</Subtitle>
              <Desc>
                “Mentoree membantu saya untuk mencari mentor dengan kapasitas
                yang mumpuni. Sampai di titik karier saya sekarang, ilmu yang
                diajarkan oleh mentor dalam hal apapun saya terapkan di
                pekerjaan saya. Contohnya berfikir dari banyak sudut pandang dan
                bagaimana kita harus bisa mengatur work life balance kita.”
              </Desc>
            </Text>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Review;
