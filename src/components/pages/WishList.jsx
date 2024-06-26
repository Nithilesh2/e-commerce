import { useContext, useEffect, useRef, useState } from "react"
import AppContext from "../context/AppContext"
import React from "react"
import Navbar from "./Navbar"
import TopHeader from "./TopHeader"
import Footer from "./Footer"
import style from "../css/WishList.module.css"
import { AiOutlineDelete } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import LoadingBar from "react-top-loading-bar"
import ScrollToTop from "./ScrollToTop"

const WishList = () => {
  const navigate = useNavigate()
  const {
    offersData,
    bestSellingData,
    deleteBtnClicked,
    addtoCart,
    addToCartBtnClicked,
    exploreOurProductsData,
    moveAllToCart,
  } = useContext(AppContext)

  //Top Loading Bar
  const [skeletonLoading, setSkeletonLoading] = useState(true)
  const skeletonLoadingRef = useRef(null)

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

  const [totalLikes, setTotaLikes] = useState([])
  const wishListNumbers = totalLikes.length

  function updateItems() {
    const likedItemsOne = offersData.filter((item) => item.liked === true)
    const likedItemsTwo = bestSellingData.filter((item) => item.liked === true)
    const likedItemsThree = exploreOurProductsData.filter(
      (item) => item.liked === true
    )
    setTotaLikes([...likedItemsOne, ...likedItemsTwo, ...likedItemsThree])
  }

  useEffect(() => {
    updateItems()
    // eslint-disable-next-line
  }, [offersData, bestSellingData, exploreOurProductsData])

  return (
    <>
      <ScrollToTop />
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
            totalLikes.length === 0 ? style.wishListNoItems : style.wishListMain
          }
        >
          <div className={style.leftTop}>
            <span
              className={style.home}
              onClick={() => {
                navigate("/")
              }}
            >
              Home
            </span>
            <span className={style.slash}>/</span>
            <span className={style.wishlist}>WishList</span>
          </div>
          <div className={style.top}>
            <div className={style.topLeft}>Wishlist({wishListNumbers})</div>
            <div className={style.topRight}>
              {totalLikes.length === 0 ? (
                ""
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    totalLikes.map((data) => moveAllToCart(data.id))
                  }}
                  className={style.topRightButton}
                >
                  Move all to cart
                </button>
              )}
            </div>
          </div>
          <div className={style.bottom}>
            {totalLikes.length === 0 ? (
              <div className={style.noLikedItemsBox}>
                <div className={style.noLikedItems}>
                  <div className={style.noLikedItemsOne}>
                    Hmm, looks like you haven't liked any items.
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
              totalLikes.map((data) => (
                <div className={style.totalLikesData} key={data.id}>
                  <div className={style.totalLikesDataBox}>
                    <div className={style.totalLikesDataBoxTop}>
                      {data.discount ? (
                        <div className={style.totalLikesDataBoxTopDiscount}>
                          {data.discount}
                        </div>
                      ) : (
                        <div
                          className={style.totalLikesDataBoxTopDiscountNo}
                        ></div>
                      )}

                      <div
                        className={style.totalLikesDataBoxTopLike}
                        onClick={() => deleteBtnClicked(data.id)}
                      >
                        <AiOutlineDelete />
                      </div>
                    </div>
                    <div className={style.totalLikesDataBoxCenter}>
                      <img
                        src={data.image}
                        alt="img"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                    {data.addToCart ? (
                      addtoCart[data.id] ? (
                        <div
                          className={style.addToCartDeActive}
                          onClick={() => {
                            addToCartBtnClicked(data.id)
                          }}
                        >
                          Added
                        </div>
                      ) : (
                        <div
                          className={style.addToCartActive}
                          onClick={() => {
                            addToCartBtnClicked(data.id)
                          }}
                        >
                          Add to cart
                        </div>
                      )
                    ) : addtoCart[data.id] ? (
                      <div
                        className={style.addToCartDeActive}
                        onClick={() => {
                          addToCartBtnClicked(data.id)
                        }}
                      >
                        Added
                      </div>
                    ) : (
                      <div
                        className={style.addToCartActive}
                        onClick={() => {
                          addToCartBtnClicked(data.id)
                        }}
                      >
                        Add to cart
                      </div>
                    )}

                    <div className={style.totalLikesDataBoxBottom}>
                      <div className={style.totalLikesDataBoxBottomName}>
                        {data.name}
                      </div>
                      <div className={style.totalLikesDataBoxBottomCost}>
                        <span
                          className={style.totalLikesDataBoxBottomCostDiscount}
                        >
                          {data.discountCost}
                        </span>
                        <span
                          className={style.totalLikesDataBoxBottomCostOriginal}
                        >
                          {data.originalCost}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default WishList
