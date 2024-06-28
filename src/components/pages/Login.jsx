import React, { useState } from "react"
import TopHeader from "./TopHeader"
import Navbar from "./Navbar"
import Footer from "./Footer"
import style from "../css/Login.module.css"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import { TailSpin } from "react-loader-spinner"
import ClickToTop from "./ClickToTop"
import ScrollToTop from "./ScrollToTop"
import "react-toastify/dist/ReactToastify.css"

const Login = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState("")
  const [emailOrPhone, setEmailOrPhone] = useState("")
  const [loadingLogin, setLoadingLogin] = useState(false)
  const notifyFalse = (data) => toast.error(data, { autoClose: 3000 })

  const handleSubmit = async (e) => {
    setLoadingLogin(true)
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
      notifyFalse("Wrong credentials")
    } finally {
      setLoadingLogin(false)
    }
  }

  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <TopHeader />
      <Navbar showbar="login" />
      <hr />
      {loadingLogin ? (
        <div className={style.topLoader}>
          <TailSpin
            className={style.spinner}
            color="#db4444"
            height={80}
            width={80}
          />
        </div>
      ) : (
        ""
      )}
      <div className={loadingLogin ? style.blur : style.login}>
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
              <div className={style.forgotPass}>Forgot Password?</div>
            </div>
            <div className={style.signUp}>
              <h4>Already a user?</h4>
              <div
                className={style.signUpRedirect}
                onClick={() => {
                  navigate("/signup")
                }}
              >
                Sign up
              </div>
            </div>
          </div>
        </form>
      </div>
      <ClickToTop />
      <Footer />
    </>
  )
}

export default Login
