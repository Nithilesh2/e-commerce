import React from "react";
import style from "../css/ManageMyAccount.module.css";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const ManageMyAccount = () => {
  const navigate = useNavigate();
  return (
    <>
      <TopHeader />
      <Navbar />
      <div className={style.top}>
        <span className={style.home} onClick={() =>{navigate("/")}}>Home</span>
        <span className={style.slash}>/</span>
        <span className={style.myAccount}>My Account</span>
      </div>
      <Footer />
    </>
  );
};

export default ManageMyAccount;
