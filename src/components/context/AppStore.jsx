import React, { useEffect } from "react";
import { useState, useRef } from "react";
import AppContext from "./AppContext";

const AppStore = (props) => {
  const buttonRef = useRef();
  const [likedItems, setLikedItems] = useState({});
  const [likedItemsSent, setLikedItemsSent] = useState({});
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
  useEffect(() => {
    setLikedItemsSent((prevState) => ({ ...prevState, likedItems }));
  }, [likedItems]);
  return (
    <AppContext.Provider
      value={{
        buttonRef,
        likedItems,
        setLikedItems,
        likeBtnClicked,
        likedItemsSent,
        setLikedItemsSent,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppStore;
