import React, { useEffect, useRef, useState } from "react"
import TopHeader from "./TopHeader"
import Navbar from "./Navbar"
import Footer from "./Footer"
import style from "../css/Cart.module.css"
import LoadingBar from "react-top-loading-bar"
import { useNavigate } from "react-router-dom"
import offersData from "../json/offerItemsData.json"

const Cart = () => {
  const skeletonLoadingRef = useRef(null)
  const inputRef = useRef(null)

  const navigate = useNavigate()
  const [skeletonLoading, setSkeletonLoading] = useState(true)

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

  return (
    <>
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
        <div className={style.cartMain}>
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
            <div className={style.bottomProductBox}>
              <div className={style.bottomProductBoxProduct}>Product</div>
              <div className={style.bottomProductBoxPrice}>Price</div>
              <div className={style.bottomProductBoxQuantity}>Quantity</div>
              <div className={style.bottomProductBoxSubtotal}>Subtotal</div>
            </div>
            {offersData.map((data) => (
              <div key={data.id} className={style.bottomProductBoxData}>
                <div className={style.bottomProductBoxDataProduct}>
                  <div className={style.bottomProductBoxDataProductImg}>
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
                  <input
                    type="number"
                    className={style.bottomProductBoxDataQuantityInput}
                    max={99}
                    ref={inputRef}
                  />
                </div>
                <div className={style.bottomProductBoxDataSubtotal}>
                  Subtotal
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default Cart
