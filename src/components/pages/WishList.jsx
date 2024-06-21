import { useContext, useEffect, useState } from "react"
import AppContext from "../context/AppContext"
import React from "react"
import Navbar from "./Navbar"
import TopHeader from "./TopHeader"
import Footer from "./Footer"
import style from "../css/WishList.module.css"
import { AiOutlineDelete } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

const WishList = () => {
  const navigate = useNavigate()
  const {
    offersData,
    bestSellingData,
    deleteBtnClicked,
    addtoCart,
    addToCartBtnClicked,
    exploreOurProductsData,
  } = useContext(AppContext)

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
      <TopHeader />
      <Navbar />
      <hr />
      <div
        className={
          totalLikes.length === 0 ? style.wishListNoItems : style.wishListMain
        }
      >
        <div className={style.top}>
          <div className={style.topLeft}>Wishlist({wishListNumbers})</div>
          <div className={style.topRight}>
            {totalLikes.length === 0 ? (
              ""
            ) : (
              <button type="button" className={style.topRightButton}>
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
                  {addtoCart[data.id] ? (
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

      <Footer />
    </>
  )
}

export default WishList
