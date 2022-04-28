import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import RequestForm from "../components/request-form"
import TrustedAgency from "../components/trusted-agency"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const GetADemo = ({ data }) => {
  const pageData = data.allContentfulPage.edges[2].node.sections
  const { formFieldGroups, guid } = data.hubspotForm

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

  const formLeft = pageData[1]

  return (
    <Layout NavbarData={pageData[0]} FooterData={pageData[3].footerColumns}>
      <div className="w-full bg-black mx-auto relative pt-[104px]">
        <div className="flex flex-col items-start justify-between w-full max-w-screen-2xl px-5 lg:px-40 2xl:pl-[130px] 2xl:pr-[120px] py-5 mx-auto md:flex-row">
          {/* Section One (Text) */}
          <div className="w-full md:w-1/2 mr-[67px]">
            <h4 className="text-sm my-0 md:text-base font-bold tracking-wider uppercase text-ProjectBlue font-robotoMono leading-[21px] pb-[10px]">
              {formLeft.tagline}
            </h4>
            <h1 className="text-[28px] py-[10px] md:text-[54px] my-0 trackig-wide uppercase text-ProjectBlack font-industryBlack not-italic leading-[120%] font-normal md:max-w-[546px]">
              {formLeft.title}
            </h1>
            <p className="text-ProjectBlack my-0 py-[10px] font-workSans font-normal leading-[150%] max-w-[500px] mt-4 text-left text-base md:text-[19px]">
              {formLeft.description}
            </p>

            <div className="mt-[73px] render-sales-text">
              {typeof window !== "undefined" ? renderRichText(formLeft.richText, options) : ""}
            </div>
          </div>
          {/* Setion Two (Form) */}
          <div className="w-full md:w-[560px] mt-[37.5px] md:mt-0">
            <RequestForm formFieldGroups={formFieldGroups} id={guid} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default GetADemo

export const query = graphql`
  query {
    hubspotForm(id: { eq: "c6a3e9be-76a2-4bd9-8164-7bde5d1ce220" }) {
      guid
      portalId
      name
      submitText
      redirect
      formFieldGroups {
        fields {
          label
          name
          required
          fieldType
          placeholder
          options {
            label
            value
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
