import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import { formatDate } from "@/lib/utils";

const Blog = () => {
  return (
    <>
      <figure className="border p-10">
        <div>
          <Image
            // src={`${process.env.NEXT_PUBLIC_IMAGE_URL}blog/${data.image}`}
            src={`/banner1.webp`}
            alt="Blog Image"
            height={400}
            width={800}
            placeholder="blur"
            blurDataURL="/banner1.webp"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <div>
            <p></p>
            <p></p>
          </div>
          <div></div>
          <div>
            <Button
              title="Send Your Enquiry"
              className="bg-white text-black mt-5"
              svgClassName="bg-[#F89520] group-hover/btn:right-[11rem]"
              type="submit"
            />
          </div>
        </div>
      </figure>
    </>
  );
};

export default Blog;
