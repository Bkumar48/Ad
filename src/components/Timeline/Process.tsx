"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // track velocity of scroll to increase or decrease distance between svg gradient y coordinates.
  const scrollYProgressVelocity = useVelocity(scrollYProgress);
  const [velo, setVelocity] = React.useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);
  useEffect(() => {
    return scrollYProgressVelocity.onChange((latestVelocity) => {
      setVelocity(latestVelocity);
    });
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  return (
    <div ref={ref}>
      <div ref={contentRef} className="relative  h-dvh flex flex-col ">
        <div className="absolute left-1/2 -translate-x-1/2">
          <svg
            viewBox={`10 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight} // Set the SVG height
            className="  "
          >
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${svgHeight} l -18 24V ${svgHeight}`}
              fill="none"
              stroke="#9091A0"
              strokeWidth="5"
              strokeOpacity="0.16"
              transition={{
                duration: 10,
              }}
            ></motion.path>
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${svgHeight} l -18 24V ${svgHeight}`}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="5"
              className="motion-reduce:hidden"
              transition={{
                duration: 10,
              }}
            ></motion.path>
            <defs>
              <motion.linearGradient
                id="gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1} // set y1 for gradient
                y2={y2} // set y2 for gradient
              >
                <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                <stop stopColor="#18CCFC"></stop>
                <stop offset="0.325" stopColor="#6344F5"></stop>
                <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
              </motion.linearGradient>
            </defs>
          </svg>
        </div>

        <div className="flex justify-between flex-row-reverse">
          <div className="w-1/2" />
          <div className="w-1/2 border max-w-xs min-h-40 p-5 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-semibold">Discovery and Planning</h3>
            <p className="text-base">
              Research the business's landscape, target audience, and specific
              goals to create a roadmap, ensuring a solid foundation for
              success.
            </p>
          </div>
        </div>

        <div className="flex justify-between ">
          <div className="w-1/2" />
          <div className="w-1/2 border max-w-xs min-h-40 p-5 flex flex-col justify-center items-center text-center ">
            <h3 className="text-2xl font-semibold">Strategic Execution</h3>
            <p className="text-base">
              Seamlessly execute tailored strategies to elevate your brand and
              maximize your digital impact.
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-row-reverse">
          <div className="w-1/2" />
          <div className="w-1/2 border max-w-xs min-h-40 p-5 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-semibold">Comprehensive Analysis</h3>
            <p className="text-base">
              As the campaigns unfold, conduct in-depth analyses to measure
              performance, user engagement, and campaign effectiveness.
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="w-1/2" />
          <div className="w-1/2 border max-w-xs min-h-40 p-5 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-semibold">Ongoing Optimization</h3>
            <p className="text-base">
              Continuously optimize campaigns based on emerging trends, user
              behavior, and platform algorithms to remain adaptive and
              impactful.
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-row-reverse">
          <div className="w-1/2" />
          <div className="w-1/2 border max-w-xs min-h-40 p-5 flex flex-col justify-center items-center text-center ">
            <h3 className="text-2xl font-semibold">Evaluation and Reporting</h3>
            <p className="text-base">
              Regular evaluation and reporting provide valuable insights into
              strategy effectiveness, progress tracking, and decision-making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
