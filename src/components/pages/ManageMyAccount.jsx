import React, { useContext, useEffect, useRef, useState } from "react"
import style from "../css/ManageMyAccount.module.css"
import { useNavigate } from "react-router-dom"
import { AiOutlineEdit } from "react-icons/ai"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import AppContext from "../context/AppContext"

const TopHeader = React.lazy(() => import("./TopHeader"))
const Navbar = React.lazy(() => import("./Navbar"))
const Footer = React.lazy(() => import("./Footer"))
const ClickToTop = React.lazy(() => import("./ClickToTop"))
const ScrollToTop = React.lazy(() => import("./ScrollToTop"))

const ManageMyAccount = () => {
  const { name, emailAddress, userAddress } = useContext(AppContext)

  const notify = (data) => toast.warn(data, { autoClose: 3000 })
  const notifyTrue = (data) => toast.success(data, { autoClose: 3000 })
  const navigate = useNavigate()
  const fnameRef = useRef()
  const lnameRef = useRef()
  const emailRef = useRef()
  const addressRef = useRef()
  const passRef = useRef()
  const newPassRef = useRef()
  const cnfmPassRef = useRef()

  const [fname, setFname] = useState(name ? name : "test")
  const [lname, setLname] = useState("123")
  const [email, setEmail] = useState(
    emailAddress ? emailAddress : "test@gmail.com"
  )
  const [address, setAddress] = useState(
    userAddress ? userAddress : "Mercury,Milky Way Galaxy"
  )
  const [edit, setEdit] = useState(true)
  const [skeletonLoading, setSkeletonLoading] = useState(true)

  const editBtnClicked = (eve) => {
    if (skeletonLoading) {
      eve.preventDefault()
    } else {
      setEdit(!edit)
    }
  }
  const changeBtnPressed = (eve) => {
    if (skeletonLoading) {
      eve.preventDefault()
    } else {
      if (!edit) {
        setFname(fnameRef.current.value)
        setLname(lnameRef.current.value)
        setEmail(emailRef.current.value)
        setAddress(addressRef.current.value)
        notifyTrue("Successfully changed")
        setEdit(true)
      } else if (passRef.current.value !== "") {
        if (
          newPassRef.current.value === "" ||
          cnfmPassRef.current.value === ""
        ) {
          notify("Please Enter new Password and Confirm Password")
        } else if (newPassRef.current.value === cnfmPassRef.current.value) {
          notifyTrue("Password changed")
          passRef.current.value = ""
          newPassRef.current.value = ""
          cnfmPassRef.current.value = ""
        } else {
          notify("Password didn't match")
        }
      } else if (
        newPassRef.current.value !== "" ||
        cnfmPassRef.current.value !== ""
      ) {
        if (
          newPassRef.current.value === cnfmPassRef.current.value ||
          (newPassRef.current.value !== cnfmPassRef.current.value &&
            passRef.current.value === "")
        ) {
          notify("Please enter current password")
        }
      } else {
        notify("Nothing to change")
      }
    }
  }
  const cancelBtnClicked = (eve) => {
    if (skeletonLoading) {
      eve.preventDefault()
    } else {
      setFname(fname)
      setLname(lname)
      setEmail(email)
      setAddress(address)
      setEdit(true)
    }
  }

  useEffect(() => {
    const randomTimeValue = Math.floor(Math.random() * 5) + 2
    const randomTime = randomTimeValue + "000"
    const timer = setTimeout(() => {
      setSkeletonLoading(false)
    }, randomTime)
    return () => clearTimeout(timer)
  }, [])

  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.continuousStart()
    }
  }, [])

  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <TopHeader />
      <Navbar />
      <hr />

      <div className={style.myAccountMain}>
        <div className={style.topLeft}>
          <span
            className={style.home}
            onClick={() => {
              navigate("/")
            }}
          >
            Home
          </span>
          <span className={style.slash}>/</span>
          <span className={style.myAccount}>My Profile</span>
        </div>
        <div className={style.bottom}>
          <div className={style.bottomLeft}>
            <div className={style.bottomLeftOne}>
              <div className={style.bottomLeftOneTop}>Manage My Account</div>
              <div className={style.bottomLeftOneBottom}>
                <div className={style.bottomLeftOneBottomMyProfile}>
                  My Profile
                </div>
                <div className={style.bottomLeftOneBottomAddressBook}>
                  Address Book
                </div>
              </div>
            </div>
            <div className={style.bottomLeftTwo}>
              <div className={style.bottomLeftTwoTop}>Manage My Orders</div>
              <div className={style.bottomLeftTwoBottom}>
                <div
                  className={style.bottomLeftTwoBottomMyProfile}
                  onClick={() => navigate("/orders")}
                >
                  My Orders
                </div>
                <div className={style.bottomLeftTwoBottomMyProfile}>
                  My Returns
                </div>
                <div className={style.bottomLeftTwoBottomAddressBook}>
                  My Cancellations
                </div>
              </div>
            </div>
          </div>
          <form className={style.bottomRight}>
            <div className={style.formBox}>
              <div className={style.editYourProfileBox}>
                <div className={style.editYourProfile}>Edit Your Profile</div>
                {edit ? (
                  <div
                    className={style.editButtonActive}
                    onClick={editBtnClicked}
                  >
                    <AiOutlineEdit title="edit" />
                  </div>
                ) : (
                  <div
                    className={style.editButtonDeactive}
                    onClick={editBtnClicked}
                  >
                    <AiOutlineEdit title="edit" />
                  </div>
                )}
              </div>
              <div className={style.fnameAndlname}>
                {skeletonLoading ? (
                  <div className={style.fname}>
                    <label className={style.labelFnameSkeletonLoading}></label>
                    <div className={style.inputSameSkeletonLoading}></div>
                  </div>
                ) : (
                  <div className={style.fname}>
                    <label className={style.labelFname}>First Name</label>
                    {edit ? (
                      <input
                        value={fname}
                        type="text"
                        className={style.inputSame}
                        style={{ cursor: "not-allowed", border: "none" }}
                        readOnly
                      />
                    ) : (
                      <input
                        type="text"
                        className={style.inputSame}
                        ref={fnameRef}
                      />
                    )}
                  </div>
                )}
                {skeletonLoading ? (
                  <div className={style.fname}>
                    <label className={style.labelFnameSkeletonLoading}></label>
                    <div className={style.inputSameSkeletonLoading}></div>
                  </div>
                ) : (
                  <div className={style.lname}>
                    <label className={style.labelLname}>Last Name</label>
                    {edit ? (
                      <input
                        value={lname}
                        type="text"
                        className={style.inputSame}
                        style={{ cursor: "not-allowed", border: "none" }}
                        readOnly
                      />
                    ) : (
                      <input
                        type="text"
                        className={style.inputSame}
                        ref={lnameRef}
                      />
                    )}
                  </div>
                )}
              </div>
              <div className={style.emailAndAddress}>
                {skeletonLoading ? (
                  <div className={style.fname}>
                    <label className={style.labelFnameSkeletonLoading}></label>
                    <div className={style.inputSameSkeletonLoading}></div>
                  </div>
                ) : (
                  <div className={style.email}>
                    <label className={style.labelEmail}>Email</label>
                    {edit ? (
                      <input
                        value={email}
                        type="email"
                        className={style.inputSame}
                        style={{ cursor: "not-allowed", border: "none" }}
                        readOnly
                      />
                    ) : (
                      <input
                        type="email"
                        className={style.inputSame}
                        ref={emailRef}
                      />
                    )}
                  </div>
                )}
                {skeletonLoading ? (
                  <div className={style.fname}>
                    <label className={style.labelFnameSkeletonLoading}></label>
                    <div className={style.inputSameSkeletonLoading}></div>
                  </div>
                ) : (
                  <div className={style.address}>
                    <label className={style.labelAddress}>Address</label>
                    {edit ? (
                      <input
                        value={address}
                        type="text"
                        className={style.inputSame}
                        style={{ cursor: "not-allowed", border: "none" }}
                        readOnly
                      />
                    ) : (
                      <input
                        type="text"
                        className={style.inputSame}
                        ref={addressRef}
                      />
                    )}
                  </div>
                )}
              </div>
              <div className={style.password}>
                {skeletonLoading ? (
                  <>
                    <label className={style.labelInputSkeletonLoading}></label>
                    <div className={style.inputSkeletonLoading}></div>
                    <div className={style.inputSkeletonLoading}></div>
                    <div className={style.inputSkeletonLoading}></div>
                  </>
                ) : (
                  <>
                    <label className={style.labelPassword}>
                      Password Changes
                    </label>
                    <input
                      type="password"
                      className={style.passwordInput}
                      placeholder="Current Password"
                      ref={passRef}
                    />
                    <input
                      type="text"
                      className={style.passwordInput}
                      placeholder="New Password"
                      ref={newPassRef}
                    />
                    <input
                      type="text"
                      className={style.passwordInput}
                      placeholder="Confirm New Password"
                      ref={cnfmPassRef}
                    />
                  </>
                )}
              </div>

              <div className={style.buttons}>
                <div className={style.cancelBtnBox}>
                  <button
                    type="button"
                    className={style.cancelBtn}
                    onClick={cancelBtnClicked}
                  >
                    Cancel
                  </button>
                </div>
                <div className={style.saveChangesBtnBox}>
                  <button
                    type="button"
                    className={style.saveChangesBtn}
                    onClick={changeBtnPressed}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <ClickToTop />
      <Footer />
    </>
  )
}

export default ManageMyAccount
