import React from "react";
import style from "../css/Home.module.css";
import {
  AiOutlineCustomerService,
  AiOutlineSafetyCertificate,
  AiOutlineTruck,
} from "react-icons/ai";

const Trust = () => {
  return (
    <>
      <div className={style.rowSevenFirstBox}>
        <div className={style.top}>
          <div className={style.outerCircle}>
            <div className={style.innerCircle}>
              <AiOutlineTruck />
            </div>
          </div>
        </div>
        <div className={style.center}>Free And Fast Delivery</div>
        <div className={style.bottom}>
          Free delivery for all orders over ₹2,000
        </div>
      </div>
      <div className={style.rowSevenSecondBox}>
        <div className={style.top}>
          <div className={style.outerCircle}>
            <div className={style.innerCircle}>
              <AiOutlineCustomerService />
            </div>
          </div>
        </div>
        <div className={style.center}>24/7 Customer Service</div>
        <div className={style.bottom}>Friendly 24/7 customer support</div>
      </div>
      <div className={style.rowSevenThirdBox}>
        <div className={style.top}>
          <div className={style.outerCircle}>
            <div className={style.innerCircle}>
              <AiOutlineSafetyCertificate />
            </div>
          </div>
        </div>
        <div className={style.center}>Money Back Guarantee</div>
        <div className={style.bottom}>We return money in 30 days</div>
      </div>
    </>
  );
};

export default Trust;
