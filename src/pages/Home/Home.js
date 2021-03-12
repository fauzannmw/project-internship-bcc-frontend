import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import NavbarAuthenticated from "../../components/Navbar/NavbarAuthenticated";
import Hero from "../../components/Hero/Hero";
import WhyUs from "./../../components/Why Us/WhyUs";
// import Category from "./../../components/Category/Category";
import Category from "./../../components/Category New/Category";
import Review from "./../../components/Review/Review";
import StartNow from "./../../components/Start Now/StartNow";
import { useAuth } from "../../config/Auth";

const Home = () => {
  const { authTokens } = useAuth();
  return (
    <div>
      {!authTokens ? <Navbar /> : <NavbarAuthenticated />}
      <Hero />
      <WhyUs />
      <Category />
      <Review />
      <StartNow />
      <Footer />
    </div>
  );
};

export default Home;
