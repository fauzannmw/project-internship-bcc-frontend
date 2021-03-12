import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 60px;
  background: #34495e;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  justify-content: center;
  margin: 0 auto;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: #ffba15;
    transition: 20ms ease-in;
  }
`;
export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;
