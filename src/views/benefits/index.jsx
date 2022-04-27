import React from "react"

const Benefits = ({ variant, heading, benefit1, benefit2, benefit3 }) => {
  return (
    <div
      className={`relative w-screen ${
        variant === "dark"
          ? "bg-black text-ProjectBlack"
          : " bg-ProjectBlack text-black"
      }`}
    >
      <div className="w-full mx-auto max-w-screen-2xl lg:px-[9rem]">
        {heading && (
          <h1 className="font-industryBold text-3xl md:text-[44px] md:w-2/3 py-10 leading-[120%]">
            {heading}
          </h1>
        )}
        {/* Section One Benefit Items */}
        <div 
          className="flex flex-wrap items-start justify-start pt-4 md:justify-between md:items-center lg:flex-nowrap"
          data-sal = "slide-up"
          data-sal-delay="0"
          data-sal-easing="ease"
        >
          <div className="flex items-center justify-between mb-12">
            <hr className="min-w-[90px] h-[1px] rotate-90 border-2 border-ProjectBlue bg-ProjectBlue -mx-[25px]" />
            <p
              className={`max-w-[336px] text-lg tracking-wider font-industryMedium font-normal text-[19px] ${
                variant === "dark" ? "text-ProjectBlack" : "text-black"
              }`}
            >
              <span className="font-bold">{benefit1.split(" ")[0]}</span>{" "}
              {benefit1.substring(benefit1.indexOf(" ") + 1)}
            </p>
          </div>
          <div className="flex items-center justify-between mb-12"
          data-sal="slide-up"
          data-sal-delay="0"
          data-sal-easing="ease"
          >
            <hr className="min-w-[90px] h-[1px] rotate-90 border-2 border-ProjectBlue bg-ProjectBlue -mx-[25px]" />
            <p
              className={`max-w-[336px] text-lg tracking-wider font-industryMedium font-normal text-[19px] ${
                variant === "dark" ? "text-ProjectBlack" : "text-black"
              }`}
            >
              <span className="font-bold">{benefit2.split(" ")[0]}</span>{" "}
              {benefit2.substring(benefit2.indexOf(" ") + 1)}
            </p>
          </div>
          <div className="flex items-center justify-between mb-12">
            <hr className="min-w-[90px] h-[1px] rotate-90 border-2 border-ProjectBlue bg-ProjectBlue -mx-[25px]" />
            <p
              className={`max-w-[336px] text-lg tracking-wider font-normal font-industryMedium text-[19px] ${
                variant === "dark" ? "text-ProjectBlack" : "text-black"
              }`}
            >
              <span className="font-bold">{benefit3.split(" ")[0]}</span>{" "}
              {benefit3.substring(benefit3.indexOf(" ") + 1)}
            </p>
          </div>
        </div>

        {/* Section Two Image */}
        <div data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease">
          <img
            src={require("../../assets/Animation.png").default}
            alt="Animation"
          />
        </div>
      </div>
    </div>
  )
}

export default Benefits
