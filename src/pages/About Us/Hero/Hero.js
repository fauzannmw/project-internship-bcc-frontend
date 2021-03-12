import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Title, Subtitle } from "./HeroStyle";

const Hero = () => {
  return (
    <div style={{ background: "#ecf0f1" }}>
      <Container fluid="md">
        <Row>
          <Col>
            <div className="text-center" style={{ marginTop: "20px" }}>
              <Title>About Us</Title>
              <Subtitle>
                Mentoree merupakan sebuah website yang bergerak pada bidang
                pendidikan dan persiapan karir. Website ini digunakan untuk
                menjembatani para mentee dan mentor yang memiliki kendalanya
                masing-masing. Kami memberikan layanan kepada para mentee yang
                membutuhkan mentor dan mentor yang ingin membagikan ilmu serta
                pengalamannya kepada mentee.
              </Subtitle>
              <br />
              <Subtitle>
                Ide kami tercetus karena masing-masing dari kami, juga
                kebanyakan orang di luar sana, memiliki kesulitan yang sama,
                yaitu sulitnya mencari mentor yang sesuai. Oleh karena itu, kami
                memiliki tujuan untuk membantu mereka dalam hal mencari mentor
                yang memiliki pengalaman di bidangnya masing-masing.
              </Subtitle>
              <br />
              <Subtitle>
                Mentoree didirikan pada tahun 2021 oleh empat orang mahasiswa
                Fakultas Ilmu Komputer Universitas Brawijaya dan merupakan
                sebuah projek internship di bawah naungan Basic Computing
                Community Fakultas Ilmu Komputer Universitas Brawijaya. Website
                ini dibuat tanpa adanya komunikasi tatap muka akibat dari
                pandemi COVID-19.
              </Subtitle>
              <br />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
