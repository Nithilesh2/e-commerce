import React, { useEffect, useRef, useState } from "react"
import TopHeader from "./TopHeader"
import Navbar from "./Navbar"
import Footer from "./Footer"
import style from "../css/Contact.module.css"
import { useNavigate } from "react-router-dom"
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import LoadingBar from "react-top-loading-bar"
import emailjs from "@emailjs/browser"
import { toast, ToastContainer } from "react-toastify"

const Contact = () => {
  const form = useRef()
  const ref = useRef(null)
  const userNameRef = useRef()
  const userEmailRef = useRef()
  const userMobileRef = useRef()
  const userMessageRef = useRef()
  const navigate = useNavigate()
  const [skeletonLoading, setSkeletonLoading] = useState(true)
  const notifyTrue = (data) => toast.success(data, { autoClose: 3000 })
  const notifyFalse = (data) => toast.error(data, { autoClose: 3000 })

  useEffect(() => {
    const randomTimeValue = Math.floor(Math.random() * 5) + 2
    const randomTime = randomTimeValue + "000"
    const timer = setTimeout(() => {
      setSkeletonLoading(false)
    }, randomTime)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (ref.current) {
      ref.current.continuousStart()
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("service_khd4ons", "template_w587wv8", form.current, {
        publicKey: "PixE8S-7pHeZ6vNBj",
      })
      .then(
        () => {
          notifyTrue("Message Received")
          userNameRef.current.value = ""
          userEmailRef.current.value = ""
          userMobileRef.current.value = ""
          userMessageRef.current.value = ""
        },
        () => {
          notifyFalse("Message Not Sent")
        }
      )
  }
  return (
    <>
      <ToastContainer />
      <TopHeader />
      <Navbar showbar="contact" />
      <hr />
      {skeletonLoading ? (
        <div className={style.skele}>
          <div>
            <LoadingBar color="#00BFFF" ref={ref} shadow={true} />
          </div>
        </div>
      ) : (
        <div className={style.contactMain}>
          <div className={style.topLeft}>
            <span
              className={style.home}
              onClick={() => {
                navigate("/")
              }}
            >
              Home
            </span>
            <span className={style.slash}>/</span>
            <span className={style.contact}>Contact</span>
          </div>
          <div className={style.bottom}>
            <div className={style.bottomLeft}>
              <div className={style.bottomLeftTop}>
                <div className={style.bottomLeftTopCallToUsBox}>
                  <div className={style.bottomLeftTopCallToUsCallIcon}>
                    <AiOutlinePhone />
                  </div>
                  <div className={style.bottomLeftTopCallToUs}>Call To Us</div>
                </div>
                <div className={style.bottomLeftTopOne}>
                  We are available 24/7, 7 days a week.
                </div>
                <div className={style.bottomLeftTopTwo}>
                  Phone: +919876543210
                </div>
              </div>
              <hr className={style.hr} />
              <div className={style.bottomLeftBottom}>
                <div className={style.bottomLeftBottomWriteToUsBox}>
                  <div className={style.bottomLeftBottomEnvelopeIcon}>
                    <AiOutlineMail />
                  </div>
                  <div className={style.bottomLeftBottomWriteToUs}>
                    Write to us
                  </div>
                </div>
                <div className={style.bottomLeftTopOne}>
                  Fill out our form and we will contact you within 24 hours
                </div>
                <div className={style.bottomLeftTopTwo}>
                  Emails: customer@exclusive.com
                </div>
                <div className={style.bottomLeftTopThree}>
                  Emails: support@exclusive.com
                </div>
              </div>
            </div>
            <div className={style.bottomRight}>
              <form
                className={style.bottomRightFormBox}
                ref={form}
                onSubmit={sendEmail}
              >
                <div className={style.bottomRightFormBoxTop}>
                  <input
                    type="text"
                    className={style.bottomRightFormBoxTopName}
                    placeholder="Your Name *"
                    name="user_name"
                    ref={userNameRef}
                    required
                  />
                  <input
                    type="email"
                    className={style.bottomRightFormBoxTopEmail}
                    placeholder="Your Email *"
                    name="user_email"
                    ref={userEmailRef}
                    required
                  />
                  <input
                    type="tel"
                    className={style.bottomRightFormBoxTopTelNumber}
                    placeholder="Your Phone *"
                    maxLength={10}
                    name="user_mobile"
                    ref={userMobileRef}
                    required
                  />
                </div>
                <div className={style.bottomRightFormBoxTopCenter}>
                  <textarea
                    className={style.bottomRightFormBoxTopCenterYourMessage}
                    placeholder="Your Message"
                    rows={8}
                    name="message"
                    ref={userMessageRef}
                  ></textarea>
                </div>
                <div className={style.bottomRightFormBoxTopBottom}>
                  <button
                    value="Send"
                    type="submit"
                    className={style.bottomRightFormBoxTopBottomButton}
                    required
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

export default Contact
