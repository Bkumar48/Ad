"use client";

import React, { useEffect } from "react";

const LocomotiveScroll: React.FC = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return null;
};

export default LocomotiveScroll;
