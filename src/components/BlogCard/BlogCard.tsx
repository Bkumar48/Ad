import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  return (
    <div className="m-5">
      <Card className="rounded-none md:w-6/12 lg:w-4/12">
        <CardHeader>
          <Image
          src="/banner1.webp"
          alt="Blog Image"
          layout="responsive"
          height={300}
          width={500}
          />
          <CardTitle>Overcoming Common Concerns When Switching To Google Analytics 4</CardTitle>
        </CardHeader>
        <CardContent>
          <p>If you want to make the most of the features in Google Analytics 4, this guide is here to help!  Currently, there are approximately 28.1 million</p>
        </CardContent>
        <CardFooter className="justify-between">
          <p>July 7, 2023</p>
          <p>July 7, 2023</p>
        </CardFooter>
      </Card>
      
    </div>
  );
};
export default BlogCard;
