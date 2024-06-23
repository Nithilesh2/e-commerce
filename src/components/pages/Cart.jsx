import React, { useContext, useEffect, useRef, useState } from "react"
import TopHeader from "./TopHeader"
import Navbar from "./Navbar"
import Footer from "./Footer"
import style from "../css/Cart.module.css"
import LoadingBar from "react-top-loading-bar"
import { useNavigate } from "react-router-dom"
import AppContext from "../context/AppContext"
import { AiOutlineClose } from "react-icons/ai"

const Cart = () => {
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
  const skeletonLoadingRef = useRef(null)

  const navigate = useNavigate()

  const [skeletonLoading, setSkeletonLoading] = useState(true)

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
        <div
          className={
            totalCarts.length === 0
              ? style.cartNoItems
              : totalCarts.length <= 4
              ? style.cartMainLengthLessThanFour
              : style.cartMain
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
                      <input
                        type="text"
                        className={style.bottomProductBoxDataQuantityInput}
                        max={99}
                      />
                    </div>
                    <div className={style.bottomProductBoxDataSubtotal}>
                      Subtotal
                    </div>
                  </div>
                ))}
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
