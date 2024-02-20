import { NAV_ITEMS } from "@/config";
import { Icons } from "../Icons/Icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import AnimatedLinks from "./AnimatedLinks";

type NavItems = (typeof NAV_ITEMS)[number];

interface NavItemProps {
  navitems: NavItems;
  activeIndex: () => void;
}

const NavItem = ({ activeIndex, navitems }: NavItemProps) => {
  return (
    <div className="flex justify-center">
      <div className={cn("flex  items-center group")}>
        <Link
          className="gap-1 font-semibold flex items-center h-24 px-2 relative hover:after:w-[100%] after:absolute after:content-[''] after:h-[3px] after:w-[0%] after:bg-[#aaa] after:bottom-0 after:left-0 after:transition-all after:duration-300"
          href={navitems.href}
          onClick={activeIndex}
        > 
          <AnimatedLinks title={navitems.label} />
          {(navitems.subItems || navitems.childrens) && (
            <Icons.IcBaselineArrowDropDown
              className={cn(
                "h-4 w-4 transition-all text-muted-foreground group-hover:rotate-180"
              )}
            />
          )}
        </Link>
        {navitems.subItems ? (
          <div className="absolute top-full text-sm text-muted-foreground inset-x-0 bg-white left-0 rounded-bl-lg rounded-br-lg shadow-lg transition-all duration-300 origin-top scale-y-0 pointer-events-none group-hover:scale-y-100 group-hover:pointer-events-auto">
            <div className="mx-auto px-4 py-4">
              <div className="flex rounded-bl-lg rounded-br-lg">
                <div className="grid grid-cols-3 gap-8 py-4 w-9/12">
                  {navitems.subItems.map((subItem) => (
                    <div
                      className="relative text-base sm:text-sm"
                      key={subItem.name}
                    >
                      <Link
                        href={subItem.href}
                        className="block font-medium text-gray-900 pb-2"
                      >
                        <span className="font-bold "> {subItem.name}</span>
                      </Link>
                      <ul>
                        {subItem.subItems
                          ? subItem.subItems.map((subSubItem) => {
                              return (
                                <li
                                  key={subSubItem.name}
                                  className="flex items-center gap-2 py-1"
                                >
                                  <div className="w-[13px] h-[13px] rounded-sm bg-[#ddd]"></div>
                                  <Link
                                    href={subSubItem.href}
                                    className="text-base"
                                  >
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
                <div className="bg-[#f3fdff] flex-none w-3/12"></div>
              </div>
            </div>
          </div>
        ) : navitems.childrens ? (
          <div className="min-w-40 absolute top-full text-sm text-muted-foreground bg-white rounded-bl-lg rounded-br-lg shadow-lg transition-all duration-300 origin-top scale-y-0 pointer-events-none group-hover:scale-y-100 group-hover:pointer-events-auto ">
            <div className="mx-auto px-4 py-4">
              {navitems.childrens.map((children) => (
                <div key={children.name} className="text-base sm:text-sm">
                  <Link
                    href={children.href}
                    className="block font-medium text-gray-900 py-2"
                  >
                    <span> {children.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavItem;
