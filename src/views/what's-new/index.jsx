import React from "react"
import BlogCard from "../../components/blog-card"
import Button from "../../components/button"
import { BlogPosts } from "./data"

const WhatsNew = () => {
  return (
    <div className="w-screen mx-auto my-5 md:my-20 ">
      <div className="w-full px-5 mx-auto max-w-screen-2xl lg:px-40">
        <div className="flex flex-wrap items-center justify-between my-10">
          <p className="font-industryBold font-normal text-5xl text-black leading-[120%]">
            What’s new at Atlas One
          </p>
          <Button
            title="See all News"
            link="news"
            bgColor="black"
            textColor="ProjectBlack"
            borderColor="black"
          />
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-start justify-center md:justify-between ">
          {BlogPosts.map(data => (
            <BlogCard
              title={data.title}
              heading={data.heading}
              description={data.description}
              link={data.link}
              key={data.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhatsNew
