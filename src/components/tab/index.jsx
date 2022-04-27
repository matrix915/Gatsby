import React, { useState } from "react"
import PropTypes from "prop-types"

const Tab = ({ tabItem }) => {
  const [activeTab, setActiveTab] = useState(tabItem[0])
  return (
    <>
      {tabItem.map((item, id) => (
        <button
          key={id}
          onClick={() => setActiveTab(item)}
          onKeyDown={() => setActiveTab(item)}
          className={
            activeTab === item
              ? "border-b-[3px] border-ProjectBlue"
              : "border-b-[1px] border-[rgba(0, 0, 0, 0.15)]"
          }
        >
          <h5
            className={`font-robotoMono font-bold text-xs md:text-sm tracking-wider text-black w-28 md:w-52 uppercase text-center py-2 cursor-pointer `}
          >
            {item}
          </h5>
        </button>
      ))}
    </>
  )
}

Tab.prototypes = {
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
}

export default Tab
