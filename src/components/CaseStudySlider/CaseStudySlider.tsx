"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Button from "@/components/Button/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import { Icons } from "@/components/Icons/Icons";

const CaseStudySlider = () => {
  type DataItem = {
    sub_hd: string;
    bigheading: string;
    para: string;
    btn: string;
    img: string;
    clip_color: string;
  };

  const data: DataItem[] = [
    {
      sub_hd: "Case Studies",
      bigheading: "Search Engine Optimization",
      para: "Check out the success stories showcasing the groundbreaking capabilities of our strategic optimization techniques. Learn how we have propelled brands to the forefront of search rankings, driven organic traffic, and established long-term credibility.",
      btn: "View More",
      img: "/case1.webp",
      clip_color: "#3F9C2D09",
    },
    {
      sub_hd: "Success Stories",
      bigheading: "Paid Media & Advertising",
      para: "Gain insights into the potency of our precisely targeted PPC campaigns. We have successfully transformed our clients' advertising expenses into evident business expansion, optimizing their ROI, and enhancing customer engagement.",
      btn: "View More",
      img: "/case2.webp",
      clip_color: "#EA5E5509",
    },
    {
      sub_hd: "Project Highlights",
      bigheading: "Web Designing And Development Case Studies",
      para: "Explore the impact of our recent Web Designing and Development projects. With technical proficiency and a creative knack, we offer our clients visually striking and structurally resilient digital solutions.",
      btn: "View More",
      img: "/case3.webp",
      clip_color: "#3BC0F309",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  return (
    <>
      <section
        className="case-study-slider"
        style={{
          clipPath:
            "polygon(100% 0%, 0% 0%, 0% 99.89%, 2.5% 99.74%, 5% 99.29%, 7.5% 98.57%, 10% 97.64%, 12.5% 96.57%, 15% 95.42%, 17.5% 94.28%, 20% 93.23%, 22.5% 92.35%, 25% 91.69%, 27.5% 91.31%, 30% 91.23%, 32.5% 91.46%, 35% 91.97%, 37.5% 92.74%, 40% 93.71%, 42.5% 94.81%, 45% 95.96%, 47.5% 97.09%, 50% 98.1%, 52.5% 98.94%, 55% 99.53%, 57.5% 99.85%, 60% 99.85%, 62.5% 99.56%, 65% 98.98%, 67.5% 98.16%, 70% 97.15%, 72.5% 96.03%, 75% 94.88%, 77.5% 93.77%, 80% 92.79%, 82.5% 92.01%, 85% 91.48%, 87.5% 91.24%, 90% 91.3%, 92.5% 91.66%, 95% 92.31%, 97.5% 93.18%, 100% 94.22%)",
        }}
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
        >
          <CarouselContent>
            {data.map((item) => (
              <CarouselItem
                key={item.sub_hd}
                className={`lg:px-10 py-6 md:py-12  }`}
                style={{
                  backgroundColor: item.clip_color,
                }}
              >
                <MaxWidthWrapper
                  className={`flex gap-5 items-center flex-col-reverse lg:flex-row min-h-[400px]`}
                >
                  <div
                    className={`flex-1 pb-12 flex flex-col items-center text-center lg:text-left lg:items-start lg:pb-0`}
                  >
                    <h5 className="inline font-nunito text-[#515151] relative lg:pl-20 text-lg">
                      <div className="absolute top-1/2 -left-2/4 lg:left-0 transform -translate-y-1/2 bg-[#A7A9AC] h-px w-10 lg:w-16 "></div>
                      <div className="lg:hidden absolute top-1/2 -right-2/4 transform -translate-y-1/2 bg-[#A7A9AC] h-px w-10 lg:w-16"></div>
                      {item.sub_hd}
                    </h5>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl py-1">
                      {item.bigheading}{" "}
                    </h2>
                    <p className="py-1">{item.para}</p>
                    <Button
                      title="View More"
                      className="bg-white text-black mt-5"
                      svgContainerClassName="group-hover:right-[64.9%]"
                      svgClassName="bg-[#F89520]"
                      type="button"
                      navigateTo="/case-studies"
                    />
                  </div>
                  <div className={`flex-1 flex justify-end`}>
                    <Image
                      src={item.img}
                      alt="Case Study Slide Image"
                      width={700}
                      height={350}
                    />
                  </div>
                </MaxWidthWrapper>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block left-0 bg-white rounded-none h-12 w-6 rounded-tr-lg rounded-br-lg" >
          <Icons.AngleLeft />
          </CarouselPrevious>
          <CarouselNext className="hidden md:block right-0 bg-white rounded-none h-12 w-6 rounded-tl-lg rounded-bl-lg" >
          <Icons.AngleRight />

          </CarouselNext>
        </Carousel>
      </section>
    </>
  );
};

export default CaseStudySlider;
