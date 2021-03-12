import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import NavbarAuthenticated from "./../../components/Navbar/NavbarAuthenticated";
import Card from "./Card/Card";
import Content from "./Content/Content";
import { useAuth } from "../../config/Auth";

const DetailMentor = () => {
  const { authTokens } = useAuth();
  return (
    <>
      {!authTokens ? <Navbar /> : <NavbarAuthenticated />}
      <Card />
      <Content />
      <Footer />
    </>
  );
};

export default DetailMentor;
