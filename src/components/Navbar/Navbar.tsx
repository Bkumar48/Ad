import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { Icons } from "./../Icons/Icons";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-24">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="relative">
            <div className="flex h-24 items-center">
              {/* TODO: Mobile Nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-auto w-auto" />
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 ">
                  <NavItems />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
