import React from "react";
import { Separator } from "../ui/separator";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Link from "next/link";
import { Icons } from "../Icons/Icons";

const Topbar = () => {
  return (
    <div className={"bg-[#EEEEEE] h-10 flex  items-center"}>
      <MaxWidthWrapper className="flex gap-2 justify-center items-center sm:justify-end">
        <div>
          <Link
            href="tel:+12052736006"
            className="flex gap-1 sm:gap-2 items-center"
          >
            <div>
              <Icons.UsFlag className="h-8 w-8" />
            </div>

            <p className=" text-xs sm:text-base">+1 (205) 273-6006</p>
          </Link>
        </div>
        <Separator orientation="vertical" className="bg-[#D9D9D9] h-6 w-0.5" />
        <div>
          <Link
            href="tel:+918907400008"
            className="flex gap-1 sm:gap-2 items-center"
          >
            <Icons.IndianFlag className="h-8 w-8" />
            <p className=" text-xs sm:text-base">+91 8907400008</p>
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Topbar;
