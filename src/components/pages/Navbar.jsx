import React, { useEffect, useState } from "react";
import style from "../css/NavBar.module.css";
import { useNavigate } from "react-router-dom";
import {
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

const Navbar = (props) => {
  const navigate = useNavigate();
  const [menuToggle, setMenuToggle] = useState(false);
  const [activePage, setActivePage] = useState("");
  function menuClicked() {
    setMenuToggle(!menuToggle);
  }
  useEffect(() => {
    if (props.showbar) {
      setActivePage(props.showbar);
    }
  }, [props.showbar]);
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
              <form>
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
              <div className={style.like} title="saved">
                <AiFillHeart className={style.heart} />
              </div>
              <div className={style.cartBox} title="cart">
                <div className={style.addedItems}>1</div>
                <AiOutlineShoppingCart className={style.cart} />
              </div>
              <div className={style.userBox} title="my profile">
                <AiOutlineUser className={style.user} />
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
