import React from "react";
import { Container, Wrapper, Row, Column, Link, Title } from "./FooterStyle";
import { Icon } from "../../assets/Icons/IconStyle";
import Logo from "../../assets/Logo/mentoree.png";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column>
            <img src={Logo} alt="Logo" style={{ marginTop: "-10px" }} />
          </Column>
          <Column>
            <Title>Tentang Kami</Title>
            <Link href="#">About Us</Link>
            <Link href="#">Testimonial</Link>
          </Column>
          <Column>
            <Title>Hubungi Kami</Title>
            <Link href="#">Kontak</Link>
          </Column>
          <Column>
            <Title>Media Sosial</Title>
            <Link href="#">
              <Icon className="fab fa-instagram" />
              Instagram
            </Link>
            <Link href="#">
              <Icon className="fab fa-twitter" />
              Twitter
            </Link>
            <Link href="#">
              <Icon className="fab fa-linkedin-in" />
              LinkedIn
            </Link>
          </Column>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Footer;
