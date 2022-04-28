import React, { useState, useRef, useEffect } from "react"
import Button from "../button"
import PropTypes from "prop-types"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"

import { EffectFade } from "swiper"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

const ProductCard = ({ theme, alignment, content }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const [contentIndex, setContentIndex] = useState(0)
  const swiperRef = useRef(null)
  const [contentDescription, setContent] = useState(null)

  const handleContentClick = index => {
    return setContentIndex(index)
  }

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <p
            className={`my-[10px] text-base text-${
              theme === "dark" ? "white" : "dark"
            } font-workSans max-w-[500px] font-normal`}
          >
            {children}
          </p>
        )
      },
    },
  }

  useEffect(() => {
    if (content[contentIndex].contentBlockDescription) {
      setContent(
        renderRichText(content[contentIndex].contentBlockDescription, options)
      )
      return contentDescription
    }
    // ignore react-hooks/exhaustive-deps
  }, [content, contentIndex])

  return (
    <div
      className={`w-screen mx-auto bg-${theme} min-h-[620px] h-full py-10 px-5 lg:px-40 flex items-center justify-center flex-col`}
    >
      {content && content?.length > 1 && (
        <div className="flex items-center justify-center w-full mx-auto mb-10">
          {content?.forEach(id => (
            <button
              className={
                contentIndex === id
                  ? "border-b-[3px] border-ProjectBlue"
                  : "border-b-[1px] border-[rgba(0, 0, 0, 0.15)]"
              }
              key={id}
              onClick={() => handleContentClick(id)}
            >
              <h5
                className={`font-robotoMono font-bold text-xs md:text-sm tracking-wider text-${
                  theme === "dark" ? "white" : "dark"
                } w-28 md:w-52 uppercase text-center py-2 cursor-pointer `}
              >
                Option {id + 1}
              </h5>
            </button>
          ))}
        </div>
      )}
      <div className="flex items-center justify-center max-w-screen-xl w-full mx-auto">
        <div className="flex flex-col items-center justify-center w-full mx-auto md:justify-between md:flex-row">
          {content && content[contentIndex] && (
            <>
              <div
                className={`flex-[0.8] order-${
                  alignment === "right" ? "1" : "0"
                }`}
              >
                <p className="my-5 text-base font-bold leading-5 tracking-wider uppercase text-ProjectBlue font-robotoMono">
                  {content[contentIndex].contentBlockTagline}
                </p>
                <h1
                  className={`my-5 text-4xl font-normal text-${
                    theme === "dark" ? "white" : "dark"
                  } font-industryBold`}
                >
                  {content[contentIndex].contentBlockTitle}
                </h1>
                {contentDescription}
                <div className="my-[30px]">
                  <Button
                    title={content[contentIndex].contentBlockButtons[0].title}
                    variant="secondary"
                    link={content[contentIndex].contentBlockButtons[0].title}
                    theme={content[
                      contentIndex
                    ].contentBlockButtons[0].theme[0].toLowerCase()}
                  />
                </div>
              </div>
              <div className={`mt-10 md:mt-0 md:ml-0 w-full md:w-2/5`}>
                <Swiper
                  modules={[EffectFade]}
                  slidesPerView={1}
                  className="flex flex-col items-center justify-center mySwiper"
                  speed={2000}
                  ref={swiperRef}
                  onSlideChange={index => {
                    setImageIndex(index.snapIndex)
                  }}
                  effect="fade"
                  fadeEffect={{
                    crossFade: true,
                  }}
                  simulateTouch={false}
                >
                  <div>
                    {content[contentIndex]?.images?.map((image, id) => (
                      <SwiperSlide key={id}>
                        <img
                          src={image.url}
                          alt={image.title}
                          className="max-w-[458px] w-full min-h-[374px]  mx-auto"
                          key={id}
                        />
                      </SwiperSlide>
                    ))}
                  </div>
                  {content[contentIndex]?.images?.length > 1 && (
                    <div className="my-10">
                      {content[contentIndex]?.images?.map((image, id) => (
                        <button
                          className={
                            imageIndex === id
                              ? "border-b-[3px] border-ProjectBlue"
                              : "border-b-[1px] border-[rgba(0, 0, 0, 0.15)]"
                          }
                          key={id}
                          onClick={() => {
                            swiperRef.current.swiper.slideTo(
                              content[contentIndex]?.images?.indexOf(image)
                            )
                          }}
                        >
                          <h5
                            className={`font-robotoMono font-bold text-xs md:text-sm tracking-wider text-black w-full px-8 uppercase text-center py-2 cursor-pointer `}
                          >
                            {image.title}
                          </h5>
                        </button>
                      ))}
                    </div>
                  )}
                </Swiper>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  theme: PropTypes.string,
  alignment: PropTypes.string,
  content: PropTypes.array,
}

export default ProductCard
