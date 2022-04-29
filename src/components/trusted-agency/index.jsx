import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import "./style.scss"

const TrustedAgency = ({ TrustedAgencyData }) => {
  return (
    <div className="w-screen mx-auto h-[326px] bg-white">
      <div className="flex items-center justify-center w-screen h-full mx-auto flex-col">
        <div className="w-full mx-auto max-w-screen-2xl px-5 lg:px-40 py-5">
          <p className="text-[17px] font-normal mt-20 font-workSans tracking-wide text-center text-[#00000040]">
            {TrustedAgencyData.title}
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-9 place-items-center mt-14 mb-20">
            {TrustedAgencyData.customers?.map((item, index) => (
              <GatsbyImage
                image={item.logo.gatsbyImageData}
                alt={item.customerName}
                className="mx-10"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedAgency
