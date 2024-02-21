import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";

const PageBanner = ({ title }: { title: string }) => {
  return (
    <div className="bg-[#FAFAFA]">
      <MaxWidthWrapper className="py-28">
        <h1 className="text-4xl md:text-6xl ">{title}</h1>
      </MaxWidthWrapper>
    </div>
  );
};

export default PageBanner;
