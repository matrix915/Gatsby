import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Text from "../../components/text"
import PropTypes from "prop-types"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Hero = ({ HeroData }) => {
  const { heroType, content, heroBackgroundImage } = HeroData

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <p 
            className="text-ProjectBlack font-workSans font-normal leading-[150%] max-w-[514px] mt-4 text-left text-base md:text-[21px]"
            data-sal="slide-up"
            data-sal-delay="0" 
            data-sal-easing="ease"
          >
            {children}
          </p>
        )
      },
    },
  }

  return (
    <div className="min-h-[500px] md:h-[684px] w-screen relative">
      <div className="absolute top-0 w-screen h-full -z-20 bg-gradient">
        {heroBackgroundImage && (
          <img
            src={heroBackgroundImage.file.url}
            alt={heroBackgroundImage.file.title}
            className="object-cover w-screen min-h-[1002px]"
          />
        )}
      </div>
      <div className="min-h-[500px] md:h-[684px] w-full flex items-center justify-start lg:px-32 -ml-1 pb-10">
        <div
          className={`w-full max-w-screen-xl px-5 lg:px-9 mx-auto text-left ${
            heroType[0] === "Graphic Hero"
              ? "flex items-center justify-between pb-10"
              : "mt-20"
          }`}
        >
          <div className={heroType[0] === "Graphic Hero" ? "md:w-1/2" : "md:w-2/3"}>
            <p className="text-base font-bold tracking-wider uppercase text-ProjectBlue font-robotoMono"
              data-sal="slide-up"
              data-sal-delay="0"
              data-sal-easing="ease">
              {content.contentBlockTagline}
            </p>
            <h1
              className={`text-[28px] text-left ${
                heroType[0] === "Primary" || heroType[0] === "Image"
                  ? "md:text-[62px] md:max-w-[746px]"
                  : "md:text-[56px] md:max-w-[746px]"
              } tracking-wide uppercase text-ProjectBlack font-industryBold not-italic leading-[120%] font-normal`}
              data-sal="slide-up"
              data-sal-delay="0" 
              data-sal-easing="ease">
              {content.contentBlockTitle}
            </h1>
            {renderRichText(content.contentBlockDescription, options)}
            <div className="flex items-center justify-start mt-5 md:max-w-xs"
              data-sal="slide-up"
              data-sal-delay="0"
              data-sal-easing="ease"
            >
              <div className="mr-4">
                <Text
                  title={content.actionText}
                  link={content.actionUrl}
                  // theme={button.theme[0].toLowerCase()}
                  // variant={index === 0 ? "secondary" : "primary"}
                />
              </div>
            </div>
          </div>
          <div
            className={`${
              heroType[0] === "Graphic Hero" ? "max-w-1/2" : "hidden"
            }`}
          >
            <StaticImage
              src={"../../assets/Rectangle 6.png"}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  variant: PropTypes.string,
}

export default Hero
