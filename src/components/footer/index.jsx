import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillMediumSquare,
  AiFillYoutube,
} from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

const Footer = ({ variant, FooterData }) => {
  return (
    <div
      className={`w-screen mx-auto h-full ${
        variant === "black"
          ? "bg-black text-ProjectBlack"
          : "bg-ProjectBlack text-black"
      }`}
    >
      <div className="w-full px-5 pb-20 mx-auto max-w-screen-2xl lg:px-40">
        <hr
          className={`border-[0.5px] ${
            variant === "black" ? "border-ProjectBlack" : "border-black"
          } mb-20 opacity-20`}
        />
        {/* Footer Links */}
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
            {FooterData.map((data, index) => (
              <div key={index} className="my-3">
                <li
                  className={`font-robotoMono font-medium text-base mb-[30px] ${
                    variant === "black" ? "text-ProjectBlue" : "text-black"
                  } uppercase`}
                >
                  {data.columnTitle}
                </li>
                {data.links.map((item, idx) => (
                  <li key={idx} className="my-[15px]">
                    <Link
                      to={item.title}
                      className=" text-sm font-industryMedium tracking-wide leading-[140%]"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </div>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div className="flex items-center justify-between mt-20 ">
          <Link to="/">
            {variant === "black" ? (
              <StaticImage
                src="../../assets/logo.png"
                alt="Atlas One"
                className="w-32 md:w-full"
              />
            ) : (
              <StaticImage
                src="../../assets/logo-black.png"
                alt="Atlas One"
                className="w-32 md:w-full"
              />
            )}
          </Link>
          <div className="flex items-center justify-between">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <AiFillFacebook className="mr-5" fontSize={24} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <AiOutlineTwitter className="mr-5" fontSize={24} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="mr-5" fontSize={24} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <AiFillMediumSquare className="mr-5" fontSize={24} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <AiFillYoutube className="mr-5" fontSize={24} />
            </a>
          </div>
        </div>
        <hr
          className={`border-[0.5px] ${
            variant === "black" ? "border-ProjectBlack" : "border-black"
          }  my-8 opacity-20`}
        />
        {/* Copyright */}
        <div className="flex items-center justify-start max-w-[550px] w-full">
          <p className="text-xs tracking-wide font-industryMedium mr-[15px]">
            @ 2022 Atlas One. All right reserved.
          </p>
          <Link
            to="/privacy-policy"
            className="text-xs tracking-wide font-industryMedium mx-[15px]"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="text-xs tracking-wide font-industryMedium mx-[15px]"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
