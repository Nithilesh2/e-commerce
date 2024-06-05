import React from "react";
import { useContext } from "react";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";
import AppContext from "../context/AppContext";

const WishList = () => {
  const { likeItemsIdArray, arr } = useContext(AppContext);

  return (
    <>
      <TopHeader />
      <Navbar />
      <div>{likeItemsIdArray}</div>
      <div>{arr}</div>
    </>
  );
};

export default WishList;
