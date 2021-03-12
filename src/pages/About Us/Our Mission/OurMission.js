import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StyledImage, Text, Title, Subtitle } from "./OurMissionStyle";
import Gambar from "../../../assets/Hero Ilustration/illustration_about_us_1.svg";

const OurMission = () => {
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
          <StyledImage src={Gambar} fluid />

          <Text>
            <Title>Our Mission</Title>
            <Subtitle>
              Mentoree memiliki misi untuk memfasilitasi akses pembelajaran
              kepada para mentee dalam hal pendidikan dan persiapan karir,
              meningkatkan partisipasi aktif para mentor dalam perkembangan
              pendidikan Indonesia, dan memotivasi mentee di Indonesia dengan
              adanya interaksi oleh mentor berpengalaman. Kami percaya bahwa
              pendidikan dan pengajaran merupakan hak setiap individu demi
              mendapatkan masa depan yang lebih baik. Maka dari itu, Mentoree
              hadir sebagai sarana untuk mempertemukan mentee dengan mentor yang
              berkualitas dengan biaya yang terjangkau.
            </Subtitle>
          </Text>
        </Row>
      </Container>
    </div>
  );
};

export default OurMission;
