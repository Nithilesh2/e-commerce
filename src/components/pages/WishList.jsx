import React from "react";
import { useContext } from "react";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";
import AppContext from "../context/AppContext";

const WishList = () => {
  const { likedItemsSent, addtoCartSent } = useContext(AppContext);
  return (
    <>
      <TopHeader />
      <Navbar />
      <div>{likedItemsSent}</div>
      <div>{addtoCartSent}</div>
    </>
  );
};

export default WishList;
