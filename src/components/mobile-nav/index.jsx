import React, { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { Link } from "gatsby"
import Button from "../button"
import { BiChevronRight } from "react-icons/bi"
import Sidebar from "../sidebar"

const MobileNav = ({
  toggleExpansion,
  isExpanded,
  logo,
  sidebarFirstMenuData,
  headerButtons,
}) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [clicked, setClicked] = useState(-1)

  const handleOpen = id => {
    if (clicked === id) {
      setClicked(-1)
    } else {
      setClicked(id)
    }
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-10 w-screen h-screen bg-black px-3 ${
        toggleExpansion ? "top-down-anim" : "top-up-anim"
      }`}
    >
      <div className="flex items-center justify-between px-3 py-[2rem] mx-auto">
        <Link to="/">
          <img
            src={logo.file.url}
            alt={logo.title}
            className="cursor-pointer"
          />
        </Link>
        <IoMdClose
          fontSize={30}
          className="cursor-pointer text-ProjectBlack"
          onClick={() => toggleExpansion(!isExpanded)}
        />
      </div>
      <ul className="flex flex-col items-start justify-start mx-3 font-semibold tracking-wide font-nunito text-primary">
        {sidebarFirstMenuData?.map((item, index) => (
          <li
            className="w-full mb-10 text-base font-medium uppercase text-ProjectBlack hover:text-ProjectBlue"
            key={index}
            onClick={() => handleOpen(index)}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium font-robotoMono text-[18px] text-ProjectBlack">
                  {item.title}
                </p>
              </div>
              <div>
                <BiChevronRight fontSize={25} className="text-ProjectBlack" />
              </div>
            </div>
            {clicked === index && (
              <Sidebar
                dropdownData={item.headerMenuDropdown[0].items}
                sidebarName={item.title}
                setShowSidebar={setShowSidebar}
              />
            )}
            <hr className="w-full text-[#FFFFFF26] h-[0.5px] mt-3" />
          </li>
        ))}
        <div className="flex items-center justify-center w-full absolute bottom-0 mb-4 left-0 border-[#FFFFFF26] border-t-[1px] pt-5">
          {headerButtons.map((buttonData, ind) => (
            <li className="mx-2" key={ind}>
              <Button
                title={buttonData.title}
                link={buttonData.title}
                variant="secondary"
                theme={buttonData.theme[0].toLowerCase()}
              />
            </li>
          ))}
        </div>
      </ul>
    </div>
  )
}
export default MobileNav
