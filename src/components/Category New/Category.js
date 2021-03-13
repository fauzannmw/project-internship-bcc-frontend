import React from "react";
import { Card, CardDeck, Col, Container, Row } from "react-bootstrap";
import { Text, Subtitle, Desc, Title, EmptyCard } from "./CategoryStyle";
import Image1 from "../../assets/Category/category-image-1.png";
import Image2 from "../../assets/Category/category-image-2.png";
import Image3 from "../../assets/Category/category-image-3.png";
import Image4 from "../../assets/Category/plus-icon.svg";

const Category = () => {
  return (
    <div style={{ background: "#ecf0f1" }}>
      <Row
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <Col>
          <Text>
            <Title>Kategori Terpopuler</Title>
          </Text>
        </Col>
      </Row>
      <Container fluid="md" style={{ background: "#ecf0f1" }}>
        <CardDeck>
          <Col md={3}>
            <Card style={{ borderRadius: "16px", margin: "0 0 20px 0" }}>
              <Card.Img
                variant="top"
                src={Image1}
                style={{ borderRadius: "16px 16px 0px 0px" }}
              />
              <Card.Body>
                <Text>
                  <Subtitle>Persiapan Karir</Subtitle>
                  <Desc>Persiapkan karir Anda mulai dari sekarang</Desc>
                </Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ borderRadius: "16px", margin: "0 0 20px 0" }}>
              <Card.Img
                variant="top"
                src={Image2}
                style={{ borderRadius: "16px 16px 0px 0px" }}
              />
              <Card.Body>
                <Text>
                  <Subtitle>Pemrograman</Subtitle>
                  <Desc>
                    Belajar pemrograman dengan metode yang menyenangkan.
                  </Desc>
                </Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ borderRadius: "16px", margin: "0 0 20px 0" }}>
              <Card.Img
                variant="top"
                src={Image3}
                style={{ borderRadius: "16px 16px 0px 0px" }}
              />
              <Card.Body>
                <Text>
                  <Subtitle>Musik</Subtitle>
                  <Desc>
                    Bermain dan belajar bermusik dengan mentor yang asik
                  </Desc>
                </Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <a href="/explore">
              <EmptyCard style={{ borderRadius: "16px", margin: "0 0 20px 0" }}>
                <Card.Img
                  variant="top"
                  src={Image4}
                  style={{
                    borderRadius: "16px 16px 0px 0px",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                  }}
                />
                <Card.Body></Card.Body>
              </EmptyCard>
            </a>
          </Col>
        </CardDeck>
      </Container>
    </div>
  );
};

export default Category;
