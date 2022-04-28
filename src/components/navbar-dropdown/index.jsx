import React from "react"

const NavbarDropdown = ({ DropdownData }) => {
  return (
    <div className="absolute z-50 pt-6 -ml-28 cursor-default">
      <div className="w-[340px] rounded-sm bg-ProjectBlack shadow-project pb-[18px] pt-1">
        {DropdownData.map((item, index) => (
          <div
            className="w-[300px] h-[69px] mt-[18px] hover:bg-[#0000000D] flex items-center justify-between px-[11.75px] mx-auto cursor-pointer"
            key={index}
          >
            <img src={item.icon.file?.url} alt={item.icon.title} />
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
