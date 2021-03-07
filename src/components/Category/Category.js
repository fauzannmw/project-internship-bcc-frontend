import React from "react";
import {
  Wrapper,
  Container,
  Body,
  Image,
  Title,
  Text,
  LandingContentTop,
  LandingContentTitle,
  CategorySubtitle,
  BtnKategori,
} from "./CategoryStyle";
import movies from "./data";

const Category = () => {
  return (
    
      <LandingContentTop>
        <LandingContentTitle>Kategori Terpopuler</LandingContentTitle>
        <Wrapper>
          {movies.map((movie) => (
            <Container key={`${movie.id}`}>
              <Image src={movie.image}></Image>
              <Body>
                <Title>{movie.title}</Title>
                <Text>{movie.desc}</Text>
              </Body>
            </Container>
          ))}
        </Wrapper>
        <CategorySubtitle>
          <BtnKategori>Explore Semua Kategori</BtnKategori>
        </CategorySubtitle>
      </LandingContentTop>
  );
};

export default Category;
