import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import NavbarAuthenticated from "./../../components/Navbar/NavbarAuthenticated";
import Content from "./Content/Content";
import { useAuth } from "../../config/Auth";

const Payment = () => {
  const { authTokens } = useAuth();
  return (
    <>
      {!authTokens ? <Navbar /> : <NavbarAuthenticated />}
      <Content />
      <Footer />
    </>
  );
};

export default Payment;
