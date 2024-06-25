import React, { useEffect, useState } from "react"
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

  const [offersdataCart, setOffersDataCart] = useState()
  const [offersData, setOffersData] = useState(data)
  const [bestSellingData, setBestSellingData] = useState(
    bestSellingProductsData
  )
  const [exploreOurProductsData, setExploreOurProductsData] =
    useState(exploreOurProducts)

  const [totalCarts, setTotalCarts] = useState([])

  //CART PAGE
  const [subTotalCost, setSubTotalCost] = useState()
  const [shippingCost, setShippingCost] = useState(0)
  const [totalCost, setTotalCost] = useState()
  const [quantities, setQuantities] = useState({})
  const [couponCode, setCouponCode] = useState("0")

  // liked items
  const likeBtnClicked = (itemId) => {
    const updatedOffersItems = offersData.map((item) => {
      if (item.id === itemId) {
        item.liked = !item.liked
      }
      return item
    })
    setOffersData(updatedOffersItems)

    const updateBestSellingProducts = bestSellingData.map((item) => {
      if (item.id === itemId) {
        item.liked = !item.liked
      }
      return item
    })
    setBestSellingData(updateBestSellingProducts)

    const updateExploreOurProducts = exploreOurProducts.map((item) => {
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
    const deleteOffersData = offersData.map((item) => {
      if (item.id === itemId) {
        item.liked = false
      }
      return item
    })
    setOffersData(deleteOffersData)

    const deleteBestSellingProducts = bestSellingData.map((item) => {
      if (item.id === itemId) {
        item.liked = false
      }
      return item
    })
    setBestSellingData(deleteBestSellingProducts)

    const deleteExploreOurProducts = exploreOurProducts.map((item) => {
      if (item.id === itemId) {
        item.liked = false
      }
      return item
    })
    setExploreOurProductsData(deleteExploreOurProducts)

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

  // Add to Cart
  const addToCartBtnClicked = (itemId) => {
    const updatedOffersItemsCart = offersData.map((item) => {
      if (item.id === itemId) {
        item.addToCart = !item.addToCart
      }
      return item
    })
    setOffersData(updatedOffersItemsCart)

    const updateBestSellingProductsCart = bestSellingData.map((item) => {
      if (item.id === itemId) {
        item.addToCart = !item.addToCart
      }
      return item
    })
    setBestSellingData(updateBestSellingProductsCart)

    const updateExploreOurProducts = exploreOurProducts.map((item) => {
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

  const moveAllToCart = (itemId) => {
    const addToCarts = offersData.map((item) => {
      if (item.liked) {
        item.addToCart = true
      }
      return item
    })
    setOffersData(addToCarts)

    const addToCartsBestSelling = bestSellingData.map((item) => {
      if (item.liked && !item.addToCart) {
        item.addToCart = true
      }
      return item
    })
    setBestSellingData(addToCartsBestSelling)

    const addToCartsExplore = exploreOurProducts.map((item) => {
      if (item.liked && !item.addToCart) {
        item.addToCart = true
      }
      return item
    })
    setExploreOurProductsData(addToCartsExplore)

    const likedItemIds = [
      ...offersData,
      ...bestSellingData,
      ...exploreOurProducts,
    ]
      .filter((item) => item.liked)
      .map((item) => item.id)

    setAddtoCart((prevState) => {
      const updatedCart = { ...prevState }
      likedItemIds.forEach((itemId) => {
        updatedCart[itemId] = true
      })
      return updatedCart
    })
  }

  //Remove from cart
  const removeAddToCart = (itemId) => {
    const deleteOffersDataFromCart = offersData.map((item) => {
      if (item.id === itemId) {
        item.addToCart = false
      }
      return item
    })
    setOffersData(deleteOffersDataFromCart)

    const deleteBestSellingProductsFromCart = bestSellingData.map((item) => {
      if (item.id === itemId) {
        item.addToCart = false
      }
      return item
    })
    setBestSellingData(deleteBestSellingProductsFromCart)

    const deleteExploreOurProductsFromCart = exploreOurProducts.map((item) => {
      if (item.id === itemId) {
        item.addToCart = false
      }
      return item
    })
    setExploreOurProductsData(deleteExploreOurProductsFromCart)

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

  //CART PAGE
  //Cart total box
  useEffect(() => {
    const calcuateTotal = () => {
      let subtotal = 0
      totalCarts.forEach((data) => {
        const quantaties = quantities[data.id] || 1
        subtotal += data.dc * quantaties
      })
      setSubTotalCost(subtotal)
    }
    calcuateTotal()

    if (subTotalCost < 500) {
      setShippingCost(90)
    } else {
      setShippingCost(0)
    }
    setTotalCost(subTotalCost + shippingCost - Number(couponCode))
  }, [totalCarts, quantities, subTotalCost, shippingCost, couponCode])

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
        moveAllToCart,
        removeAddToCart,
        totalCarts,
        setTotalCarts,
        offersdataCart,
        setOffersDataCart,
        subTotalCost,
        setSubTotalCost,
        totalCost,
        setTotalCost,
        shippingCost,
        setShippingCost,
        quantities,
        setQuantities,
        couponCode,
        setCouponCode,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppStore
