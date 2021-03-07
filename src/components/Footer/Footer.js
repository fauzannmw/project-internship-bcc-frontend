import React from "react";
import { Container, Wrapper, Row, Column, Link, Title } from "./FooterStyle";
import { Icon } from "../../assets/Icons/IconStyle";
import Logo from "../../assets/Logo/Logo.png";
// import { ReactComponent as Logo } from "../../assets/Logo/Logo.svg";

const Footer = () => {
  const logoStyle = {
    marginTop: "-10px",
  };
  return (
    <Container>
      <Wrapper>
        <Row>
          <Column>
            <Title>
              {/* <Logo style={{ marginTop: 0 }} /> */}
              <img src={Logo} alt="Logo" style={logoStyle} />
            </Title>
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
