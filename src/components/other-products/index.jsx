import React from "react"
import Button from "../button"

const OtherProducts = () => {
  return (
    <div className="w-screen mx-auto bg-ProjectBlack">
      <div className="max-w-screen-xl w-full px-3 mx-auto py-10">
        <div className="my-5">
          <h1 className="text-center font-industryBold font-normal text-[44px] leading-[120%] text-black">
            Explore our suite of products
          </h1>
        </div>
        <div className="flex items-start justify-between flex-wrap">
          {[1, 2, 3].map(item => (
            <div className="my-5 w-[350px]" key={item}>
              <img
                src={require("../../assets/Rectangle 337.png").default}
                alt="Other Product"
                className="w-20 h-20"
              />
              <h3 className="font-industryBold font-normal text-[21px] leading-[140%] text-black">
                Outbound Messaging
              </h3>
              <p className="font-workSans font-normal text-[17px] leading-[150%] text-black my-3">
                How about I put a few sentances here that look good to everyone?
                Mayube we can do about ...
              </p>
              <Button
                link="learn-more"
                title="Learn More"
                borderColor="black"
                textColor="ProjectBlack"
                bgColor="black"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OtherProducts
