import React from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import style from "../css/Login.module.css";

const Login = () => {
  return (
    <>
      <TopHeader />
      <Navbar showbar="login" />
      <div className={style.login}>
        <div className={style.imageBox}>
          <img
            className={style.loginImage}
            src="https://as1.ftcdn.net/v2/jpg/04/92/58/98/1000_F_492589808_QQoUPIyKpdBi37HcRhvwSBnfKW4dPA7C.jpg"
            alt="shoppingImage"
          />
        </div>
        <form className={style.form}>
          <div className={style.loginBox}>
            <div className={style.top}>
              <h2>Log into Exclusive </h2>
              <h4>Enter your details below</h4>
            </div>
            <div className={style.center}>
              <input
                type="text"
                className={style.emailOrPhoneInput}
                placeholder="Email or Phone Number"
              />
              <input
                type="password"
                className={style.passwordInput}
                placeholder="Password"
              />
            </div>
            <div className={style.bottom}>
              <button type="button" className={style.loginBtn}>
                Log In
              </button>
              <div className={style.forgotPass}>Forget Password?</div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
