import React, { useState, useEffect, useRef } from "react"
import TopHeader from "./TopHeader"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { GoogleLogin } from "@react-oauth/google"
import style from "../css/SignUp.module.css"
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { toast, ToastContainer } from "react-toastify"
import { TailSpin } from "react-loader-spinner"
import quotes from "../json/serverBusyQuotes.json"
import ClickToTop from "./ClickToTop"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import ScrollToTop from "./ScrollToTop"
import "react-toastify/dist/ReactToastify.css"

const SignUp = () => {
  const notifyFalse = (data) => toast.error(data, { autoClose: 3000 })
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[\W_]).{8,}$/
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const numbersRegex = /[0-9]+/
  const navigate = useNavigate()
  const nameRef = useRef(null)
  const passwordRef = useRef(null)
  const emailOrPhoneRef = useRef(null)

  const [name, setName] = useState("")
  const [emailOrPhone, setEmailOrPhone] = useState("")
  const [password, setPassword] = useState("")
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  const [showQuotes, setShowQuotes] = useState(false)
  const [emailOrPhoneSet, setEmailOrPhoneSet] = useState(false)
  const [googleAuthUsed, setGoogleAuthUsed] = useState(false)
  const [inputType, setInputType] = useState(false)
  const [loadingLogin, setLoadingLogin] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  function loginClicked(credentialResponse) {
    setGoogleAuthUsed(true)
    let decode = jwtDecode(credentialResponse.credential)
    setName(decode.given_name)
    setEmailOrPhone(decode.email)
  }

  useEffect(() => {
    const width = window.innerWidth
    if (width > 768) {
      setInputType(true)
    } else {
      setInputType(false)
    }
  }, [])

  useEffect(() => {
    if (googleAuthUsed) {
      if (nameRef.current && emailOrPhoneRef) {
        nameRef.current.value = name
        emailOrPhoneRef.current.value = emailOrPhone
        passwordRef.current.focus()
      }
    } else {
      if (nameRef.current && emailOrPhoneRef) {
        nameRef.current.value = name
        emailOrPhoneRef.current.value = emailOrPhone
      }
    }
  }, [name, emailOrPhone, googleAuthUsed])

  const emailOrPhoneRefChanging = (eve) => {
    setEmailOrPhone(eve.target.value)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      )
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const firstData = emailOrPhone.substring(0, 1)
    if (numbersRegex.test(firstData)) {
      setEmailOrPhoneSet(true)
    } else {
      setEmailOrPhoneSet(false)
    }
  }, [emailOrPhone, emailOrPhoneSet, numbersRegex])

  const handleSubmit = async (e) => {
    setLoadingLogin(true)
    setInterval(() => {
      setShowQuotes(true)
    }, 5000)
    e.preventDefault()
    if (!passwordRegex.test(password)) {
      notifyFalse(
        "Password must be at least 8 characters long and include at least one uppercase letter,one special character, one lowercase letter, and one number."
      )
      setLoadingLogin(false)
      setShowQuotes(false)
      return
    } else {
      try {
        const response = await fetch(
          "https://e-commerce-backend-pg1o.onrender.com/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ emailOrPhone, password, name }),
          }
        )

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        navigate("/login")
      } catch (err) {
        console.log("Error signing up:", err.message)
      } finally {
        setLoadingLogin(false)
        setShowQuotes(false)
      }
    }
  }

  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <div className={style.main}>
        <TopHeader />
        <Navbar showbar="signup" />
        <hr />
        {loadingLogin ? (
          <>
            <div className={style.topLoader}>
              <TailSpin
                className={style.spinner}
                color="#db4444"
                height={80}
                width={80}
              />
            </div>
            {showQuotes ? (
              <div className={style.serverBusyQuotes}>
                <div className={style.serverBusyQuotesBox}>
                  {quotes[currentQuoteIndex].quote}
                </div>
              </div>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}

        <div className={loadingLogin ? style.blur : style.signUp}>
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
                  ref={nameRef}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type={inputType ? "text" : emailOrPhoneSet ? "tel" : "email"}
                  className={style.emailOrPhoneInput}
                  placeholder="Email or Phone Number"
                  value={emailOrPhone}
                  onChange={emailOrPhoneRefChanging}
                  required
                  ref={emailOrPhoneRef}
                  maxLength={emailOrPhoneSet ? 10 : 50}
                />
                <div className={style.passwordBox}>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={style.passwordInput}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    ref={passwordRef}
                  />
                  <div
                    className={style.passwordBoxShowPass}
                    onClick={() => {
                      setShowPassword(!showPassword)
                    }}
                  >
                    {showPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </div>
                </div>
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
                      navigate("/login")
                    }}
                  />
                </div>
                <div className={style.login}>
                  <h4>Already have an account?</h4>
                  <div
                    className={style.loginRedirect}
                    onClick={() => {
                      navigate("/login")
                    }}
                  >
                    Log in
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <ClickToTop />
        <Footer />
      </div>
    </>
  )
}

export default SignUp
