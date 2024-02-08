// import { motion, Variants } from "framer-motion";

// type AnimatedTextProps = {
//   data: string;
//   className: string;
// };

// const AnimatedText: React.FC<AnimatedTextProps> = ({ data, className }) => {
//   const item: Variants = {
//     hidden: {
//       y: "100%",
//       transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.6 },
//     },
//     visible: {
//       y: 0,
//       transition: {
//         ease: [0.455, 0.03, 0.515, 0.955],
//         duration: 1.2,
//         // type: "spring",
//       },
//     },
//   };

//   return (
//     <>
//       <span
//         style={{
//           display: "inline-block",
//           overflow: "hidden",
//         }}
//       >
//         <motion.h1 className={className} variants={item} key={data}>
//           {data}
//         </motion.h1>
//       </span>
//     </>
//   );
// };

// type SlideInfoTextProps = {
//   data: {
//     subHead: string;
//     title: string;
//   };
// };

// const SlideInfoText: React.FC<SlideInfoTextProps> = ({ data }) => {
//   return (
//     <motion.div
//       initial="hidden"
//       animate={"visible"}
//       className="banner-slider__info"
//     >
//       <AnimatedText data={data?.subHead} className="banner-slider__subhead" />
//       <AnimatedText data={data?.title} className="banner-slider__title" />
//     </motion.div>
//   );
// };

// type BannerContentProps = {
//   transitionData: any;
//   data: {
//     data: {
//       subHead: string;
//       title: string;
//     };
//   };
// };

// const BannerContent: React.FC<BannerContentProps> = ({
//   data,
//   currentSlideData,
// }) => {
//   return (
//     <>
//       <SlideInfoText
//         data={data ? data : currentSlideData.data}
//       />
//       <motion.div layout className="banner-slider__btn"></motion.div>
//     </>
//   );
// };

// export default BannerContent;

// BannerContent.tsx

import React from "react";
import { Data } from "./BackgroundImage";
import Button from "../Button/Button";

type BannerContentProps = {
  data: Data;
};

const BannerContent: React.FC<BannerContentProps> = ({ data }) => {
  return (
    <div className="text-white">
      <span>{data.subHead}</span>
      <h1 className="transition-all text-[30px] 2xl:text-[56px] xl:text-[50px] lg:text-[42px] md:text-[35px] sm:text-[30px]">
        {data.title}
      </h1>
      <Button
        title="Click me"
        icon="ArrowRightBroken"
        svgClassName="bg-white p-3"
        // onClick={""}
      />
    </div>
  );
};

export default BannerContent;
