import React, { useEffect, useRef, useState } from "react"
import style from "../css/ErrorPage.module.css"
import { useNavigate } from "react-router-dom"
import LoadingBar from "react-top-loading-bar"
import ScrollToTop from "./ScrollToTop"

const ErrorPage = () => {
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

  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.continuousStart()
    }
  }, [])
  return (
    <>
      <ScrollToTop />
      {skeletonLoading ? (
        <div className={style.skele}>
          <div>
            <LoadingBar color="#00BFFF" ref={ref} shadow={true} />
          </div>
        </div>
      ) : (
        <div className={style.errorPageMain}>
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
            <span className={style.myAccount}>404 Error</span>
          </div>
          <div className={style.bottom}>
            <div className={style.bototmTop}>404 Page not Found</div>
            <div className={style.bototmCenter}>
              Hmmm, you visited unknown page
            </div>
            <div className={style.bototmBottom}>
              <button
                type="button"
                className={style.bototmBottomButton}
                onClick={() => {
                  navigate("/")
                }}
              >
                Back to home page
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ErrorPage
