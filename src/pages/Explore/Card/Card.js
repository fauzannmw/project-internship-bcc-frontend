import React from "react";
import { Card, Col, Button, Row, CardDeck } from "react-bootstrap";
import Image1 from "../../../assets/Image/avatar-image1.jpg";
import { Desc, StyledCard, Subtitle, Text } from "./CardStyle";

const MyCard = (props) => {
  return (
    <Col md={3}>
      <a href="/detail-mentor">
        <Card style={{ borderRadius: "16px", margin: "0 0 20px 0" }}>
          <Card.Img
            variant="top"
            src={Image1}
            style={{ borderRadius: "16px 16px 0px 0px" }}
          />
          <Card.Body>
            <Text>
              <Subtitle>
                Thomas Griffith
                {/* {props.name} */}
              </Subtitle>
              <Desc>
                Belajar pemrograman web dari awal sampai jadi
                {/* {props.desc} */}
              </Desc>
            </Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
};

export default MyCard;
