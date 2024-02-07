"use client";
import React, { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/config";
import NavItem from "./NavItem";
import { PopupButton } from "react-calendly";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [rootElement, setRootElement] = useState<HTMLElement>();

  useEffect(() => {
    const rootEl = document.getElementById("root");
    if (rootEl) {
      setRootElement(rootEl);
    }
  }, []);

  return (
    <NavigationMenu >
      <NavigationMenuList>
        <div className="flex gap-10 h-full">
          {NAV_ITEMS.map((item, index) => {
            const setActive = (index: number) => {
              if (activeIndex !== index) {
                setActiveIndex(index);
              }
            };
            return (
              <NavItem
                navitems={item}
                key={item.value}
                activeIndex={() => setActive(index)}
              />
            );
          })}
          <div className="overflow-hidden flex items-center ">

              <PopupButton
                url="https://calendly.com/bittu-ad"
                rootElement={rootElement}
                text="Book Now"
                className="font-semibold relative hover:after:w-[100%] after:absolute after:content-[''] after:h-[3px] after:w-[100%] after:bg-[#FB9100] after:bottom-[-5px] after:left-0 after:transition-all after:rounded-2xl"
              />

          </div>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavItems;
