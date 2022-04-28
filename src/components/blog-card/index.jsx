import React from "react"
import { Link } from "gatsby"

const BlogCard = ({ title, heading, description, link }) => {
  return (
    <div
      className="w-[353px] my-5 mx-2"
      data-sal="slide-up"
      data-sal-delay="0"
      data-sal-easing="ease"
    >
      <img
        src={require("../../assets/Rectangle.png").default}
        alt="Rectangle"
        className="w-[353px] h-[200px]"
      />
      <p className="mt-6 text-sm font-bold tracking-wider uppercase font-robotoMono text-ProjectBlue">
        {title}
      </p>
      <h6 className="font-industryBold font-normal text-[21px] text-black my-3 leading-[120%]">
        {heading}
      </h6>
      <p className="font-workSans font-normal text-[17px] text-black my-5 leading-[150%] line-clamp-3">
        {description}
      </p>
      <Link
        to={`/${link}`}
        className="text-base font-normal text-black font-industryBold my-9"
      >
        Read More
      </Link>
    </div>
  )
}

export default BlogCard
