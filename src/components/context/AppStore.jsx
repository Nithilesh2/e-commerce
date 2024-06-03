import React, { useMemo, useCallback   } from "react";
import { useState, useRef } from "react";
import AppContext from "./AppContext";

const AppStore = (props) => {
  const buttonRef = useRef();
  const [likedItems, setLikedItems] = useState({});
  // const [likedItemsSent, setLikedItemsSent] = useState({});
  const [addtoCart, setAddtoCart] = useState({});
  // const [addtoCartSent, setaddtoCartSent] = useState();

  // const likeBtnClicked = (key) => {
  //   setLikedItems((prevState) => ({
  //     ...prevState,
  //     [key]: !prevState[key],
  //   }));
  // };
  const likedItemsSent = useMemo(
    () => Object.keys(likedItems).filter((key) => likedItems[key]).length,
    [likedItems]
  );
  const likeBtnClicked = useCallback((key) => {
    setLikedItems((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  }, []);

  const addToCartBtnClicked = useCallback((key) => {
    setAddtoCart((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  }, []);

  // const addToCartBtnClicked = (key) => {
  //   setAddtoCart((prevState) => ({
  //     ...prevState,
  //     [key]: !prevState[key],
  //   }));
  // };
  const addtoCartSent = useMemo(
    () => Object.keys(addtoCart).filter((key) => addtoCart[key]).length,
    [addtoCart]
  );

  return (
    <AppContext.Provider
      value={{
        buttonRef,
        likedItems,
        setLikedItems,
        likeBtnClicked,
        likedItemsSent,
        addToCartBtnClicked,
        addtoCart,
        setAddtoCart,
        addtoCartSent,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppStore;
