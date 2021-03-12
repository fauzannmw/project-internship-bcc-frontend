import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import {
  StyledImage,
  Title,
  Subtitle,
  Text,
  FormLabel,
  StyledForm,
  StyledButton,
  StyledFormControl,
} from "./ContentStyle";

const Content = () => {
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
        <Row
          className="text-center"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Text>
            <Title>Tarik Saldo</Title>
            <Subtitle>
              Saldo yang akan ditarik otomatis langsung masuk ke rekening bank
              Anda.
            </Subtitle>
          </Text>
        </Row>
        <Row
          className="justify-content-center"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Col md={3}>
            <StyledForm>
              <Form.Group controlId="formGroupRek">
                <FormLabel>Nomor Rekening</FormLabel>
                <StyledFormControl
                  type="number"
                  placeholder="Masukkan nomor rekening Anda"
                />
              </Form.Group>
              <Form.Group controlId="formGroupNom">
                <FormLabel>Nominal</FormLabel>
                <StyledFormControl
                  type="number"
                  placeholder="Masukkan nominal yang ingin Anda tarik"
                />
              </Form.Group>
            </StyledForm>
          </Col>
        </Row>
        <Row
          className="justify-content-center"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <StyledButton className="text-center">Tarik saldo</StyledButton>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
