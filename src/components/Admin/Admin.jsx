import React, { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import styles from "../Admin/AdminCss/Admin.module.css"
import { FaBoxOpen, FaTags, FaUsers } from "react-icons/fa"
import OrderChart from "../chartJsComponents/OrderChart"
import ProductsChart from "../chartJsComponents/ProductsChart"
import CustomerTrendChart from "../chartJsComponents/CustomerTrendChart"
import {
  FaTachometerAlt,
  FaBox,
  FaPlusCircle,
  FaEye,
  FaSlidersH,
  FaUser,
  FaCreditCard,
} from "react-icons/fa"

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
              <li className={styles.leftItemsData}>
                {" "}
                <FaTachometerAlt />
                Dashboard
              </li>
              <li className={styles.leftItemsData1}>
                <span onClick={() => setProductsToggle(!productsToggle)}>
                  <FaBox />
                  Products
                  <IoIosArrowDown />
                </span>
                {productsToggle ? (
                  <ul className={styles.leftProducts}>
                    <li>
                      <FaPlusCircle />
                      Insert Product
                    </li>
                    <li>
                      <FaEye />
                      View Products
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className={styles.leftItemsData1}>
                <span onClick={() => setSliderToggle(!sliderToggle)}>
                  <FaSlidersH />
                  Slider
                  <IoIosArrowDown />
                </span>
                {sliderToggle ? (
                  <ul className={styles.leftSlider}>
                    <li>
                      <FaPlusCircle />
                      Insert Slider
                    </li>
                    <li>
                      <FaEye />
                      View Slider
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className={styles.leftItemsData}>
                <FaUser />
                Customer Details
              </li>
              <li className={styles.leftItemsData}>
                <FaCreditCard />
                View Payments
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <h4 className={styles.dashboard}>Dashboard</h4>
            <div className={styles.rowOne}>
              <div className={styles.orders}>
                <div className={styles.rleft}>
                  <FaBoxOpen className={styles.rowOneIcons} />
                </div>
                <div className={styles.rright}>
                  <h4 className={styles.ordersText}>Orders</h4>
                  <h3 className={styles.ordersText}>12,500</h3>
                </div>
              </div>
              <div className={styles.customers}>
                <div className={styles.rleft}>
                  <FaUsers className={styles.rowOneIcons} />
                </div>
                <div className={styles.rright}>
                  <h4 className={styles.customersText}>Customers</h4>
                  <h3 className={styles.customersText}>5,000</h3>
                </div>
              </div>
              <div className={styles.products}>
                <div className={styles.rleft}>
                  <FaTags className={styles.rowOneIcons} />
                </div>
                <div className={styles.rright}>
                  <h4 className={styles.productsText}>Products</h4>
                  <h3 className={styles.productsText}>30,000</h3>
                </div>
              </div>
            </div>
            <div className={styles.rowTwo}>
              <div className={styles.rowTwoItems}>
                <CustomerTrendChart />
              </div>
              <div className={styles.rowTwoItems}>
                <ProductsChart />
              </div>
            </div>
            <div className={styles.rowThree}>
              <div className={styles.rowThreeItems}>
                <OrderChart />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rowFour}>
          <h3 className={styles.rowFourLatestOrdersTitle}>Latest Orders</h3>
          <table className={styles.rowFourTable}>
            <thead className={styles.rowFourTHead}>
              <tr>
                <th>Order No.</th>
                <th>Customer email</th>
                <th>Invoice No.</th>
                <th>Products</th>
                <th>QTY</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className={styles.rowFourTBody}>
              <tr>
                <td>1</td>
                <td>xyz@gmail.com</td>
                <td>1245968763</td>
                <td>mouse</td>
                <td>2</td>
                <td>520</td>
                <td>02/05/2024</td>
                <td>Pending</td>
                <td>del</td>
              </tr>
              <tr>
                <td>2</td>
                <td>abc@gmail.com</td>
                <td>9874563215</td>
                <td>keyboard</td>
                <td>1</td>
                <td>1500</td>
                <td>01/15/2024</td>
                <td>Delivered</td>
                <td>del</td>
              </tr>
              <tr>
                <td>3</td>
                <td>ikh@gmail.com</td>
                <td>7531598426</td>
                <td>monitor</td>
                <td>3</td>
                <td>2000</td>
                <td>02/10/2024</td>
                <td>Canceled</td>
                <td>del</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Admin
