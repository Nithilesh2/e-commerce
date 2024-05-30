import React from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GoogleLogin } from "@react-oauth/google";
import style from "../css/SignUp.module.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.main}>
        <TopHeader />
        <Navbar showbar="signup" />
        <hr />
        <div className={style.signUp}>
          <div className={style.imageBox}>
            <img
              className={style.loginImage}
              src="https://as1.ftcdn.net/v2/jpg/04/92/58/98/1000_F_492589808_QQoUPIyKpdBi37HcRhvwSBnfKW4dPA7C.jpg"
              alt="shoppingImage"
            />
          </div>
          <form className={style.form}>
            <div className={style.signUpBox}>
              <div className={style.top}>
                <h2>Create an account</h2>
                <h4>Enter your details below</h4>
              </div>
              <div className={style.center}>
                <input
                  type="text"
                  className={style.nameInput}
                  placeholder="Name"
                />
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
                <button type="button" className={style.createAccBtn}>
                  Create Account
                </button>
                <div className={style.googleSignIn}>
                  <GoogleLogin
                    className={style.googleLoginBtn}
                    onSuccess={() => {
                      navigate("/");
                    }}
                    onError={() => {
                      navigate("/login");
                    }}
                  />
                </div>
                <div className={style.login}>
                  <h4>Already have account?</h4>
                  <div
                    className={style.loginRedirect}
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Log in
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
