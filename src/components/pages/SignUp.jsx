import React, { useState, useEffect, useRef } from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { GoogleLogin } from "@react-oauth/google";
import style from "../css/SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import LoadingBar from "react-top-loading-bar";

const SignUp = () => {
  const navigate = useNavigate();
  const [decoded, setDecoded] = useState("");
  const [decodedName, setDecodedName] = useState("");

  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const [skeletonLoading, setSkeletonLoading] = useState(true);

  function loginClicked(credentialResponse) {
    let decode = jwtDecode(credentialResponse.credential);
    var userName = decode.name;
    setDecoded(userName);
  }

  useEffect(() => {
    setDecodedName(decoded);
    if (decodedName) {
      setDecoded((decodedName) => decodedName);
      navigate("/");
    }
  }, [decoded, navigate, decodedName]);

  useEffect(() => {
    const randomTimeValue = Math.floor(Math.random() * 4) + 2;
    const randomTime = randomTimeValue + "000";
    const timer = setTimeout(() => {
      setSkeletonLoading(false);
    }, randomTime);
    return () => clearTimeout(timer);
  }, []);

  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.continuousStart();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://e-commerce-backend-pg1o.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailOrPhone, password, name }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      navigate("/login");
    } catch (err) {
      console.log("Error signing up:", err.message);
    }
  };

  return (
    <>
      <div className={style.main}>
        <TopHeader />
        <Navbar showbar="signup" />
        <hr />
        {skeletonLoading ? (
          <div className={style.skele}>
            <div>
              <LoadingBar color="#00BFFF" ref={ref} shadow={true} />
            </div>
          </div>
        ) : (
          <div className={style.signUp}>
            <div className={style.imageBox}>
              <img
                className={style.loginImage}
                src="https://as1.ftcdn.net/v2/jpg/04/92/58/98/1000_F_492589808_QQoUPIyKpdBi37HcRhvwSBnfKW4dPA7C.jpg"
                alt="shoppingImage"
              />
            </div>
            <form className={style.form} onSubmit={handleSubmit}>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    className={style.emailOrPhoneInput}
                    placeholder="Email or Phone Number"
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                  />
                  <input
                    type="password"
                    className={style.passwordInput}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={style.bottom}>
                  <button type="submit" className={style.createAccBtn}>
                    Create Account
                  </button>
                  <div className={style.googleSignIn}>
                    <GoogleLogin
                      className={style.googleLoginBtn}
                      onSuccess={loginClicked}
                      onError={() => {
                        navigate("/login");
                      }}
                    />
                  </div>
                  <div className={style.login}>
                    <h4>Already have an account?</h4>
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
        )}
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
