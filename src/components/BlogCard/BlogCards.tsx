import React from "react";
import BlogCard from "@/components/BlogCard/BlogCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import Button from "../Button/Button";

async function getBlogsData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/findBlog?limit=3&skip=0`
  );
  const data = await res.json();

  return data.result;
}

const BlogCards: React.FC = async () => {
  const data = await getBlogsData();

  return (
    <section className="py-3 md:py-12">
      <MaxWidthWrapper className="text-center">
        <div>
          <h5 className="inline font-nunito text-[#515151] relative px-4 text-lg">
            <div className="absolute top-1/2 left-full transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
            <div className="absolute top-1/2 right-full transform -translate-y-1/2 bg-[#A7A9AC] h-px w-16"></div>
            Blog
          </h5>
          <h2 className="text-3xl md:text-4xl py-3">
            Update On The Latest Marketing Trends And Tech
          </h2>
          <p className="py-3">
            You can never miss an update with Adaried! Explore our blogs for
            insightful information and stay ahead with specially curated content
            by industry experts.
          </p>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* {data.map((blog: any) => (
          <BlogCard key={blog._id} data={blog} />
        ))} */}
        {data.map((blog: any, index: number) => (
          <div
            key={blog._id}
            className={` ${index === data.length - 1 ? "hidden lg:block" : ""}`}
          >
            <BlogCard data={blog} />
          </div>
        ))}
      </MaxWidthWrapper>
      <MaxWidthWrapper className="flex items-center justify-center">
        <Button
          title="View More"
          className="bg-white text-black mt-5"
          svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-28"
          type="button"
          navigateTo="/about"
        />
      </MaxWidthWrapper>
    </section>
  );
};

export default BlogCards;
