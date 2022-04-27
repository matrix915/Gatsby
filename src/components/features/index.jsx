import React from "react"
import { FeaturesData } from "./data"

const Features = ({ variant }) => {
  return (
    <div className="w-screen bg-black mx-auto">
      <div className="max-w-screen-xl w-full mx-auto py-16 px-3">
        <div className={`text-${variant}`}>
          <h6 className="uppercase font-robotoMono font-bold text-base tracking-wider text-ProjectBlue">
            FEATURES
          </h6>
          <div
            className={`max-w-[833px] w-full ${
              variant === "center" ? "mx-auto " : ""
            }`}
          >
            <h1 className="font-industryBold text-[44px] text-ProjectBlack leading-[120%]">
              Purpose-built solutions to keep your people safe and informed
            </h1>
          </div>
          <div
            className={`max-w-[545px] w-full ${
              variant === "center" ? "mx-auto " : ""
            }`}
          >
            <p className="font-workSans text-[17px] leading-[150%] text-ProjectBlack  mt-5">
              Here is a description that we can include that talks about the
              products we build, and why we build them.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 text-white">
          {FeaturesData.map((data, index) => (
            <div className="max-w-[256px] w-full my-5" key={index}>
              <img
                src={data.image}
                alt="Features"
                className="w-[72px] h-[72px]"
              />
              <h3 className="font-exo font-extrabold leading-[120%] tracking-wide text-[21px] mt-3">
                {data.title}
              </h3>
              <p className="font-workSans font-normal leading-[150%] text-[14px] mt-1">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
