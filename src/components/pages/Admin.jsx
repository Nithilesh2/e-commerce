import React from "react"
import styles from "../css/Admin.module.css"

const Admin = () => {
  return (
    <>
      <div className={styles.main}>
        <nav className={styles.navbar}>
          <div className={styles.left}>
            <div className={styles.leftLogo}>Exclusive</div>
            <ul className={styles.leftItems}>
              <li className={styles.leftItemsData}>Dashboard</li>
              <li className={styles.leftItemsData}>
                Products
                <ul className={styles.leftProducts}>
                  <li>Insert Product</li>
                  <li>View Products</li>
                </ul>
              </li>
              <li className={styles.leftItemsData}>
                Slider
                <ul className={styles.leftSlider}>
                  <li>Insert Slider</li>
                  <li>View Slider</li>
                </ul>
              </li>
              <li className={styles.leftItemsData}>Customer Details</li>
              <li className={styles.leftItemsData}>View Payments</li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Admin
