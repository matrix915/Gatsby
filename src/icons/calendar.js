import React from "react"

const CalendarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 36 36"
    >
      <path fill="#fff" d="M.75 5.25h30v30h-30v-30z"></path>
      <path
        fill="#00AEEF"
        fillOpacity="0.7"
        d="M.75 14.25h30v3h-30v-3zm7.5 3h7.5v6h-7.5v-6zm15 12h7.5v6h-7.5v-6z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M23.25 17.25v18m-22.5-30h30v30h-30v-30zm6-3v6-6zm18 0v6-6zm-24 15h30-30zm0 12h30-30zm0-6h30-30zm7.5-6v18-18zm7.5 0v18-18z"
      ></path>
    </svg>
  )
}

export default CalendarIcon
