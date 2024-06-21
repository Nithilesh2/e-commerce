import React, { useEffect } from "react"
import { useState } from "react"
import AppContext from "./AppContext"
import { jwtDecode } from "jwt-decode"

import data from "../json/offerItemsData.json"
import bestSellingProductsData from "../json/bestSellingProducts.json"
import exploreOurProducts from "../json/exploreOurProducts.json"

const AppStore = (props) => {
  const [likedItems, setLikedItems] = useState({})
  const [likedItemsSent, setLikedItemsSent] = useState()

  const [addtoCart, setAddtoCart] = useState({})
  const [addtoCartSent, setaddtoCartSent] = useState()

  const [decoded, setDecoded] = useState("")
  const [decodedName, setDecodedName] = useState("")

  const [offersData, setOffersData] = useState(data)
  const [bestSellingData, setBestSellingData] = useState(
    bestSellingProductsData
  )
  const [exploreOurProductsData, setExploreOurProductsData] =
    useState(exploreOurProducts)

  //liked items
  const likeBtnClicked = (itemId) => {
    const updatedOffersItems = offersData.filter((item) => {
      if (item.id === itemId) {
        item.liked = !item.liked
      }
      return item
    })
    setOffersData(updatedOffersItems)

    const updateBestSellingProducts = bestSellingData.filter((item) => {
      if (item.id === itemId) {
        item.liked = !item.liked
      }
      return item
    })
    setBestSellingData(updateBestSellingProducts)

    const updateExploreOurProducts = exploreOurProducts.filter((item) => {
      if (item.id === itemId) {
        item.liked = !item.liked
      }
      return item
    })
    setExploreOurProductsData(updateExploreOurProducts)

    setLikedItems((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }))
  }

  const deleteBtnClicked = (itemId) => {
    const deleteOffersData = offersData.filter((item) => {
      if (item.id === itemId) {
        item.liked = false
      }
      return item
    })
    setOffersData(deleteOffersData)

    const deleteBestSellingProducts = bestSellingData.filter((item) => {
      if (item.id === itemId) {
        item.liked = false
      }
      return item
    })
    setBestSellingData(deleteBestSellingProducts)

    const deletexploreOurProducts = exploreOurProducts.filter((item) => {
      if (item.id === itemId) {
        item.liked = false
      }
      return item
    })
    setExploreOurProductsData(deletexploreOurProducts)

    setLikedItems((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }))
  }

  useEffect(() => {
    setLikedItemsSent(
      Object.keys(likedItems).filter((key) => likedItems[key]).length
    )
  }, [likedItems])

  //Add to Cart
  const addToCartBtnClicked = (itemId) => {
    const updatedOffersItemsCart = offersData.filter((item) => {
      if (item.id === itemId) {
        item.addToCart = !item.addToCart
      }
      return item
    })
    setOffersData(updatedOffersItemsCart)

    const updateBestSellingProductsCart = bestSellingData.filter((item) => {
      if (item.id === itemId) {
        item.addToCart = !item.addToCart
      }
      return item
    })
    setBestSellingData(updateBestSellingProductsCart)

    const updateExploreOurProducts = exploreOurProducts.filter((item) => {
      if (item.id === itemId) {
        item.addToCart = !item.addToCart
      }
      return item
    })
    setExploreOurProductsData(updateExploreOurProducts)

    setAddtoCart((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }))
  }
  useEffect(() => {
    setaddtoCartSent(
      Object.keys(addtoCart).filter((key) => addtoCart[key]).length
    )
  }, [addtoCart])

  function loginClicked(credentialResponse) {
    let decode = jwtDecode(credentialResponse.credential)
    var userName = decode.name
    setDecoded(userName)
  }
  useEffect(() => {
    setDecodedName(decoded)
    if (decodedName) {
      setDecoded((decodedName) => decodedName)
      // navigate("/");
    }
  }, [decoded, decodedName])
  return (
    <AppContext.Provider
      value={{
        likedItems,
        setLikedItems,
        likeBtnClicked,
        setLikedItemsSent,
        likedItemsSent,
        addToCartBtnClicked,
        addtoCart,
        setAddtoCart,
        addtoCartSent,
        setaddtoCartSent,
        decoded,
        setDecoded,
        decodedName,
        setDecodedName,
        loginClicked,
        offersData,
        setBestSellingData,
        bestSellingData,
        exploreOurProductsData,
        deleteBtnClicked,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppStore
