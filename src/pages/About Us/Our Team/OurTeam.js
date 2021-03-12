import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Text, Title, Subtitle, Desc, StyledImage } from "./OurTeamStyle";
import Image1 from "../../../assets/Our Team/our-team-1.png";
import Image2 from "../../../assets/Our Team/our-team-2.png";
import Image3 from "../../../assets/Our Team/our-team-3.png";
import Image4 from "../../../assets/Our Team/our-team-4.png";

const OurTeam = () => {
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
              <Title>Meet Our Team</Title>
            </Text>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Col xs={6} md={3}>
            <StyledImage
              src={Image1}
              rounded
              style={{ marginBottom: "10px" }}
            />
            <Text>
              <Subtitle>Afifah</Subtitle>
              <Desc>Product Manager</Desc>
            </Text>
          </Col>
          <Col xs={6} md={3}>
            <StyledImage
              src={Image2}
              rounded
              style={{ marginBottom: "10px" }}
            />
            <Text>
              <Subtitle>Tebe</Subtitle>
              <Desc>Product Designer</Desc>
            </Text>
          </Col>
          <Col xs={6} md={3}>
            <StyledImage
              src={Image3}
              rounded
              style={{ marginBottom: "10px" }}
            />
            <Text>
              <Subtitle>Fauzan</Subtitle>
              <Desc>Front End</Desc>
            </Text>
          </Col>
          <Col xs={6} md={3}>
            <StyledImage
              src={Image4}
              rounded
              style={{ marginBottom: "10px" }}
            />
            <Text>
              <Subtitle>Nathan</Subtitle>
              <Desc>Back End</Desc>
            </Text>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurTeam;
