import React, { useState } from "react"
import TopHeader from "./TopHeader"
import Navbar from "./Navbar"
import Footer from "./Footer"
import style from "../css/Login.module.css"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        "https://e-commerce-backend-pg1o.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ emailOrPhone, password }),
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      navigate("/")
    } catch (error) {
      alert("Wrong pass")
    }
  }

  return (
    <>
      <TopHeader />
      <Navbar showbar="login" />
      <hr />
      <div className={style.login}>
        <div className={style.imageBox}>
          <img
            className={style.loginImage}
            src="https://as1.ftcdn.net/v2/jpg/04/92/58/98/1000_F_492589808_QQoUPIyKpdBi37HcRhvwSBnfKW4dPA7C.jpg"
            alt="shoppingImage"
          />
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
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
              <button type="submit" className={style.loginBtn}>
                Log In
              </button>
              <div className={style.forgotPass}>Forget Password?</div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Login
