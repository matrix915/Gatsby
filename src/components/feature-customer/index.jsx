import React from "react"

const FeatureCustomer = ({ FeatureCustomerData }) => {

    const { title, customers } = FeatureCustomerData

    return (
        <div className={`${title ? "w-screen mx-auto bg-grey min-h-[620px] h-full py-10 px-5 lg:px-40 flex items-center justify-center flex-col" : "py-12"}`}>
            <div className="justify-center text-center pt-5 2xl:px-40">
                <p style={{ color: "#B5C7DC" }}>
                    {title}
                </p>
                <div 
                    className="flex flex-wrap justify-center items-center pt-6 w-full lg:w-auto"      
                    data-sal-duration="1000"
                    data-sal="slide-up"
                    data-sal-delay="600" 
                    >
                    {customers?.map((v, i) => (
                        <div className="p-5 lg:mx-5 w-1/2 lg:w-auto flex justify-center" key={i}>
                            <img
                                srcSet={
                                    `${v?.logo?.gatsbyImageData?.images?.sources?.[0].srcSet}?h=80 1x,
                                    ${v?.logo?.gatsbyImageData?.images?.sources?.[0]?.srcSet}?h=120 1.5x,
                                    ${v?.logo?.gatsbyImageData?.images?.sources?.[0]?.srcSet}?h=160 2x,
                                    ${v?.logo?.gatsbyImageData?.images?.sources?.[0].srcSet}?h=240 3x`
                                }
                                className="brand-image"
                                alt="Altas Logo"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeatureCustomer