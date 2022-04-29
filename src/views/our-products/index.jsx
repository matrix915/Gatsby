import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const OurProducts = ({ OurProductsData }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <p className="my-5 text-base font-workSans max-w-[497px] mx-auto font-normal">
            {children}
          </p>
        )
      },
    },
  }
  return (
    <div
      className={`w-screen pt-24 mx-auto ${
        OurProductsData.theme[0] === "Dark"
          ? "bg-black text-ProjectBlack "
          : "bg-ProjectBlack text-black"
      }`}
    >
      <div className="w-full max-w-screen-xl mx-auto">
        <div
          className={`flex items-center w-full px-3 min-h-96 ${
            OurProductsData.alignment[0] === "Center"
              ? "justify-center"
              : "justify-start"
          }`}
        >
          <div 
            className="text-center"
            data-sal="slide-up" 
            data-sal-delay="0" 
            data-sal-easing="ease"
          >
            <p className="my-5 text-base font-bold leading-5 tracking-wider uppercase text-ProjectBlue font-robotoMono">
              {OurProductsData.tagline}
            </p>
            <h1 className="my-5 text-[44px] font-normal font-industryBold max-w-[720px] leading-[120%]">
              {OurProductsData.title}
            </h1>
            {typeof window !== "undefined" ? renderRichText(OurProductsData.description, options) : ""}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProducts
