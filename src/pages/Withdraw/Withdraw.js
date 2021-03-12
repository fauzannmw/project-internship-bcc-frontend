import React from 'react';
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavbarAuthenticated from "./../../components/Navbar/NavbarAuthenticated";
import { useAuth } from "../../config/Auth";
import Content from "./Content/Content";


const Withdraw = () => {
    const { authTokens } = useAuth();
    return (
      <>
        {!authTokens ? <Navbar /> : <NavbarAuthenticated />}
        <Content />
        <Footer />
      </>
    );
}

export default Withdraw
