// "use client";

// import { ReactLenis } from "@studio-freight/react-lenis";

// function SmoothScroll({ children }: { children: React.ReactNode }) {
//   return <ReactLenis root options={{
//     lerp: 0.1,
//     duration:1.5,
//     smoothWheel: true,
//   }}>{children}</ReactLenis>;
// }

// export default SmoothScroll;

"use client";
import { useEffect } from "react";

function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return null;
}

export default SmoothScroll;
