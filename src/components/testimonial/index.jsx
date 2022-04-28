import React from "react"
import "./style.scss"
import { TestimonialData } from "./data"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"

import { Pagination, Autoplay } from "swiper"
import "swiper/css/pagination"

const Testimonial = () => {
  return (
    <div className="w-screen min-h-[410px] mx-auto h-full  testimonial-bg flex items-center justify-center">
      <div className="w-full mx-auto text-white max-w-screen-2xl sliderWrapper">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          loop={true}
          speed={4000}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
        >
          {TestimonialData.map(data => (
            <SwiperSlide key={data.id}>
              <div className="flex flex-col items-start justify-center px-5 text-center min-h-72 lg:px-40">
                <div className="flex items-start justify-start">
                  <p className="text-6xl font-normal tracking-wide uppercase font-industryBold text-white">
                    “
                  </p>
                  <h3 className="font-industryBold font-normal text-2xl md:text-5xl text-white leading-[120%] max-w-[1056px] text-left ml-3">
                    {data.text}
                  </h3>
                </div>
                <h5 className="mt-12 ml-6 text-xl font-normal font-industryBold">
                  {data.name}
                </h5>
                <p className="ml-6 text-lg font-normal font-workSans">
                  {data.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial
