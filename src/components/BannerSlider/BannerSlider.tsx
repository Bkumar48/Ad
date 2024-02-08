"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundImage, { Data } from "./BackgroundImage";
import BannerContent from "./BannerContent";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";

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
      <div className="relative h-svh ">
        <BackgroundImage
          currentData={data[currentIndex]}
          nextData={data[(currentIndex + 1) % data.length]}
        />
        <MaxWidthWrapper>
          <div className="absolute z-2 h-full py-7 flex items-end justify-center md:justify-start">
            <div className={"w-full text-center md:text-left lg:w-3/6 md:w-[65%]"}><BannerContent data={data[currentIndex]} /></div>
            
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
