import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavbarAuthenticated from "./../../components/Navbar/NavbarAuthenticated";
import Hero from "./Hero/Hero";
import Content from "./Content/Content";
import { useAuth } from "../../config/Auth";

const Explore = () => {
  const { authTokens } = useAuth();
  return (
    <div>
      {!authTokens ? <Navbar /> : <NavbarAuthenticated />}
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default Explore;
