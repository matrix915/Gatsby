import React from "react"
import Button from "../button"

const TalkToAnExpert = ({ CalltoAction }) => {
  return (
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center w-full max-w-screen-xl px-3 py-20 mx-auto ">
        <h1 className="text-ProjectBlack tracking-wide text-center text-[56px] font-industryBold font-normal leading-[120%] my-3 max-w-[720px]">
          {CalltoAction.title}
        </h1>
        <p className="font-workSans font-normal text-[19px] text-center text-ProjectBlack  max-w-[556px] leading-[150%] tracking-wide">
          Connect with an Atlas One product expert today to learn how to
          modernize your citizen engagement strategy
        </p>
        <div className="flex items-center justify-center mt-10">
          {CalltoAction.buttons.map((button, ind) => (
            <div className="mr-5" key={ind}>
              <Button
                title={button.title}
                link="sales"
                variant={ind === 0 ? "secondary" : "primary"}
                theme={button.theme[0].toLowerCase()}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TalkToAnExpert
