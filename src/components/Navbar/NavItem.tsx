import { NAV_ITEMS } from "@/config";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavItems = (typeof NAV_ITEMS)[number];

interface NavItemProps {
  navitems: NavItems;
  activeIndex: () => void;
}

const NavItem = ({ activeIndex, navitems }: NavItemProps) => {
  return (
    <div className="flex  justify-center">
      <div className=" flex items-center">
        <Link
          className="gap-1 font-semibold flex items-center h-20"
          href={navitems.href}
          onClick={activeIndex}
        >
          {navitems.label}
          {navitems.subItems && (
            <ChevronDown
              className={cn("h-4 w-4 transition-all text-muted-foreground")}
            />
          )}
        </Link>
        {navitems.subItems && (
          <div className="absolute top-full text-sm text-muted-foreground w-full bg-white left-0 rounded-bl-lgpad">
            <div className="relative bg-white ">
              <div className="mx-auto px-4 py-4">
                <div className="flex">
                  <div className="grid grid-cols-3 gap-x-8 gap-y-10 py-4 w-9/12">
                    {navitems.subItems.map((subItem) => (
                      <div
                        className="group relative text-base sm:text-sm"
                        key={subItem.name}
                      >
                        <Link
                          href={subItem.href}
                          className="block font-medium text-gray-900 py-2"
                        >
                          <span className="font-semibold">
                            {" "}
                            {subItem.name}
                          </span>
                        </Link>
                        <ul>
                          {subItem.subItems
                            ? subItem.subItems.map((subSubItem) => {
                                return (
                                  <li
                                    key={subSubItem.name}
                                    className="flex items-center gap-2 py-2"
                                  >
                                    <div className="w-[13px] h-[13px] rounded bg-[#ddd] text-[0px]"></div>
                                    <Link href={subSubItem.href}>
                                      {subSubItem.name}
                                    </Link>
                                  </li>
                                );
                              })
                            : null}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#f3fdff] flex-none w-3/12">hello</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavItem;
