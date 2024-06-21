import React, { useState, useEffect, useRef, useContext } from "react"
import TopHeader from "./TopHeader"
import Navbar from "./Navbar"
import Footer from "./Footer"
import style from "../css/Home.module.css"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import MultiCarousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import {
  AiFillHeart,
  AiOutlineBulb,
  AiOutlineCamera,
  AiOutlineDesktop,
  AiOutlineHeart,
  AiOutlineLaptop,
  AiOutlineMobile,
  AiOutlinePrinter,
  AiOutlineTablet,
  AiOutlineWallet,
} from "react-icons/ai"
import SideLeftRedColor from "./SideLeftRedColor"
import browseByCategoryData from "../json/browseByCategory.json"
import AppContext from "../context/AppContext"
import Trust from "./Trust"
import ClickToTop from "./ClickToTop"
import LoadingBar from "react-top-loading-bar"

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({})
  const intervalRef = useRef(null)

  const [skeletonLoading, setSkeletonLoading] = useState(true)

  const iconMap = {
    AiOutlineMobile: <AiOutlineMobile />,
    AiOutlineCamera: <AiOutlineCamera />,
    AiOutlineWallet: <AiOutlineWallet />,
    AiOutlineTablet: <AiOutlineTablet />,
    AiOutlinePrinter: <AiOutlinePrinter />,
    AiOutlineBulb: <AiOutlineBulb />,
    AiOutlineDesktop: <AiOutlineDesktop />,
    AiOutlineLaptop: <AiOutlineLaptop />,
  }
  const responsiverowTwo = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    largerDesktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1300 },
      items: 5,
    },
    desktop2: {
      breakpoint: { max: 1300, min: 1000 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1000, min: 820 },
      items: 3,
    },
    tablet2: {
      breakpoint: { max: 820, min: 520 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
      items: 1,
    },
  }
  const responsiveRowThree = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1600 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 1600, min: 820 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 820, min: 600 },
      items: 4,
    },
    tablet2: {
      breakpoint: { max: 600, min: 450 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 450, min: 260 },
      items: 2,
    },
    mobile2: {
      breakpoint: { max: 260, min: 0 },
      items: 1,
    },
  }

  useEffect(() => {
    const randomTimeValue = Math.floor(Math.random() * 5) + 2
    const randomTime = randomTimeValue + "000"
    const timer = setTimeout(() => {
      setSkeletonLoading(false)
    }, randomTime)
    return () => clearTimeout(timer)
  }, [])

  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.continuousStart()
    }
  }, [])

  useEffect(() => {
    const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        )
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        clearInterval(intervalRef.current)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    intervalRef.current = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(intervalRef.current)
  }, [])

  const context = useContext(AppContext)
  const {
    offersData,
    likeBtnClicked,
    addToCartBtnClicked,
    likedItems,
    addtoCart,
    bestSellingData,
    exploreOurProductsData,
  } = context

  return (
    <>
      <TopHeader />
      <Navbar showbar="home" />
      <hr />
      {skeletonLoading ? (
        <div className={style.skele}>
          <div>
            <LoadingBar color="#00BFFF" ref={ref} shadow={true} />
          </div>
        </div>
      ) : (
        <div className={style.rows}>
          <div className={style.rowOne}>
            <Carousel
              className={style.carousalOne}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              autoPlay={true}
            >
              <div>
                <img
                  src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1621488513434/today-electronics-offers.jpg"
                  alt="offers"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  src="https://pbs.twimg.com/media/GGMpKzJW0AApMNQ.jpg:large"
                  alt="onePlusOffer"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  src="https://idestiny.in/wp-content/uploads/2024/02/Web-offer-page_Web-banner-3-01-1024x373.png"
                  alt="iphoneOffer"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1618571140235/mobile-offers.jpg"
                  alt="samsungOffer"
                  loading="lazy"
                />
              </div>
            </Carousel>
          </div>
          <div className={style.rowTwo}>
            <SideLeftRedColor data={"Today's"} />
            <div className={style.flashSalesBox}>
              <div className={style.flashSales}>Flash Sales</div>
              <div className={style.offerTimePeriod}>
                <span className={style.days}>
                  <div className={style.daysShowDays}>Days</div>
                  <div className={style.daysShowNumber}>
                    <div>
                      {timeLeft.days > 9 ? timeLeft.days : `0${timeLeft.days}`}
                    </div>
                    <div className={style.semicolon}>:</div>
                  </div>
                </span>
                <span className={style.hours}>
                  <div className={style.daysShowDays}>Hours</div>
                  <div className={style.daysShowNumber}>
                    <div>
                      {timeLeft.hours > 9
                        ? timeLeft.hours
                        : `0${timeLeft.hours}`}
                    </div>
                    <div className={style.semicolon}>:</div>
                  </div>
                </span>
                <span className={style.minutes}>
                  <div className={style.daysShowDays}>Minutes</div>
                  <div className={style.daysShowNumber}>
                    <div>
                      {timeLeft.minutes > 9
                        ? timeLeft.minutes
                        : `0${timeLeft.minutes}`}
                    </div>
                    <div className={style.semicolon}>:</div>
                  </div>
                </span>
                <span className={style.seconds}>
                  <div className={style.daysShowDays}>Seconds</div>
                  <div className={style.daysShowNumber}>
                    <div>
                      {timeLeft.seconds > 9
                        ? timeLeft.seconds
                        : `0${timeLeft.seconds}`}
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div className={style.todaySpecialOffersItems}>
              <MultiCarousel
                responsive={responsiverowTwo}
                className={style.multiCarousal}
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                arrows={false}
              >
                {offersData.map((data) => (
                  <div className={style.rowTwoOffersData} key={data.id}>
                    <div className={style.rowTwoOffersDataBox}>
                      <div className={style.rowTwoOffersDataBoxTop}>
                        <div className={style.rowTwoOffersDataBoxTopDiscount}>
                          {data.discount}
                        </div>
                        <div
                          className={style.rowTwoOffersDataBoxTopLike}
                          onClick={() => likeBtnClicked(data.id)}
                        >
                          {likedItems[data.id] ? (
                            <AiFillHeart className={style.heartActive} />
                          ) : (
                            <AiOutlineHeart className={style.heartDeActive} />
                          )}
                        </div>
                      </div>
                      <div className={style.rowTwoOffersDataBoxCenter}>
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
                      <div className={style.rowTwoOffersDataBoxBottom}>
                        <div className={style.rowTwoOffersDataBoxBottomName}>
                          {data.name}
                        </div>
                        <div className={style.rowTwoOffersDataBoxBottomCost}>
                          <span
                            className={
                              style.rowTwoOffersDataBoxBottomCostDiscount
                            }
                          >
                            {data.discountCost}
                          </span>
                          <span
                            className={
                              style.rowTwoOffersDataBoxBottomCostOriginal
                            }
                          >
                            {data.originalCost}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </MultiCarousel>
              <button className={style.allProductsBtn}>
                View All Products
              </button>
            </div>
          </div>
          <hr />
          <div className={style.rowThree}>
            <SideLeftRedColor data={"Categories"} />
            <div className={style.browseByCategory}>Browse By Category</div>
            <div className={style.rowThreeDataBoxDataItems}>
              <div className={style.rowThreeDataBox}>
                <MultiCarousel
                  responsive={responsiveRowThree}
                  className={style.multiCarousal}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                  infinite={true}
                  arrows={false}
                >
                  {browseByCategoryData.map((data, key) => (
                    <div key={key} className={style.rowThreeDataBoxes}>
                      <div className={style.rowThreeDataBoxIcons}>
                        {iconMap[data.icon]}
                      </div>
                      <div className={style.rowThreeDataBoxNames}>
                        {data.type}
                      </div>
                    </div>
                  ))}
                </MultiCarousel>
              </div>
            </div>
          </div>
          <hr />
          <div className={style.rowFour}>
            <SideLeftRedColor data={"This Month"} />
            <div className={style.rowFourBestSellingBox}>
              <div className={style.bestSellingProducts}>
                Best Selling Products
              </div>
              <div>
                <button
                  type="button"
                  className={style.bestSellingProductsButton}
                >
                  View All
                </button>
              </div>
            </div>
            <div className={style.todaySpecialOffersItems}>
              <MultiCarousel
                responsive={responsiverowTwo}
                className={style.multiCarousal}
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                arrows={false}
              >
                {bestSellingData.map((data) => (
                  <div className={style.rowTwoOffersData} key={data.id}>
                    <div className={style.rowTwoOffersDataBox}>
                      <div
                        className={style.rowTwoOffersDataBoxTop}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          paddingRight: "20px",
                        }}
                      >
                        <div
                          className={style.rowTwoOffersDataBoxTopLike}
                          onClick={() => likeBtnClicked(data.id)}
                        >
                          {likedItems[data.id] ? (
                            <AiFillHeart className={style.heartActive} />
                          ) : (
                            <AiOutlineHeart className={style.heartDeActive} />
                          )}
                        </div>
                      </div>
                      <div className={style.rowTwoOffersDataBoxCenter}>
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
                      <div className={style.rowTwoOffersDataBoxBottom}>
                        <div className={style.rowTwoOffersDataBoxBottomName}>
                          {data.name}
                        </div>
                        <div className={style.rowTwoOffersDataBoxBottomCost}>
                          <span
                            className={
                              style.rowTwoOffersDataBoxBottomCostDiscount
                            }
                          >
                            {data.discountCost}
                          </span>
                          <span
                            className={
                              style.rowTwoOffersDataBoxBottomCostOriginal
                            }
                          >
                            {data.originalCost}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </MultiCarousel>
            </div>
          </div>
          <div className={style.rowFive}>
            <div className={style.speakerBox}>
              <div className={style.speakerBoxLeft}>
                <div className={style.speakerBoxLeftCategories}>Categories</div>
                <div className={style.speakerBoxLeftEnhance}>
                  <div className={style.speakerBoxLeftTop}>Enhance Your</div>
                  <div className={style.speakerBoxLeftBottom}>
                    Music Experience
                  </div>
                </div>
                <div className={style.speakerBoxLeftBuyBtnBox}>
                  <button className={style.speakerBoxLeftBuyBtn}>
                    Buy Now
                  </button>
                </div>
              </div>
              <div className={style.speakerBoxRight}>
                <img
                  src="https://www.pngmart.com/files/15/JBL-Audio-Speakers-Amplifier-Background-PNG.png"
                  alt="speaker"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className={style.rowSix}>
            <SideLeftRedColor data={"Our Products"} />
            <div className={style.exploreOurProducts}>Explore Our Products</div>
            <div className={style.todaySpecialOffersItems}>
              <div className={style.rowSixMultiCarousal}>
                {exploreOurProductsData.map((data) => (
                  <div className={style.rowSixOffersData} key={data.id}>
                    <div className={style.rowTwoOffersDataBox}>
                      <div
                        className={style.rowTwoOffersDataBoxTop}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          paddingRight: "20px",
                        }}
                      >
                        <div
                          className={style.rowTwoOffersDataBoxTopLike}
                          onClick={() => likeBtnClicked(data.id)}
                        >
                          {likedItems[data.id] ? (
                            <AiFillHeart className={style.heartActive} />
                          ) : (
                            <AiOutlineHeart className={style.heartDeActive} />
                          )}
                        </div>
                      </div>
                      <div className={style.rowTwoOffersDataBoxCenter}>
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
                      <div className={style.rowTwoOffersDataBoxBottom}>
                        <div className={style.rowTwoOffersDataBoxBottomName}>
                          {data.name}
                        </div>
                        <div className={style.rowTwoOffersDataBoxBottomCost}>
                          <span
                            className={
                              style.rowTwoOffersDataBoxBottomCostDiscount
                            }
                          >
                            {data.discountCost}
                          </span>
                          <span
                            className={
                              style.rowTwoOffersDataBoxBottomCostOriginal
                            }
                          >
                            {data.originalCost}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className={style.rowSixAllProductsBtn}>
                View All Products
              </button>
            </div>
          </div>
          <hr />
          <div className={style.rowSeven}>
            <Trust />
          </div>
        </div>
      )}
      {/*/////////////////// uparrow ////////////////////////*/}
      <ClickToTop />
      <Footer />
    </>
  )
}

export default Home
