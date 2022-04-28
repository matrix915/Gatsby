import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProductCard from "../components/product-card"
import Testimonial from "../components/testimonial"
import TrustedAgency from "../components/trusted-agency"
import Benefits from "../views/benefits"
import Hero from "../views/hero"
import OurProducts from "../views/our-products"
import WhatsNew from "../views/what's-new"
import TalkToAnExpert from "../components/talk-to-an-expert"
import FeatureCustomer from "../components/feature-customer"

export default function Home({ data }) {
  const pageData = data.allContentfulPage.edges[4].node.sections
  const HeroData = pageData[2]
  const OurPlatformData = pageData[4]
  const OurProductData = pageData.slice(8, 12)
  const TrustedAgencyData = pageData[5]
  const FeatureCustomerData = pageData[5]

  return (
    <Layout
      NoticeData={pageData[0]}
      NavbarData={pageData[1]}
      FooterData={pageData[14]?.footerColumns}
    >
      <Hero HeroData={HeroData} />
      <Benefits
        variant={pageData[3]?.theme[0].toLowerCase()}
        // heading="A single platform to realize your investment in citizen engagement"
        benefit1={pageData[3]?.benefit1}
        benefit2={pageData[3]?.benefit2}
        benefit3={pageData[3]?.benefit3}
      />
      <FeatureCustomer FeatureCustomerData = {FeatureCustomerData}></FeatureCustomer>
      <ProductCard
        alignment={OurPlatformData?.alignment[0].toLowerCase()}
        theme={OurPlatformData?.theme[0].toLowerCase()}
        content={OurPlatformData?.contentBlocks}
      />
      <OurProducts OurProductsData={pageData[7]} />
      {OurProductData?.map((item, index) => (
        <ProductCard
          alignment={item?.alignment[0].toLowerCase()}
          theme={item?.theme[0].toLowerCase()}
          content={item?.contentBlocks}
          key={index}
        />
      ))}
      <Testimonial />
      <WhatsNew />
      <TalkToAnExpert CalltoAction={pageData[13]} />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allContentfulPage {
      edges {
        node {
          sections {
            ... on ContentfulHero {
              heroBackgroundGradient
              heroBackgroundImage {
                file {
                  url
                }
                title
              }
              content {
                actionText
                actionUrl
                contentBlockDescription {
                  raw
                }
                contentBlockTagline
                contentBlockTitle
              }
              heroType
            }
            ... on ContentfulCustomersSection {
              title
              customers {
                customerName
                logo {
                  title
                  description
                  gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                }
              }
            }
            ... on ContentfulSection {
              alignment
              sectionName
              theme
              contentBlocks {
               actionText
                actionUrl
                contentBlockDescription {
                  raw
                }
                contentBlockTitle
                contentBlockTagline
              }
            }
            ... on ContentfulBenefits {
              benefit1
              benefit2
              benefit3
              theme
            }
            ... on ContentfulSectionHeader {
              theme
              title
              tagline
              description {
                raw
              }
              alignment
            }
            ... on ContentfulNotice {
              theme
              noticeTitle {
                raw
              }
              noticeActionText
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
            }
            ... on ContentfulCallToAction {
              theme
              title
              buttons {
                ... on ContentfulSecondaryButton {
                  theme
                  title
                }
                ... on ContentfulPrimaryButton {
                  id
                  theme
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`
