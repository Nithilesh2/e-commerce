import React, { useContext, useEffect, useState } from "react"
import style from "../css/Product.module.css"
import AppContext from "../context/AppContext"
import TopHeader from "./TopHeader"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useNavigate, useParams } from "react-router-dom"
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineSync,
  AiOutlineTruck,
} from "react-icons/ai"
import ScrollToTop from "./ScrollToTop"

const Product = () => {
  const {
    offersData,
    bestSellingData,
    exploreOurProductsData,
    quantities,
    setQuantities,
    likedItems,
    likeBtnClicked,
    setTotalCarts,
    // buyBtnClicked,
  } = useContext(AppContext)
  const { productId } = useParams()

  const navigate = useNavigate()

  const [details, setDetails] = useState([])

  const updateData = () => {
    const decrypted = atob(productId)

    const od = offersData.filter((data) => data.id === decrypted)
    const bd = bestSellingData.filter((data) => data.id === decrypted)
    const ep = exploreOurProductsData.filter((data) => data.id === decrypted)

    setDetails([od, bd, ep])
  }

  useEffect(() => {
    updateData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  //   const buyBtnClicke = () => {
  //     navigate("/cart/checkout")
  //   }

  const buyBtnClicked = (itemId) => {
    const addToCart = offersData
      .map((item) => {
        if (item.id === itemId) {
          item.addToCart = true
        }
        return item
      })
      .filter((item) => item.addToCart === true)
    setTotalCarts(addToCart)

    navigate("/cart/checkout")
  }

  return (
    <>
      <ScrollToTop />
      <TopHeader />
      <Navbar />
      <hr />
      <div className={style.productMain}>
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
          <span className={style.cart}>
            {details.map((data) => data.map((item) => item.name))}
          </span>
        </div>

        {details.map((data, index) => (
          <div key={index}>
            {data.map((item) => (
              <div key={item.id} className={style.product}>
                <div className={style.leftImage}>
                  <img src={item.image} alt="productImage" />
                </div>
                <div className={style.rightData}>
                  <div className={style.rightDataName}>
                    {item.name}
                    <div className={style.rightDataReviews}>Reviews (120)</div>
                  </div>

                  <div className={style.rightDataCost}>
                    <div className={style.rightDataOriginalCost}>
                      {item.originalCost}
                    </div>
                    <div className={style.rightDataDiscountCost}>
                      {item.discountCost}
                    </div>
                  </div>

                  <div className={style.rightDataDesc}>{item.description}</div>

                  <hr className={style.hr} />

                  <div className={style.rightDataQuaBuyLike}>
                    <div className={style.rightDataQuaBox}>
                      <div className={style.rightDataQuaBoxInput}>
                        {quantities[data.id] || 1}
                        <div className={style.buttonBox}>
                          <button
                            type="button"
                            className={style.decreaseNumber}
                            onClick={() => {
                              decreaseNumber(data.id)
                            }}
                          >
                            <AiOutlineMinus />
                          </button>
                          <button
                            type="button"
                            className={style.increaseNumber}
                            onClick={() => {
                              increaseNumber(data.id)
                            }}
                          >
                            <AiOutlinePlus />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={style.rightDataBuy}>
                      <button
                        type="button"
                        className={style.rightDataBuyBtn}
                        onClick={() => buyBtnClicked(item.id)}
                      >
                        Buy Now
                      </button>
                    </div>
                    <div
                      className={style.rightDataLike}
                      onClick={() => likeBtnClicked(item.id)}
                    >
                      {likedItems[item.id] ? (
                        <AiFillHeart
                          className={`
                                ${style.heartActive}
                                ${style.rowSixOffersDataBox}`}
                        />
                      ) : (
                        <AiOutlineHeart
                          className={`
                                ${style.heartDeActive}
                                ${style.rowSixOffersDataBox}`}
                        />
                      )}
                    </div>
                  </div>
                  <div className={style.rightDataDeliveryAndReturnBoxes}>
                    <div className={style.boxesDelivery}>
                      <div className={style.boxesDeliveryLeft}>
                        <AiOutlineTruck />
                      </div>
                      <div className={style.boxesDeliveryRight}>
                        <div>Free Delivery</div>
                        <div>
                          Enter your postal code for Delivery Availability
                        </div>
                      </div>
                    </div>
                    <div className={style.boxesReturn}>
                      <div className={style.boxesReturnLeft}>
                        <AiOutlineSync />
                      </div>
                      <div className={style.boxesReturnRight}>
                        <div>Return Delivery</div>
                        <div>Free 30 Days Delivey Returns</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Product
