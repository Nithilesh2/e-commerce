import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import SignUp from "./components/pages/SignUp"
import Login from "./components/pages/Login"
import Cart from "./components/pages/Cart"
import CheckOut from "./components/pages/CheckOut"
import MyAccount from "./components/pages/ManageMyAccount"
import WishList from "./components/pages/WishList"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import ErrorPage from "./components/pages/ErrorPage"
import Payment from "./components/pages/Payment"
import Orders from "./components/pages/Orders"
import Invoice from "./components/pages/Invoice"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<CheckOut />} />
          <Route path="/cart/checkout/payment" element={<Payment />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
