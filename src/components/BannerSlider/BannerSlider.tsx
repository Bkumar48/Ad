"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundImage, { Data } from "./BackgroundImage";
import BannerContent from "./BannerContent";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { Icons } from "../Icons/Icons";
import Link from "next/link";

const BannerSlider = () => {
  const [data, setData] = useState<Data[]>(sliderData);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <AnimatePresence initial={false}>
      <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[90dvh]">
        <div className=" hidden 3xl:flex absolute 3xl:right-[95%] top-1/2 -translate-y-1/2  z-10 flex-col justify-center items-center gap-8 ">
          <div className="w-0.5 h-48 bg-white" />
          <div>
            <Link href={process.env.NEXT_PUBLIC_FACEBOOK_URL || "/"}>
              <Icons.Facebook className="text-white text-4xl" />
            </Link>
          </div>
          <div>
            <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "/"}>
              <Icons.Instagram className="text-white text-4xl" />
            </Link>
          </div>
          <div>
            <Link href={process.env.NEXT_PUBLIC_TWITTER_URL || "/"}>
              <Icons.Twitter className="text-white text-4xl" />
            </Link>
          </div>
          <div className="w-0.5 h-48 bg-white" />
        </div>

        <BackgroundImage
          currentData={data[currentIndex]}
          nextData={data[(currentIndex + 1) % data.length]}
        />

        <MaxWidthWrapper className="absolute left-1/2 -translate-x-1/2 z-2 h-full  flex  justify-center md:justify-start">
          <div className="3xl:hidden md:flex hidden pr-10  flex-col justify-center items-center gap-8 ">
            <div className="w-0.5 md:h-32 lg:h-48 bg-white" />
            <div>
              <Link href={process.env.NEXT_PUBLIC_FACEBOOK_URL || "/"}>
                <Icons.Facebook className="text-white text-4xl" />
              </Link>
            </div>
            <div>
              <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "/"}>
                <Icons.Instagram className="text-white text-4xl" />
              </Link>
            </div>
            <div>
              <Link href={process.env.NEXT_PUBLIC_TWITTER_URL || "/"}>
                <Icons.Twitter className="text-white text-4xl" />
              </Link>
            </div>
            <div className="w-0.5 md:h-32 lg:h-48 bg-white" />
          </div>
          <div
            className={
              "w-full flex h-full items-end text-center md:text-left lg:w-3/6 md:w-[65%] pb-20"
            }
          >
            <BannerContent data={data[currentIndex]} />
          </div>
        </MaxWidthWrapper>
      </div>
    </AnimatePresence>
  );
};

export default BannerSlider;

const sliderData: Data[] = [
  {
    img: "/banner1.webp",
    title: "Digital Marketing Agency That Turns Businesses Into Brands",
    subHead: "Adaired Digital Media",
  },
  {
    img: "/banner2.webp",
    title: "Digital Marketing Agency That Turns Businesses Into Brands",
    subHead: "Adaired Digital Media",
  },
  {
    img: "/banner3.webp",
    title: "Digital Marketing Agency That Turns Businesses Into Brands",
    subHead: "Adaired Digital Media",
  },
];
