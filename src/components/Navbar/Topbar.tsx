import React from "react";
import { Separator } from "../ui/separator";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";

const Topbar = () => {
  return (
    <div className={"bg-[#EEEEEE] h-10 flex  items-center"}>
      <MaxWidthWrapper className="flex gap-2 justify-center items-center sm:justify-end">
        <div>
          <Link href="/" className="flex gap-1 sm:gap-2 items-center">
            <div>
              <Image
                src="/us_flag.webp"
                width={30}
                height={15}
                alt="In"
                priority
              />
            </div>

            <p className=" text-xs sm:text-base">+1 (205) 273-6006</p>
          </Link>
        </div>
        <Separator orientation="vertical" className="bg-[#D9D9D9] h-6 w-0.5" />
        <div>
          <Link href="/" className="flex gap-1 sm:gap-2 items-center">
            <Image
              src="/in_flag.webp"
              width={30}
              height={15}
              alt="In"
              priority
            />
            <p className=" text-xs sm:text-base">+91 8907400008</p>
          </Link>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Topbar;
