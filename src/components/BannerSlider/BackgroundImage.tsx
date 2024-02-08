import { motion, Variants } from "framer-motion";
import Image from "next/image";

export type Data = {
  img: string;
  title: string;
subHead:string;
};

type BackgroundImageProps = {
  currentData: Data;
  nextData: Data;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  currentData,
  nextData,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0},
    visible: { opacity: 1 },
  };

  return (

    <>
      <motion.div
        key={currentData.img}
        initial="visible"
        animate="hidden"
        exit="hidden"
        variants={containerVariants}
        transition={{
          opacity: { duration: 0.5 ,ease: "easeOut"}, 
        }}
        className="absolute left-0 top-0 z-1 h-full w-full current"
      >
        <Image src={currentData.img} fill priority alt="Current Banner Image" />
      </motion.div>

      <motion.div
        key={nextData.img}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
        transition={{
          opacity: { duration: 0.5 ,ease: "easeOut"}, 
        }}
        className="absolute left-0 top-0 z-1 h-full w-full"
      >
        <Image src={nextData.img} fill priority alt="Next Banner Image" />
      </motion.div>
      </>

  );
};

export default BackgroundImage;
