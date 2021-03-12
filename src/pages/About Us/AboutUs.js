import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import NavbarAuthenticated from "./../../components/Navbar/NavbarAuthenticated";
import Hero from "./Hero/Hero";
import OurMission from "./Our Mission/OurMission";
import OurTeam from "./Our Team/OurTeam";
import { useAuth } from "../../config/Auth";

const AboutUs = () => {
  const { authTokens } = useAuth();
  return (
    <>
      {!authTokens ? <Navbar /> : <NavbarAuthenticated />}
      <Hero />
      <OurTeam />
      <OurMission />
      <Footer />
    </>
  );
};

export default AboutUs;
