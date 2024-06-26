import React from "react"
import TopHeader from "./TopHeader"
import Navbar from "./Navbar"
import Footer from "./Footer"
import style from "../css/Orders.module.css"
import { useNavigate } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"

const Orders = () => {
  const navigate = useNavigate()
  return (
    <>
      <ScrollToTop />
      <TopHeader />
      <Navbar />
      <hr />
      <div className={style.ordersMain}>
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
            className={style.myAccount}
            onClick={() => navigate("/myaccount")}
          >
            My Profile
          </span>
          <span className={style.slash}>/</span>
          <span className={style.myOrders}>My Orders</span>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Orders
