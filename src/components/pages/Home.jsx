import React from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <TopHeader />
      <Navbar showbar="home" />
      <Footer />
    </>
  );
};

export default Home;
