import React from "react";
import {
  Container,
  ImageContainer,
  Images,
  Title,
  Subtitle,
  Text,
} from "./HeroStyle";
import { ReactComponent as Gambar } from "../../assets/Logo/illustration.svg";

const Hero = () => {
  return (
    <>
      <Container>
        <Text>
          <Title>Find the skillful mentor in your area!</Title>
          <Subtitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Subtitle>
        </Text>
        <ImageContainer>
          <Images>
            <Gambar />
          </Images>
        </ImageContainer>
      </Container>
    </>
  );
};

export default Hero;
