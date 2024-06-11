// import { useContext } from "react"
// import AppContext from "../context/AppContext"
import React from "react"
import Navbar from "./Navbar"
import TopHeader from "./TopHeader"
import Footer from "./Footer"
import style from "../css/WishList.module.css"

const WishList = () => {
  // const { likeItemsIdArray, arr } = useContext(AppContext)

  return (
    <>
      <TopHeader />
      <Navbar />
      <div className={style.WishListMain}>
        
      </div>
      <Footer />
    </>
  )
}

export default WishList
