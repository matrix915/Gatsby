import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import RequestForm from "../components/request-form"
import { BLOCKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const PrivacyPolicy = ({ data }) => {

  const pageData = data.allContentfulPage.edges[3].node.sections
  const { formFieldGroups, guid } = data.hubspotForm
  const pageDatas = data.allContentfulPage.edges
  const PolicyData = pageDatas.filter(
    pageData => {
      const title = pageData?.node?.title
      if (title.includes("Privacy Policy")) {
        return pageData
      }
    }
  )
  const NavbarData = PolicyData[0]?.node?.sections?.[0]
  const FooterData = PolicyData[0]?.node?.sections?.[2]?.footerColumns
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
          <p className="text-base text-[#00AEEF] font-industryBold">Legal</p>
          <h1 className="text-white tracking-subtitle text-[3.5rem] leading-tight font-bold my-2 font-industryBlack ">
            {PolicyData[0]?.node?.title}
          </h1>
          <p className="text-base text-white">
          Last Updated January 24th, 2021
          </p>
        </div>
      </div>
      <div className="w-screen px-5 lg:px-40 z-20">
        <div className="w-full max-w-screen-xl mx-auto py-[6.5rem] flex flex-col items-baseline">
          <p className="font-industryMedium">MobilePD, Inc.</p>
          <p className="font-industryMedium">3215 Gonzales St.  Unit 1101</p>
          <p className="font-industryMedium">Austin, Texas 78702</p>
          <p className="font-industryMedium">help@atlas.one</p>
          <p className="font-industryMedium">&nbsp;</p>
          <p className="font-industryMedium">This page represents a legal document and is the Terms and Conditions (Agreement) for our Websites, https://www.atlas.one, https://atlasone.app, and our mobile application and software as a service named Atlas One, collectively and hereinafter called “Platform.</p>
          <p className="font-industryMedium">&nbsp;</p>
          <p className="font-industryBold text-[1.75rem]">Definitions</p>
          <p className="font-industryMedium">‘NONPERSONAL DATA’ (NPD) is information that is in no way personally identifiable.</p>
          <p className="font-industryMedium">&nbsp;</p>
          <p className="font-industryMedium">‘PERSONAL DATA’ (PD) means any information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified directly or indirectly by reference to an identifier such as a name, an identification number, location data, an online identifier, or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural, or social identity of that natural person. PD is in many ways the same as Personally Identifiable Information (PII). However, PD is broader in scope and covers more data.</p>
      </div>
    </div>
    </Layout >
  )
}

export default PrivacyPolicy

export const query = graphql`
  query {
    hubspotForm(id: { eq: "72bc3258-dc2b-4b6d-ab52-1defd4c73e64" }) {
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
