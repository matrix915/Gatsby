import React from "react"
import Navbar from "../navbar"
import Notice from "../notice"
import Footer from "../footer"

const Layout = ({ children, NoticeData, NavbarData, FooterData }) => {
  return (
    <>
      {NoticeData && <Notice NoticeData={NoticeData} />}
      <Navbar NavbarData={NavbarData} />
      {children}
      <Footer variant="black" FooterData={FooterData} />
    </>
  )
}

export default Layout
