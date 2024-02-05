"use client";
import { NAV_ITEMS } from "@/config";
import React, { useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
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
    </div>
  );
};

export default NavItems;
