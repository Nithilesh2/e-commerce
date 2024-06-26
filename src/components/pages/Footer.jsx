import React from "react"
import style from "../css/Footer.module.css"
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineFacebook,
  AiOutlineSend,
  AiOutlineTwitter,
} from "react-icons/ai"
import { useNavigate } from "react-router-dom"

const Footer = () => {
  const navigate = useNavigate()
  return (
    <>
      <footer className={style.footer}>
        <div className={style.footerDataOne}>
          <ul className={style.footerDataOneItems}>
            <li className={style.exclusive}>Exclusive</li>
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
            <li className={style.mailTransfer}>
              <input
                type="email"
                className={style.email}
                placeholder="Enter your email"
              />
              <AiOutlineSend className={style.sendArrow} />
            </li>
          </ul>
        </div>
        <div className={style.footerDataTwo}>
          <ul className={style.footerDataTwoItems}>
            <li className={style.support}>Support</li>
            <li>
              <p>111 Bijoy sarani, Dhaka,</p>
              <p>DH1515, Bangladesh.</p>
            </li>
            <li>
              <a href="mailto:abcde@gmail.com">abcde@gmail.com</a>
            </li>
            <li>
              <a href="tel:+919864847518">9864847518</a>
            </li>
          </ul>
        </div>
        <div className={style.footerDataThree}>
          <ul className={style.footerDataThreeItems}>
            <li className={style.account}>Account</li>
            <li
              onClick={() => {
                navigate("/myaccount")
              }}
            >
              My Account
            </li>
            <li
              onClick={() => {
                navigate("/login")
              }}
            >
              Login / Register
            </li>
            <li onClick={() => navigate("/cart")}>Cart</li>
            <li onClick={() => navigate("/wishlist")}>WishList</li>
            <li
              onClick={() => {
                navigate("/")
              }}
            >
              Shop
            </li>
          </ul>
        </div>
        <div className={style.footerDataFour}>
          <ul className={style.footerDataFourItems}>
            <li className={style.quickLink}>Quick Link</li>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </div>
        <div className={style.footerDataFive}>
          <ul className={style.footerDataFiveItems}>
            <li className={style.downloadApp}>Download App</li>
            <li>Save $3 with App New User Only</li>
            <li className={style.images}>
              <img
                className={style.qrcode}
                src="https://randomqr.com/assets/images/randomqr-256.png"
                alt="qrcode"
              />
              <img
                className={style.stores}
                src="https://miro.medium.com/v2/resize:fit:642/1*ew36jzYwMSJXL7iB4ROubQ.png"
                alt="get it on googleplay"
                onClick={() => {
                  window.open(
                    "https://play.google.com/store",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }}
              />
            </li>
            <li className={style.socialLinks}>
              <span className={style.faceBookBox}>
                <AiOutlineFacebook
                  className={style.facebook}
                  onClick={() => {
                    window.open("https://facebook.com", "_blank")
                  }}
                />
              </span>
              <span className={style.twitterBox}>
                <AiOutlineTwitter
                  className={style.twitter}
                  onClick={() => {
                    window.open("https://twitter.com", "_blank")
                  }}
                />
              </span>
              <span className={style.instagramBox}>
                <AiFillInstagram
                  className={style.instagram}
                  onClick={() => {
                    window.open("https://instagram.com", "_blank")
                  }}
                />
              </span>
              <span className={style.linkedInBox}>
                <AiFillLinkedin
                  className={style.linkedIn}
                  onClick={() => {
                    window.open("https://linkedin.com", "_blank")
                  }}
                />
              </span>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
