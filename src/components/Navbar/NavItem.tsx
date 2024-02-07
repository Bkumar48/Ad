import { NAV_ITEMS } from "@/config";
import { Icons } from "../Icons/Icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import AnimatedLinks from "./AnimatedLinks";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

type NavItems = (typeof NAV_ITEMS)[number];

interface NavItemProps {
  navitems: NavItems;
  activeIndex: () => void;
}

const NavItem = ({ activeIndex, navitems }: NavItemProps) => {
  return (
    <>
      {navitems.subItems.length > 0 ? (
        <NavigationMenuItem className="h-24 flex items-center">
          {" "}
          <NavigationMenuTrigger>
            {" "}
            <AnimatedLinks title={navitems.label} />
          </NavigationMenuTrigger>
          {navitems.label === "Services" ? (<>

              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 lg:grid-cols-[1fr_.4fr]">
                  <li className="grid gap-3 grid-cols-3">
                    {navitems.subItems.map((subItem) => {
                      return (
                        <div key={subItem.name}>
                          <Link href={subItem.href} className="font-bold pb-2">
                            {subItem.name}
                          </Link>
                          <ul>
                            {subItem.subItems
                              ? subItem.subItems.map((subSubItem) => {
                                  return (
                                    <Link
                                      href={subSubItem.href}
                                      className="text-base"
                                      key={subSubItem.name}
                                    >
                                      <li className="flex items-center gap-2 py-1">
                                        <div className="w-[13px] h-[13px] rounded-sm bg-[#ddd]"></div>
                                        <p className="text-base">
                                          {" "}
                                          {subSubItem.name}
                                        </p>
                                      </li>
                                    </Link>
                                  );
                                })
                              : null}
                          </ul>
                        </div>
                      );
                    })}
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground ">
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
              </>
   
          ) : (
            <NavigationMenuContent className=" ">
              {
                <ul className="mx-auto px-4 py-4">
                  {navitems.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <Link href={subItem.href}>
                        <span className="font-bold">{subItem.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              }
            </NavigationMenuContent>
          )}
        </NavigationMenuItem>
      ) : (
        <>
        <NavigationMenuItem className="h-24 flex items-center">

          <Link href={navitems.href} >
            <NavigationMenuLink>
              <AnimatedLinks title={navitems.label} />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        </>
      )}
    </>
  );
};

export default NavItem;
