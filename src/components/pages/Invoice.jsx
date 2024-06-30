import React, { useContext, useEffect } from "react"
import style from "../css/Invoice.module.css"
import AppContext from "../context/AppContext"
import { useNavigate } from "react-router-dom"

const Invoice = () => {
  const date = new Date()

  const { subTotalCost, totalCost, totalCarts, quantities } =
    useContext(AppContext)
  const getNextDatesFormatted = (startDate, daysInterval) => {
    const dates = []
    let currentDate = new Date(startDate)

    for (let i = 0; i < 2; i++) {
      const nextDate = new Date(currentDate)
      const formattedDate = `${nextDate.getDate()}/${nextDate.getMonth()}/${nextDate.getFullYear()}`
      dates.push(formattedDate)
      currentDate.setDate(currentDate.getDate() + daysInterval)
    }

    return dates
  }

  const dates = getNextDatesFormatted(date, 15)

  const navigate = useNavigate()

  const taxCost = subTotalCost * 0.05
  const totCost = taxCost + totalCost

  useEffect(() => {
    if (window.innerWidth < 400) {
      alert(
        "For detailed information about the purchased product, please download or print the invoice."
      )
    }
  }, [])

  return (
    <>
      <div className={style.invoiceMain}>
        <div className={style.topLeft}>
          <button
            className={style.home}
            onClick={() => {
              navigate("/")
            }}
          >
            Home
          </button>
        </div>
        <div className={style.invoiceMainBox}>
          <div className={style.top}>
            <div className={style.topOne}>Invoice</div>
            <div className={style.topTwo}>
              <div className={style.topTwoLeft}>
                <p>Payable ₹{totCost}</p>
                <p>Dues :{dates[1]}</p>
                <p>
                  Issued :
                  {date.getDate() +
                    "/" +
                    date.getMonth() +
                    "/" +
                    date.getFullYear()}
                </p>
                <p>Ref. #INV-057</p>
              </div>
              <div className={style.topTwoCenter}>
                <p>Billed to</p>
                <p>Company Name</p>
                <p>Company address</p>
                <p>City, Country - 000000</p>
                <p>+0 (000) 123-4567</p>
              </div>
              <div className={style.topTwoRight}>
                <p>From</p>
                <p>Panda, Inc</p>
                <p>Business address</p>
                <p>City, State, IN - 000 000</p>
                <p>TAX iD 00XXXXX1234X0XX</p>
              </div>
            </div>
            <div className={style.topThree}>
              <div className={style.topThreeBox}>
                <table className={style.topThreeTable}>
                  <thead>
                    <tr>
                      <th>ITEM DESCRIPTION</th>
                      <th>QTY</th>
                      <th>ORIGINAL COST</th>
                      <th>DISCOUNT COST</th>
                    </tr>
                  </thead>
                  <tbody>
                    {totalCarts.map((data) => (
                      <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{quantities[data.id] || 1}</td>
                        <td>{data.originalCost}.00</td>
                        <td>{data.discountCost}.00</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={3}>SubTotal</td>
                      <td className={style.subTotalRow}>₹{subTotalCost}.00</td>
                    </tr>
                    <tr>
                      <td colSpan={3}>Tax (5%)</td>
                      <td>₹{taxCost}</td>
                    </tr>
                    <tr>
                      <td colSpan={3}>Total(INR)</td>
                      <td className={style.totalRow}>₹{totCost}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          <div className={style.bottom}>
            <div className={style.bottomOne}>
              <div className={style.line}></div>
              <div className={style.bottomOnePaymentDetails}>
                <p>Payment details</p>
                <p>Please pay within 15 days</p>
                <p>of receiving this invoice</p>
              </div>
              <div className={style.bottomOneBank}>
                <p>Bank Name</p>
                <p>IFSC</p>
                <p>Swift code</p>
                <p>Account #</p>
              </div>
              <div className={style.bottomOneBankName}>
                <p>ABCD BANK</p>
                <p>ABCD000XXXX</p>
                <p>ABCDUSBBXX</p>
                <p>7418521 9875428</p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            window.print()
          }}
          className={style.printButton}
        >
          Print
        </button>
      </div>
    </>
  )
}

export default Invoice
