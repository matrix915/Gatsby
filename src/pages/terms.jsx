import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import moment from 'moment';

const TermsOfService = ({ data }) => {
  const pageDatas = data.allContentfulPage.edges
  const ExtraData = pageDatas.filter(
    pageData => {
      const title = pageData?.node?.title
      if (title.includes("Terms of Service")) {
        return pageData
      }else{
        return false
      }
    }
  )
  const TermsData =  data?.allContentfulLegal?.edges[1]?.node
  const NavbarData = ExtraData[0]?.node?.sections?.[0]
  const FooterData = ExtraData[0]?.node?.sections?.[2]?.footerColumns
  
  const updatedAtDate = TermsData?.page?.[0]?.updatedAt
  const DateUtc= new Date(updatedAtDate)
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
        <div className="w-full max-w-screen-xl mx-auto pt-[109px] pb-[79px]  flex flex-col items-baseline">
          <p className="text-base text-ProjectBlue font-industrySemiboldProximaNova font-semibold uppercase tracking-widest">{TermsData?.page?.[0]?.type?.[0]}</p>
          <h1 className="text-white tracking-subtitle text-[56px] my-[20px] font-industryBlack font-normal tracking-wide leading-tight uppercase">
            {TermsData?.title}
          </h1>
          <p className="text-[21px] text-white font-workSans leading-normal font-normal">
            Last Updated {retrieveDate}
          </p>
        </div>
      </div>
      <div className="w-screen px-5 lg:px-40 z-20">
        <div className="w-full max-w-screen-xl mx-auto pt-[6.5625rem] pb-[26.5625rem] flex flex-col items-baseline terms">
           {typeof window !== "undefined" ? renderRichText(TermsData?.text, options) : ""}
      </div>
    </div>
    </Layout >
  )
}

export default TermsOfService

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
