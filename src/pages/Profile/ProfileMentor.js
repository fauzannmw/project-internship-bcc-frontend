import React from "react";
import NavbarAuthenticated from "../../components/Navbar/NavbarAuthenticated";
import Footer from "../../components/Footer/Footer";
import Card from "./Card/CardMentor";
import Content from "./Content/Content";

const Profile = () => {
  return (
    <>
      <NavbarAuthenticated />
      <Card />
      <Content />
      <Footer />
    </>
  );
};

export default Profile;
