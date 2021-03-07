import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Title } from "./ContentStyle";
import Image1 from "../../../assets/Image/avatar-image1.jpg";

const Content = () => {
  return (
    <div style={{ background: "#ecf0f1" }}>
      <Container fluid="md">
        <Row>
          <Col>
            <div className="text-center" style={{ marginTop: "20px" }}>
              <Title>Eplore by Category</Title>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <div className="text-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  <Card.Title>Nama Mentor</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Card.Text>
                  <Button>Lihat Detail</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  <Card.Title>Nama Mentor</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Card.Text>
                  <Button>Lihat Detail</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  <Card.Title>Nama Mentor</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Card.Text>
                  <Button>Lihat Detail</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={3}>
            <div className="text-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={Image1} />
                <Card.Body>
                  <Card.Title>Nama Mentor</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Card.Text>
                  <Button>Lihat Detail</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
