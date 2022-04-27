import React from "react"

const SolutionsDropdown = ({ DropdownData1, DropdownData3 }) => {
  return (
    <div className="absolute z-50 -ml-[32.6rem] cursor-default">
      <div className="flex rounded-sm bg-ProjectBlack shadow-project w-[1020px]">
        <div className="w-[680px] h-[610px] pt-[30px] pb-[20px]">
          <h3 className="pl-[28px] text-sm font-bold tracking-wider text-black font-robotoMono">
            BY USE CASE
          </h3>
          <div className="grid grid-rows-7 grid-cols-2 grid-flow-col">
            {DropdownData1?.map((item, index) => (
              <div
                className={`w-[300px] h-[60px] mt-[8px] hover:bg-[#0000000D] flex items-center justify-between px-[11.75px] mx-auto cursor-pointer ${
                  index > 6 ? "mr-[20px]" : ""
                }`}
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

        <div className="bg-[#00000008] pt-[30px] w-[340px] cursor-default">
          <h3 className="pl-6 text-sm font-bold tracking-wider text-black font-robotoMono">
            BY INDUSTRY
          </h3>

          <div className="flex flex-col items-start justify-between">
            {DropdownData3?.map((item, ind) => (
              <div
                className="w-[300px] h-[65px] mt-[12.5px] flex items-center justify-between px-4 mx-auto cursor-pointer"
                key={ind}
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
      </div>
    </div>
  )
}

export default SolutionsDropdown
