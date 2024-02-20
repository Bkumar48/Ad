import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Button from "@/components/Button/Button";
import parse from "html-react-parser";
import Image from "next/image";

interface Data {
  image: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  readTime: string;
}
interface BlogCardProps {
  data: Data;
}
const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="">
      <Card className="rounded-none ">
        <CardHeader className="p-4">
          <div className="mb-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}blog/${data.image}`}
              alt="Blog Image"
              height={400}
              width={800}
              placeholder="blur"
              blurDataURL="/banner1.webp"
              style={{ objectFit: "cover" }}
            />
          </div>
          <CardTitle className="line-clamp-2 font-nunito text-2xl ">
            {data.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="font-nunito text-lg text-left p-4 pt-0">
          <div className="line-clamp-3" dangerouslySetInnerHTML={{__html: data.description}}></div>
        </CardContent>
        <div className="p-4">
          <Button
            title="Read More"
            className="bg-white text-black  border-none"
            svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-28"
            type="button"
            navigateTo="/about"
          />
        </div>
        <Separator className="mx-auto w-[90%]" />
        <CardFooter className="justify-between pt-6">
          <p>{formatDate(data.createdAt)}</p>
          <p>{data.readTime || "2 min read"}</p>
        </CardFooter>
      </Card>
    </div>
  );
};
export default BlogCard;
