import React, { Suspense, useEffect, useRef } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./components/pages/SignUp"
import Login from "./components/pages/Login"
import Cart from "./components/pages/Cart"
import CheckOut from "./components/pages/CheckOut"
import Contact from "./components/pages/Contact"
import ErrorPage from "./components/pages/ErrorPage"
import Orders from "./components/pages/Orders"
import Invoice from "./components/pages/Invoice"
import LoadingBar from "react-top-loading-bar"
import Product from "./components/pages/Product"
import Admin from "./components/pages/Admin";

const Home = React.lazy(() => import("./components/pages/Home"))
const Payment = React.lazy(() => import("./components/pages/Payment"))
const MyAccount = React.lazy(() => import("./components/pages/ManageMyAccount"))
const About = React.lazy(() => import("./components/pages/About"))
const WishList = React.lazy(() => import("./components/pages/WishList"))

const App = () => {
  const ref = useRef()
  useEffect(() => {
    if (ref.current) {
      ref.current.continuousStart()
    }
  }, [])
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div>
              <div>
                <LoadingBar color="#00BFFF" ref={ref} shadow={true} />
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/checkout" element={<CheckOut />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart/checkout/payment" element={<Payment />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="*" element={<ErrorPage />} />
            
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
