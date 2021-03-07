import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Category from "./../../components/Category/Category";
import Review from "./../../components/Review/Review";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
