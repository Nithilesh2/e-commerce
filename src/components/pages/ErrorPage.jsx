import React from "react"
import style from "../css/ErrorPage.module.css"
import { useNavigate } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"

const ErrorPage = () => {
  const navigate = useNavigate()
  
  return (
    <>
      <ScrollToTop />

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
      
    </>
  )
}

export default ErrorPage
