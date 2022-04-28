import React from "react"
import { Link } from "gatsby"
// import PropTypes from "prop-types"

const Button = ({ link, title, variant, theme }) => {
  return (
    <Link
      to={`/${link}`}
      className={`flex items-center font-semibold text-center rounded-sm font-workSans min-w-[150px] text-sm${
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
      }${
        link === "talk-to-sales" || link === "get-a-demo" ? " justify-center border-2 h-12" :  " justify-start text-ProjectBlue 2xl:text-[19px] h-8"
      }
      `}
    >
      {title}
      {
        link === "talk-to-sales" || link === "get-a-demo"  ? "": (
          <img
            src={require("../../assets/ArrowRight.png").default}
            alt="Rectangle"
            className="w-[16px] h-[16px] ml-4"
          />
        ) 
      }

    </Link>
  )
}

// Button.propTypes = {
//   link: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   variant: PropTypes.string.isRequired,
//   theme: PropTypes.string.isRequired,
// }

export default Button
