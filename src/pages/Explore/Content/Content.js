import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row, CardDeck } from "react-bootstrap";
import { StyledDropDown, Title, StyledDropDownItem } from "./ContentStyle";
import Mentoree from "../../../api/Mentoree";
import Card from "../Card/Card";
import _ from "lodash";

const Content = () => {
  const [categories, setCategories] = useState([]);
  const [mentor, setMentor] = useState([]);
  const [dropDown, setDropdown] = useState("");
  const [dropDownName, setDropdownName] = useState("");
  useEffect(() => {
    const explore = async () => {
      const res = await Mentoree.get("/category/categories");
      console.log(res.data);
      setCategories(res.data.data);
      console.log(categories);
    };
    explore();
  }, []);
  useEffect(() => {
    const explore = async () => {
      const res = await Mentoree.get("/category/categories");
      
    };
    explore();
  }, [dropDown]);
  return (
    <div style={{ background: "#ecf0f1" }}>
      <Container fluid="md">
        <Row>
          <Col>
            <div className="text-center" style={{ marginTop: "20px" }}>
              <Title>Eplore by Category</Title>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              className="text-center"
              style={{ marginTop: "20px", marginBottom: "30px" }}
            >
              <StyledDropDown
                id="dropdown-item-button"
                title={dropDownName ? dropDownName : "Pilih kategori"}
                variant="light"
                onSelect={(e) => console.log(e)}
              >
                {categories.map((e) => {
                  return (
                    <StyledDropDownItem onClick= {() => {setDropdown(e.id);setDropdownName(e.name)} } key={e.id}>{e.name}</StyledDropDownItem>
                  );
                })}
              </StyledDropDown>
            </div>
          </Col>
        </Row>
        <Row style={{ display: "flex" }}>
          {mentor.map((a) => {
            <Card name={a.name} desc={a.occupation} />;
          })}
          <CardDeck style={{ marginTop: "50px" }}>
            <Card />
            <Card />
            <Card />
            <Card />
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
