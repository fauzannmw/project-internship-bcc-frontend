import styled from "styled-components";
import { Image } from "react-bootstrap";

export const Text = styled.div`
  color: #34495e;
  margin-left: 10px;

  @media screen and (max-width: 2000px) {
    width: 60%;
  }
  @media screen and (min-width: 1366px) {
    margin-top: 100px;
    width: 45%;
  }
  @media screen and (max-width: 1366px) {
    width: 45%;
  }
  @media screen and (max-width: 768px) {
    width: 45%;
    margin-top: 0;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-right: 10px;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 36px;
  font-weight: bold;
  font-family: Montserrat;

  @media screen and (max-width: 576px) {
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    font-family: Montserrat;
  }
  @media screen and (min-width: 1400px) {
    /* width: 60%;
    margin-top: 100px; */
  }
`;
export const StyledImage = styled(Image)`
  @media screen and (max-width: 1400px) {
    width: 45%;
  }
  @media screen and (max-width: 768px) {
    width: 45%;
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const Subtitle = styled.div`
  width: 100%;
  font-size: 16px;

  @media screen and (max-width: 576px) {
    width: 100%;
    margin-top: 0;
    font-size: 14px;
    text-align: center;
  }
  @media screen and (min-width: 1400px) {
    /* width: 70%; */
  }
`;

// Styling Sebelum Mentoring

// export const StyledImage = styled(Image)`
//   @media screen and (min-width: 1400px) {
//     margin-left: -120px;
//   }
//   @media screen and (min-width: 1200px) {
//     margin-left: -120px;
//   }
//   @media screen and (max-width: 576px) {
//     display: none;
//   }
// `;

// export const Text = styled.div`
//   color: #34495e;

//   /* width: 60%; */
//   /* @media screen and (min-width: 1400px) {
//     width: 100%;
//     margin-top: 100px;
//   } */
//   /* @media screen and (min-width: 1200px) {
//     width: 45%;
//     margin-top: 100px;
//   } */
//   @media screen and (min-width: 768px) {
//     width: 100%;
//     margin-top: 50px;
//   }
//   @media screen and (max-width: 576px) {
//     width: 100%;
//     margin-right: 10px;
//   }
// `;
