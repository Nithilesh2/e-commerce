import React, { useEffect, useRef, useState } from "react"
import style from "../css/About.module.css"
import TopHeader from "./TopHeader"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom"
import Trust from "./Trust"
import {
  AiOutlineDollarCircle,
  AiOutlineMoneyCollect,
  AiOutlineShop,
  AiOutlineShopping,
} from "react-icons/ai"
import ClickToTop from "./ClickToTop"
import MultiCarousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import LoadingBar from "react-top-loading-bar"
import ScrollToTop from "./ScrollToTop"

const About = () => {
  const [skeletonLoading, setSkeletonLoading] = useState(true)

  const responsiveRowThree = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 6.5,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1680 },
      items: 6.5,
    },
    tablet: {
      breakpoint: { max: 1680, min: 1400 },
      items: 5.5,
    },
    tablet2: {
      breakpoint: { max: 1400, min: 1130 },
      items: 4.5,
    },
    mobile: {
      breakpoint: { max: 1300, min: 880 },
      items: 3.5,
    },
    mobile2: {
      breakpoint: { max: 880, min: 650 },
      items: 2.5,
    },
    mobile3: {
      breakpoint: { max: 650, min: 0 },
      items: 1.5,
    },
  }
  const navigate = useNavigate()

  useEffect(() => {
    const randomTimeValue = Math.floor(Math.random() * 8) + 4
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
  return (
    <>
      <ScrollToTop />
      <TopHeader />
      <Navbar showbar="about" />
      {skeletonLoading ? (
        <div className={style.skele}>
          <div>
            <LoadingBar color="#00BFFF" ref={ref} shadow={true} />
          </div>
        </div>
      ) : (
        <div className={style.myAccountMain}>
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
            <span className={style.myAccount}>My Account</span>
          </div>
          <div className={style.bottom}>
            <div className={style.bottomOne}>
              <div className={style.bottomOneLeft}>
                <div className={style.bottomOneLeftOurStory}>Our Story</div>
                <div className={style.bottomOneLeftParaGraphs}>
                  <p className={style.bottomOneLeftParaGraphsParaOne}>
                    Launced in 2015, Exclusive is South Asia's premier online
                    shopping makterplace with an active presense in Bangladesh.
                    Supported by wide range of tailored marketing, data and
                    service solutions, Exclusive has 10,500 sallers and 300
                    brands and serves 3 millioons customers across the region.
                  </p>
                  <p className={style.bottomOneLeftParaGraphsParaTwo}>
                    Exclusive has more than 1 Million products to offer, growing
                    at a very fast. Exclusive offers a diverse assotment in
                    categories ranging from consumer
                  </p>
                </div>
              </div>
              <div className={style.bottomOneRight}>
                <img
                  src="https://i.pinimg.com/736x/b6/29/1a/b6291a989fd66cbd431fade83ffc0a79.jpg"
                  alt="Two Ladies"
                  className={style.bottomOneRightImage}
                />
              </div>
            </div>
            <div className={style.bottomTwo}>
              <MultiCarousel
                responsive={responsiveRowThree}
                className={style.multiCarousal}
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                arrows={false}
              >
                <div className={style.rowTwoDataBoxes}>
                  <div className={style.rowThreeDataBoxIcon}>
                    <div className={style.outerCircle}>
                      <div className={style.innerCircle}>
                        <AiOutlineShop className={style.icons} />
                      </div>
                    </div>
                  </div>
                  <div className={style.rowTwoDataBoxNames}>
                    <div className={style.top}>10.5K</div>
                    <div className={style.bottom}>Sellers active our site</div>
                  </div>
                </div>
                <div className={style.rowTwoDataBoxes}>
                  <div className={style.rowThreeDataBoxIcons}>
                    <div className={style.outerCircle}>
                      <div className={style.innerCircle}>
                        <AiOutlineDollarCircle className={style.icons} />
                      </div>
                    </div>
                  </div>
                  <div className={style.rowTwoDataBoxNames}>
                    <div className={style.top}>33K</div>
                    <div className={style.bottom}>Monthly product sale</div>
                  </div>
                </div>
                <div className={style.rowTwoDataBoxes}>
                  <div className={style.rowThreeDataBoxIcons}>
                    <div className={style.outerCircle}>
                      <div className={style.innerCircle}>
                        <AiOutlineShopping className={style.icons} />
                      </div>
                    </div>
                  </div>
                  <div className={style.rowTwoDataBoxNames}>
                    <div className={style.top}>45.5K</div>
                    <div className={style.bottom}>
                      Customer active in our site
                    </div>
                  </div>
                </div>
                <div className={style.rowTwoDataBoxes}>
                  <div className={style.rowThreeDataBoxIcons}>
                    <div className={style.outerCircle}>
                      <div className={style.innerCircle}>
                        <AiOutlineMoneyCollect className={style.icons} />
                      </div>
                    </div>
                  </div>
                  <div className={style.rowTwoDataBoxNames}>
                    <div className={style.top}>25K</div>
                    <div className={style.bottom}>
                      Annal gross sale in our site
                    </div>
                  </div>
                </div>
              </MultiCarousel>
            </div>
            <div className={style.bottomFour}>
              <Trust />
            </div>
          </div>
        </div>
      )}
      <ClickToTop />
      <Footer />
    </>
  )
}

export default About
