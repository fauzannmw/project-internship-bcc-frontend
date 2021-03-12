import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  StyledImage,
  Title,
  Subtitle,
  Text,
  PriceTitle,
  Price,
  StyledButton,
  SaldoText,
} from "./ContentStyle";
import Gambar from "../../../assets/Payment/payment-image.svg";

const Payment = () => {
  return (
    <div>
      <Container
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          margin: "0 auto",
          background: "#ecf0f1",
        }}
        fluid
      >
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Text>
            <Title>Pembayaran</Title>
            <Subtitle>
              Klik tombol ‘bayar sekarang’ untuk melakukan pembayaran.
            </Subtitle>
            <PriceTitle>Mentor Anda menawarkan harga</PriceTitle>
            <Price>Rp1.000.000/bulan</Price>
            <StyledButton>Bayar Sekarang</StyledButton>
            <div style={{ marginTop: "50px", marginBottom: "50px" }}>
              <SaldoText
              >
                Saldo tidak cukup ?{" "}
                <Link
                  to="/top-up"
                  style={{
                    color: "#3498DB",
                  }}
                >
                  <span>Isi Sekarang</span>
                </Link>
              </SaldoText>
            </div>
          </Text>
          <StyledImage src={Gambar} fluid />
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
