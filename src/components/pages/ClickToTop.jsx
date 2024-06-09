import React, { useEffect, useRef } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import style from "../css/Home.module.css";

const ClickToTop = () => {
    const buttonRef = useRef();
  const listenToScroll = () => {
    if (window.pageYOffset > 99) {
      buttonRef.current.style.opacity = "1";
    } else {
      buttonRef.current.style.opacity = "0";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);
  return (
    <>
      <div className={style.upArrow}>
        <button
          type="button"
          className={style.upArrowBtn}
          ref={buttonRef}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <AiOutlineArrowUp />
        </button>
      </div>
    </>
  );
};

export default ClickToTop;
