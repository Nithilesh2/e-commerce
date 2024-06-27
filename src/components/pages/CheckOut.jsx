import React, { useContext, useEffect, useRef, useState } from "react"
import style from "../css/Checkout.module.css"
import Footer from "./Footer"
import Navbar from "./Navbar"
import TopHeader from "./TopHeader"
import { toast, ToastContainer } from "react-toastify"
import LoadingBar from "react-top-loading-bar"
import { useNavigate } from "react-router-dom"
import AppContext from "../context/AppContext"
import { AiOutlineMinusCircle } from "react-icons/ai"
import ScrollToTop from "./ScrollToTop"

const CheckOut = () => {
  const {
    totalCarts,
    subTotalCost,
    shippingCost,
    totalCost,
    couponCode,
    setCouponCode,
    quantities,
  } = useContext(AppContext)

  const inputRef = useRef(null)

  const skeletonLoadingRef = useRef(null)
  const [skeletonLoading, setSkeletonLoading] = useState(true)

  const notifyFalse = (data) => toast.error(data, { autoClose: 3000 })
  const notifyTrue = (data) => toast.success(data, { autoClose: 3000 })
  const notifyWarn = (data) => toast.warn(data, { autoClose: 3000 })


  const navigate = useNavigate()

  useEffect(() => {
    const randomTimeValue = Math.floor(Math.random() * 4) + 2
    const randomTime = randomTimeValue + "000"
    const timer = setTimeout(() => {
      setSkeletonLoading(false)
    }, randomTime)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (skeletonLoadingRef.current) {
      skeletonLoadingRef.current.continuousStart()
    }
  }, [])

  const couponClicked = () => {
    const tolowercaseofcouponcode = inputRef.current.value
      .slice(0, 3)
      .toLowerCase()
    if (tolowercaseofcouponcode === "new") {
      const couponCode = inputRef.current.value
      const sliceCouponCode = couponCode.slice(3)
      if (
        sliceCouponCode === "50" ||
        sliceCouponCode === "100" ||
        sliceCouponCode === "150" ||
        sliceCouponCode === "200"
      ) {
        setCouponCode(sliceCouponCode)
        notifyTrue("Applied successfully")
        inputRef.current.value = ""
      } else {
        notifyFalse("Coupon code is invalid")
      }
    } else {
      if (inputRef.current.value === "") {
        notifyFalse("Please enter a coupon code")
      } else {
        notifyFalse("use 'new50' or 'new100'... coupon code")
      }
    }
  }

  const couponCodeInputChange = (eve) => {
    if (eve.key === "Enter") {
      couponClicked()
      inputRef.current.value = ""
    }
  }

  const removeCouponButton = () => {
    setCouponCode("0")
    notifyWarn("coupon is removed")
  }

  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <TopHeader />
      <Navbar />
      <hr />
      {skeletonLoading ? (
        <div className={style.skele}>
          <div>
            <LoadingBar
              color="#00BFFF"
              ref={skeletonLoadingRef}
              shadow={true}
            />
          </div>
        </div>
      ) : (
        <div
          className={
            totalCarts.length === 0 ? style.cartNoItems : style.checkOutMain
          }
        >
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
            <span
              className={style.cart}
              onClick={() => {
                navigate("/cart")
              }}
            >
              Cart
            </span>
            <span className={style.slash}>/</span>
            <span className={style.checkOut}>Check out</span>
          </div>
          {totalCarts.length === 0 ? (
            <div className={style.bottomLeftNothingToShow}>
              <div className={style.noLikedItems}>
                <div className={style.noLikedItemsOne}>Your, cart is empty</div>
                <div className={style.noLikedItemsTwo}>
                  Would you like to explore some products.
                </div>
              </div>
              <div className={style.navigateToHomeButtonBox}>
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className={style.navigateToHomeButton}
                >
                  Explore Products
                </button>
              </div>
            </div>
          ) : (
            <div className={style.bottom}>
              <div className={style.bottomLeft}>
                <div className={style.bottomLeftBillingDetailsBox}>
                  Billing Details
                </div>
                <div className={`${style.nameBox} ${style.bottomLeftBilling}`}>
                  <label className={style.left}>Name*</label>
                  <input type="text" className={style.inputBox} />
                </div>
                <div
                  className={`${style.streetAddressBox} ${style.bottomLeftBilling}`}
                >
                  <label className={style.left}>Street Address*</label>
                  <input type="text" className={style.inputBox} />
                </div>
                <div
                  className={`${style.apartmentNoBox} ${style.bottomLeftBilling}`}
                >
                  <label className={style.left}>
                    Apartment,floor,etc. (optional)
                  </label>
                  <input type="text" className={style.inputBox} />
                </div>
                <div
                  className={`${style.townOrCityBox} ${style.bottomLeftBilling}`}
                >
                  <label className={style.left}>Town/City*</label>
                  <input type="text" className={style.inputBox} />
                </div>
                <div
                  className={`${style.pincodeBox} ${style.bottomLeftBilling}`}
                >
                  <label className={style.left}>Pincode*</label>
                  <input type="tel" className={style.inputBox} maxLength={6} />
                </div>
                <div
                  className={`${style.phoneNumberBox} ${style.bottomLeftBilling}`}
                >
                  <label className={style.left}>phone Number*</label>
                  <input type="tel" className={style.inputBox} maxLength={10} />
                </div>
                <div
                  className={`${style.emailAddressBox} ${style.bottomLeftBilling}`}
                >
                  <label className={style.left}>Email Address*</label>
                  <input type="email" className={style.inputBox} />
                </div>
                <div className={style.saveInfoBox}>
                  <input
                    type="checkbox"
                    className={style.saveInfoInputBox}
                    id="customCheckbox"
                  />
                  <label
                    className={style.saveInfoParaBox}
                    htmlFor="customCheckbox"
                  >
                    Save this information for faster check-out next time
                  </label>
                </div>
              </div>

              <div className={style.bottomRight}>
                <div className={style.bottomRightBox}>
                  {totalCarts.map((data) => (
                    <div className={style.bottomRightBoxData} key={data.id}>
                      <div className={style.bottomRightBoxDataLeft}>
                        <div className={style.bottomRightBoxDataLeftImg}>
                          <div
                            className={
                              style.bottomRightBoxDataLeftImgQuantities
                            }
                          >
                            {quantities[data.id] || 1}
                          </div>
                          <img src={data.image} alt="data_image" />
                        </div>
                        <div className={style.bottomRightBoxDataLeftName}>
                          {data.name}
                        </div>
                      </div>
                      <div className={style.bottomRightBoxDataRight}>
                        <div className={style.bottomRightBoxDataCost}>
                          {data.dc}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className={style.bottomRightBoxSubTotalBox}>
                    <div className={style.bottomRightBoxSubTotal}>
                      Subtotal:{" "}
                    </div>
                    <div className={style.bottomRightBoxSubTotalCost}>
                      ₹{subTotalCost}
                    </div>
                  </div>
                  <hr />
                  <div className={style.bottomRightBoxShippingBox}>
                    <div className={style.bottomRightBoxShipping}>
                      Shipping:{" "}
                    </div>
                    <div className={style.bottomRightBoxShippingCost}>
                      {shippingCost === 0 ? "Free" : `₹${shippingCost}`}
                    </div>
                  </div>
                  <hr />
                  <div className={style.bottomRightBoxCouponBox}>
                    <div className={style.bottomRightBoxLeft}>Coupon: </div>
                    <div className={style.right}>
                      {couponCode === "0" ? (
                        <>{couponCode}</>
                      ) : (
                        <>
                          <AiOutlineMinusCircle onClick={removeCouponButton} />
                          {couponCode}
                        </>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className={style.bottomRightBoxTotalBox}>
                    <div className={style.bottomRightBoxTotal}>Total: </div>
                    <div className={style.bottomRightBoxTotalCost}>
                      {totalCost}
                    </div>
                  </div>
                  <div className={style.bottomRightBoxCoupon}>
                    <div className={style.bottomCenterLeft}>
                      <input
                        type="text"
                        placeholder="Coupon Code"
                        className={style.bottomCenterLeftCoupon}
                        ref={inputRef}
                        onKeyPress={couponCodeInputChange}
                      />
                    </div>
                    <div className={style.bottomCenterRight}>
                      <button
                        className={style.bottomCenterRightApplyCoupon}
                        onClick={couponClicked}
                      >
                        Apply Coupon
                      </button>
                    </div>
                  </div>
                  <div className={style.placeOrder}>
                    <button
                      className={style.placeOrgerBtn}
                      onClick={() => navigate("/cart/checkout/payment")}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <Footer />
    </>
  )
}

export default CheckOut
