import { motion, Variants } from "framer-motion";

type AnimatedTextProps = {
  data: string;
  className: string;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ data, className }) => {
  const item: Variants = {
    hidden: {
      y: "100%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.6 },
    },
    visible: {
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 1.2,
        // type: "spring",
      },
    },
  };

  return (
    <>
      <span
        style={{
          display: "inline-block",
          overflow: "hidden",
        }}
      >
        <motion.h1 className={className} variants={item} key={data}>
          {data}
        </motion.h1>
      </span>
    </>
  );
};

type SlideInfoTextProps = {
  data: {
    subHead: string;
    title: string;
  };
};

const SlideInfoText: React.FC<SlideInfoTextProps> = ({ data }) => {
  return (
    <motion.div
      initial="hidden"
      animate={"visible"}
      className="banner-slider__info"
    >
      <AnimatedText data={data?.subHead} className="banner-slider__subhead" />
      <AnimatedText data={data?.title} className="banner-slider__title" />
    </motion.div>
  );
};

type BannerContentProps = {
  transitionData: any; // Define the type for transitionData according to your requirements
  currentSlideData: {
    data: {
      subHead: string;
      title: string;
    };
  };
};

const BannerContent: React.FC<BannerContentProps> = ({
  transitionData,
  currentSlideData,
}) => {
  return (
    <>
      <SlideInfoText
        data={transitionData ? transitionData : currentSlideData.data}
      />
      <motion.div layout className="banner-slider__btn"></motion.div>
    </>
  );
};

export default BannerContent;
