import React, { useEffect, useState, useContext } from "react";
import style from "../css/NavBar.module.css";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

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
} from "react-icons/ai";

const Navbar = (props) => {
  const { likedItemsSent, addtoCartSent } = useContext(AppContext);
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState(false);
  const [activePage, setActivePage] = useState("");
  const [popOver, setPopOver] = useState(false);
  function menuClicked() {
    setMenuToggle(!menuToggle);
  }
  function popOverClicked() {
    setPopOver(!popOver);
    // navigate("/myaccount");
  }
  useEffect(() => {
    if (props.showbar) {
      setActivePage(props.showbar);
    }
  }, [props.showbar]);

  const myaccount = () => {
    navigate("/myaccount");
  };
  const logout = () => {
    navigate("/");
  };
  return (
    <>
      <main className={style.main}>
        <nav className={style.navbar}>
          <div className={style.left}>Exclusive</div>
          <div className={style.outerright}>
            <div className={menuToggle ? style.centerActive : style.center}>
              <ul className={style.navItems}>
                <li
                  className={activePage === "home" ? style.active : ""}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </li>
                <li
                  className={activePage === "contact" ? style.active : ""}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Contact
                </li>
                <li
                  className={activePage === "about" ? style.active : ""}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  About
                </li>
                <li
                  className={activePage === "signup" ? style.active : ""}
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Sign Up
                </li>
              </ul>
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
                  navigate("/wishlist");
                }}
              >
                <div className={style.addedItemsHeart}>{likedItemsSent}</div>
                <AiOutlineHeart className={style.heart} />
              </div>
              <div className={style.cartBox} title="cart">
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
                    <li title="orders">
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
                    <li title="logout" onClick={logout}>
                      <AiOutlineLogout />
                      <span>Logout</span>
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
  );
};

export default Navbar;
