import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Desc, Name, Title } from "./OurTeamStyle";
import Image1 from "../../../assets/Image/avatar-image1.jpg";

const OurTeam = () => {
  return (
    <div style={{ background: "#ecf0f1" }}>
      <Container fluid="md">
        <Row>
          <Col>
            <div className="text-center">
              <Title>Our Team</Title>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <div className="text-center">
              <Image
                src={Image1}
                roundedCircle
                style={{
                  marginTop: "30px",
                  marginBottom: "20px",
                  width: "180px",
                  height: "200px",
                }}
              />
              <Name>Nama Anggota</Name>
              <Desc>Lorem ipsum dolor</Desc>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-center">
              <Image
                src={Image1}
                roundedCircle
                style={{
                  marginTop: "30px",
                  marginBottom: "20px",
                  width: "180px",
                  height: "200px",
                }}
              />
              <Name>Nama Anggota</Name>
              <Desc>Lorem ipsum dolor</Desc>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-center">
              <Image
                src={Image1}
                roundedCircle
                style={{
                  marginTop: "30px",
                  marginBottom: "20px",
                  width: "180px",
                  height: "200px",
                }}
              />
              <Name>Nama Anggota</Name>
              <Desc>Lorem ipsum dolor</Desc>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-center">
              <Image
                src={Image1}
                roundedCircle
                style={{
                  marginTop: "30px",
                  marginBottom: "20px",
                  width: "180px",
                  height: "200px",
                }}
              />
              <Name>Nama Anggota</Name>
              <Desc>Lorem ipsum dolor</Desc>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurTeam;
