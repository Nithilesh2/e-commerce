import React, { useEffect, useRef, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import style from "../css/Payment.module.css"
import { useNavigate } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"

const TopHeader = React.lazy(() => import("./TopHeader"))
const Navbar = React.lazy(() => import("./Navbar"))
const Footer = React.lazy(() => import("./Footer"))
const ScrollToTop = React.lazy(() => import("./ScrollToTop"))

const Payment = () => {
  const upiIdRef = useRef(null)
  const numberRef = useRef(null)
  const holderRef = useRef(null)
  const expMonRef = useRef(null)
  const expYearRef = useRef(null)

  const navigate = useNavigate()

  const [cardToggle, setCardToggle] = useState(false)
  const [upiToggle, setUpiToggle] = useState(false)
  const [codToggle, setCodToggle] = useState(false)

  const [cardNumber, setCardNumber] = useState("")

  const [selectedCheckbox, setSelectedCheckbox] = useState(null)

  const notifyWarn = (data) => toast.warn(data, { autoClose: 4000 })
  const notifyTrue = (data) => toast.success(data, { autoClose: 4000 })

  const handleCheckboxChange = (event) => {
    const value = event.target.value
    setSelectedCheckbox(selectedCheckbox === value ? null : value)
    if (value === "option1") {
      holderRef.current.value = ""
      expMonRef.current.value = ""
      expYearRef.current.value = ""
      setUpiToggle(false)
      setCodToggle(false)
      setCardToggle(selectedCheckbox !== "option1")
    } else if (value === "option2") {
      upiIdRef.current.value = ""
      setCardToggle(false)
      setCodToggle(false)
      setUpiToggle(selectedCheckbox !== "option2")
    } else {
      setCardToggle(false)
      setUpiToggle(false)
      setCodToggle(selectedCheckbox !== "option3")
    }
  }

  const cardNumberChanging = (event) => {
    const { value } = event.target
    const digitsOnly = value.replace(/\D/g, "")
    const formattedValue = digitsOnly.replace(/(\d{4})(?=\d)/g, "$1 ")

    setCardNumber(formattedValue)
  }

  const proceedBtnClicked = () => {
    if (cardToggle || upiToggle || codToggle) {
      notifyTrue("Generating invoice")
      setTimeout(() => {
        navigate("/invoice")
      }, 5000)
    } else {
      notifyWarn("Please select a payment type")
    }
  }
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.continuousStart()
    }
  }, [])

  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <TopHeader />
      <Navbar />
      <hr />
      <div className={style.paymentMain}>
        <div className={style.topLeft}>
          <span
            className={style.cart}
            onClick={() => {
              navigate("/cart")
            }}
          >
            ..
          </span>
          <span className={style.slash}>/</span>
          <span
            className={style.checkOut}
            onClick={() => {
              navigate("/cart/checkout")
            }}
          >
            Check out
          </span>
          <span className={style.slash}>/</span>
          <span className={style.payment}>Payment</span>
        </div>

        <div className={style.bottom}>
          <div className={style.bottomPayment}>
            <div
              className={
                cardToggle
                  ? style.bottomBankPaymentBoxActive
                  : style.bottomBankPaymentBoxDeActive
              }
            >
              <div className={style.one}>
                <input
                  type="checkbox"
                  className={style.bottomBankPayment}
                  id="customRadiobox1"
                  name="radioButton"
                  value="option1"
                  checked={selectedCheckbox === "option1"}
                  onChange={handleCheckboxChange}
                />
                <label
                  className={style.bottomCard}
                  htmlFor="customRadiobox1"
                  onClick={() => {
                    setCardToggle(!cardToggle)
                  }}
                >
                  Credit or debit card
                </label>
              </div>
              <div className={style.two}>
                <div className={style.twoTop}>
                  <input
                    type="tel"
                    maxLength={19}
                    className={style.cardNumber}
                    placeholder="Enter card number"
                    value={cardNumber}
                    onChange={cardNumberChanging}
                    ref={numberRef}
                  />
                  <input
                    type="text"
                    className={style.cardHolder}
                    placeholder="Card Holder"
                    ref={holderRef}
                  />
                </div>
                <div className={style.twoBottom}>
                  <div className={style.twoBottomInput}>
                    <input
                      type="number"
                      placeholder="MM"
                      inputMode="numeric"
                      min={1}
                      className={style.cardExpMonth}
                      ref={expMonRef}
                    />
                    <input
                      type="number"
                      placeholder="YY"
                      inputMode="numeric"
                      min={1}
                      className={style.cardExpYear}
                      ref={expYearRef}
                    />
                  </div>
                  <div className={style.twoBottomButton}>
                    <button type="button" className={style.cardButton}>
                      Add Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className={style.hr} />
            <div
              className={
                upiToggle
                  ? style.bottomBankPaymentBoxActive
                  : style.bottomBankPaymentBoxDeActive
              }
            >
              <div className={style.one}>
                <input
                  type="checkbox"
                  className={style.bottomBankPayment}
                  id="customRadiobox2"
                  name="radioButton"
                  value="option2"
                  checked={selectedCheckbox === "option2"}
                  onChange={handleCheckboxChange}
                />
                <label
                  className={style.bottomUpi}
                  htmlFor="customRadiobox2"
                  onClick={() => setUpiToggle(!upiToggle)}
                >
                  UPI
                </label>
              </div>
              <div className={style.two}>
                <div className={style.twoTop}>
                  <input
                    type="text"
                    className={style.upi}
                    placeholder="xxxxxxxxxx@paytm"
                    ref={upiIdRef}
                  />
                  <button type="button" className={style.upiButton}>
                    Verify
                  </button>
                </div>
                <div
                  className={`${style.twoBottom} ${style.twoBottomUpiButtons}`}
                >
                  <button
                    type="button"
                    className={style.paymentUpi}
                    onClick={() => {
                      upiIdRef.current.value = "@paytm"
                    }}
                  >
                    @paytm
                  </button>
                  <button
                    type="button"
                    className={style.paymentUpi}
                    onClick={() => {
                      upiIdRef.current.value = "@okicici"
                    }}
                  >
                    @okicici
                  </button>
                  <button
                    type="button"
                    className={style.paymentUpi}
                    onClick={() => {
                      upiIdRef.current.value = "@ybl"
                    }}
                  >
                    @ybl
                  </button>
                  <button
                    type="button"
                    className={style.paymentUpi}
                    onClick={() => {
                      upiIdRef.current.value = "@upi"
                    }}
                  >
                    @upi
                  </button>
                </div>
              </div>
            </div>
            <hr className={style.hr} />
            <div className={style.bottomBankPaymentBoxActive}>
              <div className={style.one}>
                <input
                  type="checkbox"
                  className={style.bottomCodPayment}
                  id="customRadiobox3"
                  name="radioButton"
                  value="option3"
                  checked={selectedCheckbox === "option3"}
                  onChange={handleCheckboxChange}
                />
                <label className={style.bottomCod} htmlFor="customRadiobox3">
                  Cash On Delivery
                </label>
              </div>
            </div>
          </div>
          <div className={style.bottomPaymentButtonBox}>
            <button
              type="button"
              className={style.bottomPaymentButton}
              onClick={proceedBtnClicked}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Payment
