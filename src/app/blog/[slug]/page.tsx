import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import React from "react";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import parse from "html-react-parser";
import PageBanner from "@/components/PageBanner/PageBanner";

async function getBlogs({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/${params.slug}`
  );
  const data = await res.json();
  return data.result[0];
}

interface BlogProps {
  params: {
    slug: string;
  };
}

const Blog: React.FC<BlogProps> = async ({ params }) => {
  const data = await getBlogs({ params });

  return (
    <>
      <PageBanner title="Blog" />
      <MaxWidthWrapper className="flex py-6 lg:py-12">
        <div className="flex-1 border p-10">
          <div>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}blog/${data.image}`}
              height={560}
              width={1000}
              placeholder="blur"
              blurDataURL="/banner1.webp"
              alt={data.title}
            />
          </div>
          <h2 className="text-[1.688rem] md:text-4xl py-4">{data.title}</h2>
          <p>{formatDate(data.createdAt)}</p>
          <div>{parse(data.description)}</div>
        </div>
        <div className="w-1/4"></div>
      </MaxWidthWrapper>
    </>
  );
};

export default Blog;
