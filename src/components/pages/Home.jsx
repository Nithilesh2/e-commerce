import React from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import style from "../css/Home.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import data from "../json/offerItemsData.json";
import { AiOutlineHeart } from "react-icons/ai";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <TopHeader />
      <Navbar showbar="home" />
      <hr />
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
        <div className={style.todaySpecialOffers}>Today's</div>
        <div className={style.flashSalesBox}>
          <div className={style.flashSales}>Flash Sales</div>
          <div className={style.offerTimePeriod}>
            <span className={style.days}>
              <div className={style.daysShowDays}>Days</div>
              <div className={style.daysShowNumber}>03</div>
            </span>
            :
            <span className={style.hours}>
              <div className={style.daysShowDays}>Hours</div>
              <div className={style.daysShowNumber}>23</div>
            </span>
            :
            <span className={style.minutes}>
              <div className={style.daysShowDays}>Minutes</div>
              <div className={style.daysShowNumber}>23</div>
            </span>
            :
            <span className={style.seconds}>
              <div className={style.daysShowDays}>Seconds</div>
              <div className={style.daysShowNumber}>03</div>
            </span>
          </div>
        </div>
        <div className={style.todaySpecialOffersItems}>
          <MultiCarousel
            responsive={responsive}
            className={style.multiCarousal}
          >
            {/* {data.map((data, key) => (
              <div key={key} className={style.rowTwoOffersData}>

              </div>
            ))} */}
            <div className={style.rowTwoOffersData}>
              <div className={style.rowTwoOffersDataBox}>
                <div className={style.rowTwoOffersDataBoxTop}>
                  <div className={style.rowTwoOffersDataBoxTopDiscount}>
                    -40%
                  </div>
                  <div className={style.rowTwoOffersDataBoxTopLike}>
                    <AiOutlineHeart />
                  </div>
                </div>
                <div className={style.rowTwoOffersDataBoxCenter}>
                  <img
                    src="https://m.media-amazon.com/images/I/31JTPECqm-L._SX300_SY300_QL70_FMwebp_.jpg"
                    alt="img"
                  />
                </div>
                <div className={style.rowTwoOffersDataBoxBottom}>
                  <div className={style.rowTwoOffersDataBoxBottomName}>
                    OnePlus Pad 29.49cm (11.61 inch)
                  </div>
                  <div className={style.rowTwoOffersDataBoxBottomCost}>
                    <span
                      className={style.rowTwoOffersDataBoxBottomCostDiscount}
                    >
                      ₹35,150
                    </span>
                    <span
                      className={style.rowTwoOffersDataBoxBottomCostOriginal}
                    >
                      ₹37,999
                    </span>
                  </div>
                </div>
                <button className={style.allProductsBtn}>
                  View All Products
                </button>
              </div>
            </div>
          </MultiCarousel>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
