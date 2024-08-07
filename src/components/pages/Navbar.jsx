import React, { useEffect, useState, useContext } from "react"
import style from "../css/NavBar.module.css"
import { useNavigate } from "react-router-dom"
import AppContext from "../context/AppContext"

import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineShopping,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineCloseCircle,
  AiOutlineStar,
  AiOutlineLogout,
} from "react-icons/ai"
import Cookies from "js-cookie"

const Navbar = (props) => {
  const { likedItemsSent, addtoCartSent } = useContext(AppContext)

  const navigate = useNavigate()
  const [menuToggle, setMenuToggle] = useState(false)
  const [activePage, setActivePage] = useState("")
  const [popOver, setPopOver] = useState(false)
  const [cookieActive, setCookieActive] = useState(false)

  function menuClicked() {
    setMenuToggle(!menuToggle)
    if (menuToggle === false) {
      setPopOver(false)
    }
  }
  function popOverClicked() {
    setPopOver(!popOver)
  }
  useEffect(() => {
    if (props.showbar) {
      setActivePage(props.showbar)
    }
  }, [props.showbar])

  const myaccount = () => {
    navigate("/myaccount")
  }
  const logout = () => {
    Cookies.remove("name")
    navigate("/login")
  }
  const cookieLogout = ()=>{
    Cookies.remove("name")
    navigate("/login")
  }
  const orders = () => {
    navigate("/orders")
  }

  useEffect(() => {
    const updateCookies = () => {
      const cookie = Cookies.get("name")
      setCookieActive(!!cookie)
    }
    updateCookies()
    const time = setInterval(() => {
      updateCookies()
    }, 1000)
    return () => clearInterval(time)
  }, [])

  return (
    <>
      <main className={style.main}>
        <nav className={style.navbar}>
          <div
            className={style.left}
            onClick={() => {
              navigate("/")
            }}
          >
            Exclusive
          </div>
          <div className={style.outerright}>
            <div className={menuToggle ? style.centerActive : style.center}>
              <div className={style.boxActive}>
                <ul className={style.navItems}>
                  <li
                    className={activePage === "home" ? style.active : ""}
                    onClick={() => {
                      navigate("/")
                    }}
                  >
                    Home
                  </li>
                  <li
                    className={activePage === "contact" ? style.active : ""}
                    onClick={() => {
                      navigate("/contact")
                    }}
                  >
                    Contact
                  </li>
                  <li
                    className={activePage === "about" ? style.active : ""}
                    onClick={() => {
                      navigate("/about")
                    }}
                  >
                    About
                  </li>
                  {cookieActive ? (
                    <li onClick={cookieLogout}>Logout</li>
                  ) : (
                    <li
                      className={activePage === "login" ? style.active : ""}
                      onClick={() => {
                        navigate("/login")
                      }}
                    >
                      Login
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className={style.search}>
              <form className={style.form}>
                <input
                  className={style.input}
                  type="search"
                  placeholder="What you looking for..."
                />
                <button type="submit" className={style.button}>
                  <AiOutlineSearch className={style.searchButton} />
                </button>
              </form>
            </div>
            <div className={menuToggle ? style.rightActive : style.right}>
              <div
                className={style.like}
                title="saved"
                onClick={() => {
                  navigate("/wishlist")
                }}
              >
                <div className={style.addedItemsHeart}>{likedItemsSent}</div>
                <AiOutlineHeart className={style.heart} />
              </div>
              <div
                className={style.cartBox}
                title="cart"
                onClick={() => {
                  navigate("/cart")
                }}
              >
                <div className={style.addedItems}>{addtoCartSent}</div>
                <AiOutlineShoppingCart className={style.cart} />
              </div>
              <div
                className={style.userBox}
                title="my profile"
                onClick={popOverClicked}
              >
                <AiOutlineUser className={style.user} />
                <div
                  className={
                    popOver ? style.popupBoxActive : style.popupBoxDeActive
                  }
                >
                  <ul className={style.popupDataActive}>
                    <li title="account" onClick={myaccount}>
                      <AiOutlineUser />
                      <span>Manage My Account</span>
                    </li>
                    <li title="orders" onClick={orders}>
                      <AiOutlineShopping />
                      <span>My Order</span>
                    </li>
                    <li title="canceled">
                      <AiOutlineCloseCircle />
                      <span>My Cancellations</span>
                    </li>
                    <li title="reviews">
                      <AiOutlineStar />
                      <span>My Reviews</span>
                    </li>
                    <li title="" onClick={logout}>
                      <AiOutlineLogout />
                      <span>{cookieActive ? "Logout" : "Sign In"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={style.toggle} onClick={menuClicked}>
              {menuToggle ? (
                <AiOutlineClose className={style.close} />
              ) : (
                <AiOutlineMenu className={style.menu} />
              )}
            </div>
          </div>
        </nav>
      </main>
    </>
  )
}

export default Navbar
