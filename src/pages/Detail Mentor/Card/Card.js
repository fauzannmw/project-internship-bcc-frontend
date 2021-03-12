import React from "react";
import { Col, Row, Container, Card, Image } from "react-bootstrap";
import {
  Atribute,
  StyledCard,
  Text,
  Title,
  Data,
  Icon,
  StyledImage,
  Price,
  StyledButton,
} from "./CardStyle";
import StarIcon from "../../../assets/Profile/star-icon.svg";
// import Image1 from "../../../assets/Profile/profile-image-1.png";
import Image1 from "../../../assets/Image/avatar-image1.jpg";
import { useAuth } from "../../../config/Auth";

const TopCard = () => {
  // useEffect(() => {
  //   const explore = async () => {
  //     const res = await Mentoree.get("/user/" + useAuth().authTokens.id, {});

  //     console.log(res);
  //   };
  //   explore();
  // }, []);
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
          <Col>
            <StyledCard style={{ background: "#fff" }}>
              <Row style={{ padding: "32px 48px" }}>
                <Col md={4} lg={2}>
                  <StyledImage src={Image1} roundedCircle />
                </Col>
                <Col md={6} lg={8}>
                  <div className="d-inline-block">
                    <Text>
                      <Title>Thomas Griffith</Title>
                      <Atribute>Lokasi</Atribute>
                      <Atribute>Pekerjaan</Atribute>
                      <Atribute>Pendidikan</Atribute>
                      {/* <Atribute>Linkedln</Atribute> */}
                    </Text>
                  </div>
                  <div className="d-inline-block">
                    <Text>
                      <Data>Malang</Data>
                      <Data>Web Programmer</Data>
                      <Data>Universitas Brawijaya</Data>
                      {/* <Data>https://www.linkedin.com/in/dadangkobra</Data> */}
                    </Text>
                  </div>
                </Col>
                <Col md={2} lg={2}>
                  <Icon className="text-center">
                    <img
                      src={StarIcon}
                      alt="Icon"
                      style={{ marginTop: "-5px", marginRight: "10px" }}
                    />
                    <p className="d-inline-block">5.0</p>
                  </Icon>
                  <Text>
                    <Price>Rp 1.000.000/bulan</Price>
                    <StyledButton>Pesan Sekarang</StyledButton>
                  </Text>
                </Col>
              </Row>
            </StyledCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopCard;
