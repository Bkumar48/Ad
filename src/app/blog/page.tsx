import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import { cn, formatDate } from "@/lib/utils";
import PageBanner from "@/components/PageBanner/PageBanner";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

async function getBlogs({ limit, skip }: { limit: number; skip: number }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog/findBlog?limit=${limit}&skip=${skip}`
  );
  const data = await res.json();
  return data;
}

const Blog = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? 1;
  const limit = searchParams["limit"] ?? 5;
  const skip = (Number(page) - 1) * Number(limit);
  const data = await getBlogs({ limit: Number(limit), skip });
  const totalPages = Math.ceil(data.totalBlogsCount / Number(limit));

  return (
    <>
      <PageBanner title="Blog" />
      <MaxWidthWrapper className="py-6 lg:py-12">
        <div className="flex ">
          <div className="w-3/4 ">
            {data.result.map((blog: any) => {
              return (
                <figure className="border p-10 rounded-lg flex my-10">
                  <div className="w-[45%] object-cover ">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}blog/${blog.image}`}
                      height={400}
                      width={800}
                      placeholder="blur"
                      blurDataURL="/banner1.webp"
                      alt={blog.title}
                      className="-ml-14 rounded-lg"
                    />
                  </div>
                  <div className="w-[55%]">
                    <div className="flex items-center justify-between">
                      <p className="text-sm lg:text-base text-gray-500 mb-1">
                        {formatDate(blog.createdAt)}
                      </p>
                      <p className="text-sm lg:text-base text-gray-500 mb-1">
                        {Math.floor(Math.random() * 5) + 1 + " min read "}
                      </p>
                    </div>
                    <div>
                      <h2 className="font-nunito lg:text-2xl font-semibold mb-1">
                        {blog.title}
                      </h2>
                      <div className="line-clamp-2">
                        {parse(blog.description)}
                      </div>
                    </div>
                    <div>
                      <Button
                        title="Read More"
                        className="mt-4 bg-white text-black  border-none"
                        svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-28"
                        type="button"
                        navigateTo={`/blog/${blog.slug}`}
                      />
                    </div>
                  </div>
                </figure>
              );
            })}
            <Pagination>
              <PaginationContent>
                <PaginationPrevious
                  href={`/blog?page=${Number(page) - 1}`}
                  className={cn(
                    Number(page) === 1 || page === "undefined"
                      ? "pointer-events-none"
                      : ""
                  )}
                />
                {Array.from({ length: totalPages }, (_, i) => {
                  return (
                    <PaginationItem>
                      <PaginationLink
                        href={`/blog?page=${i + 1}`}
                        aria-label={`Go to page ${i + 1}`}
                        isActive={Number(page) === i + 1}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                <PaginationNext
                  href={`/blog?page=${Number(page) + 1}`}
                  className={cn(
                    Number(page) === totalPages || page === "undefined"
                      ? "pointer-events-none"
                      : ""
                  )}
                />
              </PaginationContent>
            </Pagination>
          </div>
          <div className="w-1/4"></div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Blog;
