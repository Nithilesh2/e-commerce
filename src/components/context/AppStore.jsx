import React, { useEffect } from "react";
import { useState, useRef } from "react";
import AppContext from "./AppContext";

const AppStore = (props) => {
  const buttonRef = useRef();
  const [likedItems, setLikedItems] = useState({});
  const [likedItemsSent, setLikedItemsSent] = useState({});
  const [addtoCart, setAddtoCart] = useState({});
  const [addtoCartSent, setaddtoCartSent] = useState();

  const likeBtnClicked = (key) => {
    setLikedItems((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  useEffect(() => {
    setLikedItemsSent(
      Object.keys(likedItems).filter((key) => likedItems[key]).length
    );
  }, [likedItems]);

  const addToCartBtnClicked = (key) => {
    setAddtoCart((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  useEffect(() => {
    setaddtoCartSent(
      Object.keys(addtoCart).filter((key) => addtoCart[key]).length
    );
  }, [addtoCart]);

  return (
    <AppContext.Provider
      value={{
        buttonRef,
        likedItems,
        setLikedItems,
        likeBtnClicked,
        likedItemsSent,
        setLikedItemsSent,
        addToCartBtnClicked,
        addtoCart,
        setAddtoCart,
        addtoCartSent,
        setaddtoCartSent,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppStore;
