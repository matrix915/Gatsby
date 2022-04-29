import React from "react"

const NavbarDropdown = ({ DropdownData }) => {
  return (
    <div className="absolute z-50 -ml-[13rem] cursor-default">
      <div className="w-[340px] rounded-sm bg-ProjectBlack shadow-project p-5">
        {DropdownData?.map((item, index) => (
          <div
            className={index === 0 ? "w-[300px] h-[60px]  hover:bg-[#0000000D] flex items-center justify-between mx-auto cursor-pointer" : "w-[300px] h-[60px] mt-[8px] hover:bg-[#0000000D] flex items-center justify-between mx-auto cursor-pointer"}
            key={index}
          >
            <img src={item.icon.file?.url} alt={item.icon.title} className="ml-4"/>
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

export default NavbarDropdown
