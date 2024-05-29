import React from "react";
import style from "../css/TopHeader.module.css";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <>
      <main className={style.main}>
        <div className={style.discount}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link to={"/"}>
            <span className={style.shopNow}> ShopNow</span>
          </Link>
        </div>
        <div className={style.language}>
          <select className={style.select}>
            <option defaultValue="">English</option>
            <option>Telugu</option>
            <option>Tamil</option>
            <option>Hindi</option>
            <option>Kannada</option>
            <option>Malyalam</option>
          </select>
        </div>
      </main>
    </>
  );
};

export default TopHeader;
