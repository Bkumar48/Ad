"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import ShadeLighter from "../ShadeLighter/ShadeLighter";
import Button from "../Button/Button";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    list: string[];
    mainSvg: string;
    hoverSvg: string;
    accentColor?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ",
        className
      )}
    >
      {items.map((item, idx) => {
        const lightenedColor = ShadeLighter(item.accentColor || "", 0.7);
        return (
          <div
            key={item?.link}
            className="relative group block p-4 h-full w-full "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute left-1 bottom-1 h-[90%] w-[90%] dark:bg-slate-800/[0.8] block "
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 1.5 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.1 },
                  }}
                  style={{
                    backgroundColor: lightenedColor,
                  }}
                />
              )}
            </AnimatePresence>
            <Card
              className={`group flex flex-col items-center text-center justify-center p-4 min-h-[450px] max-h-[400px] `}
              style={{
                borderColor: item.accentColor,
              }}
            >
              <div>
                <Image
                  src={item.mainSvg}
                  alt="Service Image"
                  height={120}
                  width={120}
                />
              </div>
              <CardTitle className="font-nunito text-2xl">
                {item.title}
              </CardTitle>
              <CardDescription className="text-lg font-[#515151] mt-2">
                {item.description}
              </CardDescription>
              <div
                className="absolute w-5 h-5 bottom-5 right-0"
                style={{
                  backgroundColor: lightenedColor,
                }}
              />
              <div
                style={{
                  backgroundColor: item.accentColor,
                }}
                className="absolute bottom-0 right-0 h-5 w-5 group-hover:h-full group-hover:w-full transition-all duration-300"
              >
                <div className="hidden group-hover:block text-left p-6 text-white">
                  <div>
                    <Image
                      src={item.hoverSvg}
                      alt="Service Image"
                      height={80}
                      width={80}
                      className="text-white"
                    />
                  </div>
                  <h4 className="py-2  text-xl md:text-2xl font-nunito">
                    {item.title}
                  </h4>
                  <ul className="marker:text-white list-disc pl-5  ">
                    {item.list.map((listItem, index) => {
                      return (
                        <li className="text-base md:text-lg" key={index}>
                          {listItem}
                        </li>
                      );
                    })}
                  </ul>
                  <Button
                    title="View More"
                    className="bg-white text-black mt-5"
                    svgClassName="bg-[#F89520] right-2.5 group-hover/btn:right-28"
                    type="button"
                    navigateTo="/about"
                  />
                </div>
              </div>
              <div
                className="absolute w-5 h-5 bottom-0 right-5"
                style={{
                  backgroundColor: lightenedColor,
                }}
              />
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export const Card = ({
  props,
  className,
  children,
  style,
}: {
  props?: any;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "h-full w-full p-4 overflow-hidden border z-20 relative",
        className
      )}
      style={style} 
      {...props}
    >
      {children}
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
