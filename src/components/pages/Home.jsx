import React, { useState } from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import style from "../css/Home.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../json/offerItemsData.json";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Home = () => {
  const [likedItems, setLikedItems] = useState({});
  const likeBtnClicked = (key) => {
    setLikedItems((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  const responsive = {
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
  };
  return (
    <>
      <TopHeader />
      <Navbar showbar="home" />
      <hr />
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
              />
            </div>
            <div>
              <img
                src="https://pbs.twimg.com/media/GGMpKzJW0AApMNQ.jpg:large"
                alt="onePlusOffer"
              />
            </div>
            <div>
              <img
                src="https://idestiny.in/wp-content/uploads/2024/02/Web-offer-page_Web-banner-3-01-1024x373.png"
                alt="iphoneOffer"
              />
            </div>
            <div>
              <img
                src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1618571140235/mobile-offers.jpg"
                alt="samsungOffer"
              />
            </div>
          </Carousel>
        </div>
        <div className={style.rowTwo}>
          <div className={style.todaySpecialOffers}>
            <div className={style.todaySpecialOffersLeft}></div>
            <div className={style.todaySpecialOffersRight}>Today's</div>
          </div>
          <div className={style.flashSalesBox}>
            <div className={style.flashSales}>Flash Sales</div>
            <div className={style.offerTimePeriod}>
              <span className={style.days}>
                <div className={style.daysShowDays}>Days</div>
                <div className={style.daysShowNumber}>
                  <div>03</div>
                  <div className={style.semicolon}>:</div>
                </div>
              </span>
              <span className={style.hours}>
                <div className={style.daysShowDays}>Hours</div>
                <div className={style.daysShowNumber}>
                  <div>23</div>
                  <div className={style.semicolon}>:</div>
                </div>
              </span>
              <span className={style.minutes}>
                <div className={style.daysShowDays}>Minutes</div>
                <div className={style.daysShowNumber}>
                  <div>33</div>
                  <div className={style.semicolon}>:</div>
                </div>
              </span>
              <span className={style.seconds}>
                <div className={style.daysShowDays}>Seconds</div>
                <div className={style.daysShowNumber}>
                  <div>03</div>
                </div>
              </span>
            </div>
          </div>
          <div className={style.todaySpecialOffersItems}>
            <MultiCarousel
              responsive={responsive}
              className={style.multiCarousal}
            >
              {data.map((data, key) => (
                <div className={style.rowTwoOffersData} key={key}>
                  <div className={style.rowTwoOffersDataBox}>
                    <div className={style.rowTwoOffersDataBoxTop}>
                      <div className={style.rowTwoOffersDataBoxTopDiscount}>
                        {data.discount}
                      </div>
                      <div
                        className={style.rowTwoOffersDataBoxTopLike}
                        onClick={() => likeBtnClicked(key)}
                      >
                        {likedItems[key] ? (
                          <AiFillHeart className={style.heartActive} />
                        ) : (
                          <AiOutlineHeart className={style.heartDeActive} />
                        )}
                      </div>
                    </div>
                    <div className={style.rowTwoOffersDataBoxCenter}>
                      <img src={data.image} alt="img" />
                    </div>
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
            <button className={style.allProductsBtn}>View All Products</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
