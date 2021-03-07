import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Title, Subtitle } from "./HeroStyle";

const Hero = () => {
  return (
    <div style={{ background: "#ecf0f1" }}>
      <Container fluid="md">
        <Row>
          <Col>
            <div className="text-center" style={{ marginTop: "20px" }} >
              <Title>About Us</Title>
              <Subtitle>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur fugiat in hic similique facilis nam officia suscipit
                deleniti velit obcaecati, quo minus! Alias autem corporis
                adipisci ipsa, corrupti neque modi?
              </Subtitle>
              <br />
              <Subtitle>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur fugiat in hic similique facilis nam officia suscipit
                deleniti velit obcaecati, quo minus! Alias autem corporis
                adipisci ipsa, corrupti neque modi?
              </Subtitle>
              <br />
              <Subtitle>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur fugiat in hic similique facilis nam officia suscipit
                deleniti velit obcaecati, quo minus! Alias autem corporis
                adipisci ipsa, corrupti neque modi?
              </Subtitle>
              <br/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
