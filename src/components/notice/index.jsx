import React from "react"
import { Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

const Notice = ({ NoticeData }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <p className="text-sm text-center font-workSans leading-[150%] font-medium">
            {children}
            <Link
              to="/learn-more"
              className="mx-4 text-ProjectBlue font-industryBold"
            >
              {NoticeData.noticeActionText}
            </Link>
          </p>
        )
      },
    },
  }
  return (
    <div
      className={`w-screen h-[48px] py-3 px-2 lg:px-40
      ${
        NoticeData?.theme?.[0] === "Light"
          ? "bg-ProjectBlack text-black"
          : "bg-black text-ProjectBlack"
      }
        `}
    >
      <div className="flex items-center justify-center w-full h-full max-w-screen-xl mx-auto">
        {renderRichText(NoticeData.noticeTitle, options)}
      </div>
    </div>
  )
}

export default Notice
