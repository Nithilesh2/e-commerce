import React, { useContext, useEffect, useRef, useState } from "react"
import TopHeader from "./TopHeader"
import Navbar from "./Navbar"
import Footer from "./Footer"
import style from "../css/Cart.module.css"
import LoadingBar from "react-top-loading-bar"
import { useNavigate } from "react-router-dom"
import AppContext from "../context/AppContext"
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineClose,
} from "react-icons/ai"
import { useWindowSize } from "react-use"
import Confetti from "react-confetti"
import { toast, ToastContainer } from "react-toastify"

const Cart = () => {
  const { width, height } = useWindowSize()
  const {
    offersData,
    bestSellingData,
    exploreOurProductsData,
    totalCarts,
    setTotalCarts,
    removeAddToCart,
  } = useContext(AppContext)

  //getting data from appstore and geting the data which are true of addToCart
  const updateCart = () => {
    const addToCartOne = offersData.filter((data) => data.addToCart === true)
    const addToCartTwo = bestSellingData.filter(
      (data) => data.addToCart === true
    )
    const addToCartThree = exploreOurProductsData.filter(
      (data) => data.addToCart === true
    )
    setTotalCarts([...addToCartOne, ...addToCartTwo, ...addToCartThree])
  }
  useEffect(() => {
    updateCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offersData, bestSellingData, exploreOurProductsData])

  ////////////////////////////////////////////////////////////////
  const notifyFalse = (data) => toast.error(data, { autoClose: 3000 })
  const notifyTrue = (data) => toast.success(data, { autoClose: 3000 })

  const skeletonLoadingRef = useRef(null)
  const inputRef = useRef(null)

  const navigate = useNavigate()

  const [skeletonLoading, setSkeletonLoading] = useState(true)
  const [quantities, setQuantities] = useState({})
  const [couponConfetti, setCouponConfetti] = useState(false)

  //Top Loading Bar
  useEffect(() => {
    const randomTimeValue = Math.floor(Math.random() * 2) + 1
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

  const increaseNumber = (dataId) => {
    setQuantities((prev) => ({
      ...prev,
      [dataId]: (prev[dataId] || 0) + 1,
    }))
  }

  const decreaseNumber = (dataId) => {
    setQuantities((prev) => ({
      ...prev,
      [dataId]: Math.max((prev[dataId] || 0) - 1, 0),
    }))
  }

  const couponClicked = () => {
    if (inputRef.current.value === "new50") {
      notifyTrue("Applied successfully")
      setCouponConfetti(true)
      setTimeout(() => {
        setCouponConfetti(false)
      }, 5000)
    } else {
      if (inputRef.current.value === "") {
        notifyFalse("Please enter a coupon")
      } else {
        notifyFalse("use 'new50' coupon code")
      }
    }
  }

  return (
    <>
      {couponConfetti && <Confetti width={width - 30} height={height} />}
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
            totalCarts.length === 0 ? style.cartNoItems : style.cartMain
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
              className={style.wishlist}
              onClick={() => {
                navigate("/wishlist")
              }}
            >
              WishList
            </span>
            <span className={style.slash}>/</span>
            <span className={style.cart}>Cart</span>
          </div>
          <div className={style.bottom}>
            {totalCarts.length === 0 ? (
              <div className={style.noLikedItemsBox}>
                <div className={style.noLikedItems}>
                  <div className={style.noLikedItemsOne}>
                    Your, cart is empty
                  </div>
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
              <>
                <div className={style.bottomProductBox}>
                  <div className={style.bottomProductBoxProduct}>Product</div>
                  <div className={style.bottomProductBoxPrice}>Price</div>
                  <div className={style.bottomProductBoxQuantity}>Quantity</div>
                  <div className={style.bottomProductBoxSubtotal}>Subtotal</div>
                </div>
                {totalCarts.map((data) => (
                  <div key={data.id} className={style.bottomProductBoxData}>
                    <div className={style.bottomProductBoxDataProduct}>
                      <div className={style.bottomProductBoxDataProductImg}>
                        <div
                          className={style.closeBox}
                          onClick={() => {
                            removeAddToCart(data.id)
                          }}
                        >
                          <AiOutlineClose className={style.close} />
                        </div>
                        <img src={data.image} alt="imageData" />
                      </div>
                      <div className={style.bottomProductBoxDataProductName}>
                        {data.name}
                      </div>
                    </div>
                    <div className={style.bottomProductBoxDataPrice}>
                      {data.discountCost}
                    </div>
                    <div className={style.bottomProductBoxDataQuantity}>
                      <div
                        className={style.bottomProductBoxDataQuantityInputBox}
                      >
                        <div
                          className={style.bottomProductBoxDataQuantityInput}
                        >
                          {quantities[data.id] || 1}
                          <div className={style.buttonBox}>
                            <button
                              type="button"
                              className={style.increaseNumber}
                              onClick={() => {
                                increaseNumber(data.id)
                              }}
                            >
                              <AiOutlineArrowUp />
                            </button>
                            <button
                              type="button"
                              className={style.decreaseNumber}
                              onClick={() => {
                                decreaseNumber(data.id)
                              }}
                            >
                              <AiOutlineArrowDown />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.bottomProductBoxDataSubtotal}>
                      ₹{data.dc * Number(quantities[data.id]) || data.dc}
                    </div>
                  </div>
                ))}
                <div className={style.bottomUp}>
                  <button type="button" className={style.bottomUpLeftGoToHome}>
                    Return to Home
                  </button>
                </div>
                <div className={style.bottomCenter}>
                  <div className={style.bottomCenterLeft}>
                    <input
                      type="text"
                      placeholder="Coupon Code"
                      className={style.bottomCenterLeftCoupon}
                      ref={inputRef}
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
                <div className={style.bottomDown}>
                  <div className={style.bottomDownBox}>
                    <div className={style.bottomDownCartTotal}>Cart Total</div>
                    <div className={style.bottomDownSubTotal}>
                      <div className={style.left}>Subtotal: </div>
                      <div className={style.right}>7999</div>
                    </div>
                    <hr />
                    <div className={style.bottomDownShipping}>
                      <div className={style.left}>Shipping: </div>
                      <div className={style.right}>Free</div>
                    </div>
                    <hr />
                    <div className={style.bottomCoupon}>
                      <div className={style.left}>Coupon: </div>
                      <div className={style.right}>0</div>
                    </div>
                    <hr />
                    <div className={style.bottomDownTotal}>
                      <div className={style.left}>Total: </div>
                      <div className={style.right}>7999</div>
                    </div>
                    <div className={style.bottomDownButton}>
                      <button type="button" className={style.processToCheckout}>
                        Process to checkout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default Cart
