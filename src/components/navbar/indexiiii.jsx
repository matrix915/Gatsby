import { HiMenu } from "react-icons/hi"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Button from "../button"
import ProductsDropdown from "../navbar-dropdown"
import SolutionsDropdown from "../navbar-dropdown/SolutionsDropdown"
import MobileNav from "../mobile-nav"
import 'flowbite'

const Navbar = ({ NavbarData }) => {
  const [isExpanded, toggleExpansion] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)
  const { atlasOneLogo, headerButtons, headerMenuItems } = NavbarData
  const [hoveredItem, setHoveredItem] = useState("")

  const changeNav = () => {
    if (window && window.scrollY >= 48) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    if (window)
      window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <nav
      className={`w-screen h-[88px] px-5 lg:px-40 z-20 sticky bg-black top-0 ${scrollNav && "border-b-[0.5px] border-[#FFFFFF26]"
        }`}
    >
      <div className="flex items-center justify-between w-full h-full max-w-screen-xl mx-auto ">
        <div>
          <Link to="/">
            <img
              src={atlasOneLogo?.image.file.url}
              alt={atlasOneLogo?.image.title}
            />
          </Link>
        </div>
        {/* Desktop Version */}
        <div className="flex-[0.9] navbar-hide ">
          <ul className="flex items-center justify-end">
            <li
              className={`text-base font-medium uppercase cursor-pointer font-robotoMono group navbar-border-bottom  mx-[8px] ${hoveredItem === headerMenuItems?.[0]?.title || hoveredItem === ""
                ? "text-ProjectBlack"
                : "text-[#FFFFFF80]"
                }`}
              onMouseOver={() => setHoveredItem(headerMenuItems?.[0]?.title)}
              onFocus={() => setHoveredItem(headerMenuItems?.[0]?.title)}
              onMouseOut={() => setHoveredItem("")}
              onBlur={() => setHoveredItem("")}
            >
              {headerMenuItems?.[0]?.title}

              <div className="hidden transition duration-700 ease-in-out group-hover:block">
                <ProductsDropdown
                  DropdownData={headerMenuItems?.[0].headerMenuDropdown?.[0]?.items}
                />
              </div>
            </li>
            <li
              className={`text-base font-medium uppercase cursor-pointer font-robotoMono group navbar-border-bottom  mx-[8px] ${hoveredItem === headerMenuItems?.[1]?.title || hoveredItem === ""
                ? "text-ProjectBlack"
                : "text-[#FFFFFF80]"
                }`}
              onMouseOver={() => setHoveredItem(headerMenuItems?.[1]?.title)}
              onFocus={() => setHoveredItem(headerMenuItems?.[1]?.title)}
              onMouseOut={() => setHoveredItem("")}
              onBlur={() => setHoveredItem("")}
            >
              {headerMenuItems?.[1]?.title}
              <div className="hidden transition duration-700 ease-in-out group-hover:block ">
                <SolutionsDropdown
                  DropdownData1={headerMenuItems?.[1]?.headerMenuDropdown?.[0]?.items}
                  DropdownData3={headerMenuItems?.[1]?.headerMenuDropdown?.[1]?.items}
                />
              </div>
            </li>
            <li
              className={`text-base font-medium uppercase cursor-pointer font-robotoMono group navbar-border-bottom  mx-[8px] ${hoveredItem === headerMenuItems?.[2]?.title || hoveredItem === ""
                ? "text-ProjectBlack"
                : "text-[#FFFFFF80]"
                }`}
              onMouseOver={() => setHoveredItem(headerMenuItems?.[2]?.title)}
              onFocus={() => setHoveredItem(headerMenuItems?.[2]?.title)}
              onMouseOut={() => setHoveredItem("")}
              onBlur={() => setHoveredItem("")}
            >
              {headerMenuItems?.[2]?.title}FR
              <div className="hidden transition duration-700 ease-in-out group-hover:block">
                <ProductsDropdown
                  DropdownData={headerMenuItems?.[2]?.headerMenuDropdown?.[0]?.items}
                />
              </div>
            </li>
            <li
              className={`text-base font-medium uppercase cursor-pointer font-robotoMono group navbar-border-bottom mx-[8px] ${hoveredItem === headerMenuItems?.[3]?.title || hoveredItem === ""
                ? "text-ProjectBlack"
                : "text-[#FFFFFF80]"
                }`}
              onMouseOver={() => setHoveredItem(headerMenuItems?.[3]?.title)}
              onMouseOut={() => setHoveredItem("")}
              onFocus={() => setHoveredItem(headerMenuItems?.[3]?.title)}
              onBlur={() => setHoveredItem("")}
            >
              {headerMenuItems?.[3]?.title}
              <div className="hidden transition duration-700 ease-in-out group-hover:block">
                <ProductsDropdown
                  DropdownData={headerMenuItems?.[3]?.headerMenuDropdown?.[0]?.items}
                />
              </div>
            </li>

            <div className="flex items-center ml-[8px]">
              {headerButtons?.map((buttonData, index) => (
                <li key={index} className="mx-[8px]">
                  <Button
                    title={buttonData.title}
                    link={buttonData.title.split(" ").join("-").toLowerCase()}
                    variant={index === 0 ? "secondary" : "primary"}
                    theme={buttonData.theme[0].toLowerCase()}
                  />
                </li>
              ))}
            </div>
          </ul>
        </div>
        {/* Mobile Version */}
        <div className="navbar-menu-hide">
          <HiMenu
            className="cursor-pointer text-ProjectBlack"
            onClick={() => toggleExpansion(!isExpanded)}
            fontSize={30}
          />
          {isExpanded && (
            <MobileNav
              toggleExpansion={toggleExpansion}
              isExpanded={isExpanded}
              logo={atlasOneLogo?.image}
              sidebarFirstMenuData={headerMenuItems}
              headerButtons={headerButtons}
            />
          )}
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  variant: PropTypes.string,
}

export default Navbar
