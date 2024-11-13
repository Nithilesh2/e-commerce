import React, { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import styles from "../css/Admin.module.css"
import {  FaBoxOpen,FaTags, FaUsers } from 'react-icons/fa';

const Admin = () => {
  const [productsToggle, setProductsToggle] = useState(false)
  const [sliderToggle, setSliderToggle] = useState(false)

  return (
    <>
      <div className={styles.main}>
        <nav className={styles.navbar}>
          <div className={styles.leftLogo}>Exclusive</div>
        </nav>
        <div className={styles.adminPage}>
          <div className={styles.left}>
            <ul className={styles.leftItems}>
              <li className={styles.leftItemsData}>Dashboard</li>
              <li className={styles.leftItemsData}>
                <span onClick={() => setProductsToggle(!productsToggle)}>
                  Products
                  <IoIosArrowDown />
                </span>
                {productsToggle ? (
                  <ul className={styles.leftProducts}>
                    <li>Insert Product</li>
                    <li>View Products</li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className={styles.leftItemsData}>
                <span onClick={() => setSliderToggle(!sliderToggle)}>
                  Slider
                  <IoIosArrowDown />
                </span>
                {sliderToggle ? (
                  <ul className={styles.leftSlider}>
                    <li>Insert Slider</li>
                    <li>View Slider</li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className={styles.leftItemsData}>Customer Details</li>
              <li className={styles.leftItemsData}>View Payments</li>
            </ul>
          </div>
          <div className={styles.vlineAfter} />
          <div className={styles.right}>
            <h4 className={styles.header}>Dashboard</h4>
            <div className={styles.rowOne}>
              <div className={styles.orders}>
                <div className={styles.rleft}>
                <FaBoxOpen className={styles.rowOneIcons}/>
                </div>
                <div className={styles.rright}>
                  <h4>Orders</h4>
                  <h3>12,500</h3>
                </div>
              </div>
              <div className={styles.customers}>
                <div className={styles.rleft}>
                  <FaUsers className={styles.rowOneIcons}/>
                </div>
                <div className={styles.rright}>
                  <h4>Customers</h4>
                  <h3>5,000</h3>
                </div>
              </div>
              <div className={styles.products}>
                <div className={styles.rleft}>
                  <FaTags className={styles.rowOneIcons}/>
                </div>
                <div className={styles.rright}>
                  <h4>Products</h4>
                  <h3>30,000</h3>
                </div>
              </div>
            </div>
            <div className={styles.rowTwo}>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin
