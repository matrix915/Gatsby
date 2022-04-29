import React from "react"
import { Link } from "gatsby"
import ArrowRight from "../../assets/ArrowRight.svg";

const Text = ({ link, title, variant, theme }) => {
  return (
    <Link
      to={`/${link}`}
      className={`flex items-center justify-start h-12 font-medium text-center leading-7 text-ProjectBlue hover:underline rounded-sm font-workSans min-w-[150px] text-[19px]${
        variant === "primary" && theme === "dark"
          ? " bg-black border-black text-ProjectBlack hover:bg-transparent hover:text-ProjectBlack transition duration-300 ease-in-out"
          : ""
      }${
        variant === "primary" && theme === "blue"
          ? " bg-ProjectBlue border-ProjectBlue text-ProjectBlack hover:text-ProjectBlue hover:bg-transparent transition duration-300 ease-in-out"
          : ""
      }${
        variant === "primary" && theme === "grey"
          ? " bg-ProjectBlack border-ProjectBlack text-black hover:bg-transparent hover:text-ProjectBlack transition duration-300 ease-in-out"
          : ""
      }${
        variant === "secondary" && theme === "grey"
          ? " bg-transparent border-ProjectBlack text-ProjectBlack hover:bg-ProjectBlack hover:border-ProjectBlack hover:text-black transition duration-300 ease-in-out active:bg-ProjectBlack active:border-ProjectBlack active:text-black"
          : ""
      }${
        variant === "secondary" && theme === "blue"
          ? " bg-transparent border-ProjectBlue text-ProjectBlue hover:bg-ProjectBlue hover:border-ProjectBlue hover:text-ProjectBlack transition duration-300 ease-in-out active:bg-ProjectBlue active:border-ProjectBlue active:text-ProjectBlack"
          : ""
      }${
        variant === "primary" && theme === "dark"
          ? " bg-transparent border-black text-black hover:bg-black hover:border-black hover:text-ProjectBlack transition duration-300 ease-in-out active:bg-black active:border-black active:text-ProjectBlack"
          : ""
      }`}
    >
      {title}
      {
        link === "talk-to-sales" || link === "get-a-demo"  ? "": (
          <img
            src={ArrowRight}
            alt="Rectangle"
            className="w-[16px] h-[16px] ml-4"
          />
        ) 
      }
    </Link>
  )
}

export default Text
