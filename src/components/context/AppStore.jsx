import React, { useMemo, useCallback,useEffect } from "react";
import { useState, useRef } from "react";
import AppContext from "./AppContext";
import { jwtDecode } from "jwt-decode";

const AppStore = (props) => {
  const buttonRef = useRef();
  const [likedItems, setLikedItems] = useState({});
  const [addtoCart, setAddtoCart] = useState({});
  const [likeItemsIdArray, setLikeItemsIdArray] = useState([]);
  const [decoded, setDecoded] = useState("");
  const [decodedName, setDecodedName] = useState("");

  const likedItemsSent = useMemo(
    () => Object.keys(likedItems).filter((key) => likedItems[key]).length,
    [likedItems]
  );
  const likeBtnClicked = useCallback((key) => {
    setLikedItems((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
    setLikeItemsIdArray((pstate) => [...pstate, key]);
  }, []);
  const addToCartBtnClicked = useCallback((key) => {
    setAddtoCart((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  }, []);

  const addtoCartSent = useMemo(
    () => Object.keys(addtoCart).filter((key) => addtoCart[key]).length,
    [addtoCart]
  );
  let arr = [...likeItemsIdArray, likeItemsIdArray];

  function loginClicked(credentialResponse) {
    let decode = jwtDecode(credentialResponse.credential);
    var userName = decode.name;
    setDecoded(userName);
  }
  useEffect(() => {
    setDecodedName(decoded);
    if (decodedName) {
      setDecoded((decodedName) => decodedName);
      // navigate("/");
    }
  }, [decoded, decodedName]);
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
        likeItemsIdArray,
        setLikeItemsIdArray,
        arr,
        decoded,
        setDecoded,
        decodedName,
        setDecodedName,
        loginClicked
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppStore;
