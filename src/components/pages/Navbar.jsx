import React, { useState } from "react";
import style from "../css/NavBar.module.css";
import {
  AiFillHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineUser,
} from "react-icons/ai";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  function menuClicked() {
    setMenuToggle(!menuToggle);
  }

  return (
    <>
      <main className={style.main}>
        <nav className={style.navbar}>
          <div className={style.left}>Exclusive</div>
          <div className={style.outerright}>
            <div className={menuToggle ? style.centerActive : style.center}>
              <ul className={style.navItems}>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
              </ul>
            </div>
            <div className={style.search}>
              <input
                type="search"
                title="search"
                placeholder="What you looking for?"
                className={style.input}
              />
            </div>
            <div className={menuToggle ? style.rightActive : style.right}>
              <div className={style.like}>
                <AiFillHeart className={style.heart} />
              </div>
              <div className={style.cartBox}>
                <AiOutlineShoppingCart className={style.cart} />
              </div>
              <div className={style.userBox}>
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
