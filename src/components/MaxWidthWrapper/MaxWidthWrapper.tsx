import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1440px] px-2.5 md:px-4", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
