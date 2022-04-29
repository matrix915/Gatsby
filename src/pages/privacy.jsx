import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import moment from 'moment';

const PrivacyPolicy = ({ data }) => {

  const pageDatas = data.allContentfulPage.edges
  const ExtraData = pageDatas.filter(
    pageData => {
      const title = pageData?.node?.title
      if (title.includes("Privacy Policy")) {
        return pageData
      } else {
        return false
      }
    }
  )
  const PrivacyData = data?.allContentfulLegal?.edges[0]?.node
  const NavbarData = ExtraData[0]?.node?.sections?.[0]
  const FooterData = ExtraData[0]?.node?.sections?.[2]?.footerColumns

  const updatedAtDate = PrivacyData?.page?.[0]?.updatedAt
  const DateUtc = new Date(updatedAtDate)
  const retrieveDate = moment(DateUtc).format('MMMM Do YYYY')

  const options = {
    renderNode: {
      [BLOCKS.HEADING_5]: (node, children) => {
        return (
          <h5 className="text-ProjectBlack font-industryBold leading-[140%] max-w-[500px] mt-4 text-left text-base md:text-[21px] font-semibold tracking-wide">
            {children}
          </h5>
        )
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return (
          <ul className="list-disc ml-7">
            <li className="text-ProjectBlack font-workSans font-normal leading-[150%] mt-4 text-left text-[19px]">
              {children}
            </li>
          </ul>
        )
      },
    },
  }

  return (
    <Layout NavbarData={NavbarData} FooterData={FooterData}>
      <div className="w-screen px-5 lg:px-40 z-20 bg-black">
        <div className="w-full max-w-screen-xl mx-auto py-12 flex flex-col items-baseline">
          <p className="text-base text-ProjectBlue font-industryBold uppercase">{PrivacyData?.page?.[0]?.type?.[0]}</p>
          <h1 className="text-white tracking-subtitle text-[56px] my-[20px] font-industryBlack font-normal tracking-wide leading-tight uppercase">
            {PrivacyData?.title}
          </h1>
          <p className="text-[21px] text-white font-workSans leading-normal font-normal">
            Last Updated  {retrieveDate}
          </p>
        </div>
      </div>
      <div className="w-screen px-5 lg:px-40 z-20">
        <div className="w-full max-w-screen-xl mx-auto py-[6.5rem] flex flex-col items-baseline policies">
          {typeof window !== "undefined" ? renderRichText(PrivacyData?.text, options) : ""}
        </div>
      </div>
    </Layout >
  )
}

export default PrivacyPolicy

export const query = graphql`
  query {

    allContentfulLegal {
      edges {
        node {
          title
          text {
            raw
          }
          page {
            slug
            title
            updatedAt
            type
         }
        }
      }
    }

    allContentfulPage {
      edges {
        node {
          title
          sections {
            ... on ContentfulForm {
              title
              description
              tagline
              formType
              richText {
                raw
              }
            }
            ... on ContentfulSectionHeader {
              theme
              title
              tagline
              alignment
            }
            ... on ContentfulHeader {
              headerMenuItems {
                title
                headerMenuDropdown {
                  items {
                    description
                    icon {
                      file {
                        url
                      }
                      title
                    }
                    title
                  }
                }
              }
              headerButtons {
                ... on ContentfulPrimaryButton {
                  theme
                  title
                }
                ... on ContentfulSecondaryButton {
                  id
                  theme
                  title
                }
              }
              atlasOneLogo {
                image {
                  file {
                    url
                  }
                  title
                }
              }
            }
            ... on ContentfulFooter {
              footerColumns {
                columnTitle
                links {
                  title
                }
              }
            }
            ... on ContentfulCustomersSection {
              title
              customers {
                customerName
                logo {
                  gatsbyImageData(
                    height: 80
                    width: 80
                    placeholder: BLURRED
                    layout: FIXED
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
