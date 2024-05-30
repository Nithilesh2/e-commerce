import React from "react";
import style from "../css/Home.module.css";

const SideLeftRedColor = (props) => {
  return (
    <>
      <div className={style.todaySpecialOffers}>
        <div className={style.todaySpecialOffersLeft}></div>
        <div className={style.todaySpecialOffersRight}>{props.data}</div>
      </div>
    </>
  );
};

export default SideLeftRedColor;
