import React, { useState } from "react"
import { BiChevronLeft } from "react-icons/bi"

const Sidebar = ({ dropdownData, sidebarName, setShowSidebar }) => {
  const [sidebar, setSidebar] = useState(true)
  return (
    <div
      className={`fixed left-0 right-0 z-50 w-screen h-screen bg-white top-20 bottom-0 ${
        sidebar ? "slide-in" : "slide-out"
      }`}
    >
      <div
        className="flex items-center justify-between w-[93%] mx-auto py-5 text-black border-[#00000026] border-b-[1px]"
        onClick={() => {
          setShowSidebar(false)
          setSidebar(false)
        }}
      >
        <p className="font-medium font-robotoMono text-[18px] ">
          {sidebarName}
        </p>
        <BiChevronLeft fontSize={28} />
      </div>
      <div>
        {dropdownData.slice(0, 7).map((item, index) => (
          <div
            className="w-screen h-[60px] mt-2 hover:bg-[#0000000D] flex items-center justify-between px-4 mx-auto ml-1 "
            key={index}
          >
            <img src={item.icon.file.url} alt={item.icon.title} />
            <div className="flex-1 ml-4">
              <h4 className="text-base tracking-wide text-black capitalize font-industryDemi">
                {item.title}
              </h4>
              <p className="text-sm font-normal text-black normal-case font-workSans ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
