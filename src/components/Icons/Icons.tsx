// @ts-nocheck
import type { SVGProps } from "react";

export const Icons = {
  IcBaselineArrowDropDown: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="m7 10l5 5l5-5z"></path>
    </svg>
  ),
  ArrowRightBroken: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"
      ></path>
    </svg>
  ),
  Facebook: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="black" strokeLinecap="round" strokeWidth={4}>
        <path
          strokeDasharray={24}
          strokeDashoffset={24}
          d="M17 4L15 4C12.5 4 11 5.5 11 8V20"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.4s"
            values="24;0"
          ></animate>
        </path>
        <path strokeDasharray={12} strokeDashoffset={12} d="M8 12H15">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.2s"
            values="12;0"
          ></animate>
        </path>
      </g>
    </svg>
  ),
  Instagram: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          strokeDasharray={66}
          strokeDashoffset={66}
          d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="66;132"
          ></animate>
        </path>
        <path
          strokeDasharray={26}
          strokeDashoffset={26}
          d="M12 8C14.20914 8 16 9.79086 16 12C16 14.20914 14.20914 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.4s"
            values="26;0"
          ></animate>
        </path>
      </g>
      <circle cx={17} cy={7} r={1.5} fill="black" fillOpacity={0}>
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="1.1s"
          dur="0.4s"
          values="0;1"
        ></animate>
      </circle>
    </svg>
  ),
  Twitter: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="black">
        <path d="M1 2h2.5L3.5 2h-2.5z">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M1 2h2.5L3.5 2h-2.5z;M1 2h2.5L18.5 22h-2.5z"
          ></animate>
        </path>
        <path d="M5.5 2h2.5L7.2 2h-2.5z">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M5.5 2h2.5L7.2 2h-2.5z;M5.5 2h2.5L23 22h-2.5z"
          ></animate>
        </path>
        <path d="M3 2h5v0h-5z" opacity={0}>
          <set attributeName="opacity" begin="0.4s" to={1}></set>
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.4s"
            dur="0.4s"
            values="M3 2h5v0h-5z;M3 2h5v2h-5z"
          ></animate>
        </path>
        <path d="M16 22h5v0h-5z" opacity={0}>
          <set attributeName="opacity" begin="0.4s" to={1}></set>
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.4s"
            dur="0.4s"
            values="M16 22h5v0h-5z;M16 22h5v-2h-5z"
          ></animate>
        </path>
        <path d="M18.5 2h3.5L22 2h-3.5z" opacity={0}>
          <set attributeName="opacity" begin="0.5s" to={1}></set>
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.5s"
            dur="0.4s"
            values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"
          ></animate>
        </path>
      </g>
    </svg>
  ),
  LinkedIn: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={4} cy={4} r={2} fill="currentColor" fillOpacity={0}>
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="0;1"
        ></animate>
      </circle>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={4}
      >
        <path strokeDasharray={12} strokeDashoffset={12} d="M4 10V20">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="12;0"
          ></animate>
        </path>
        <path strokeDasharray={12} strokeDashoffset={12} d="M10 10V20">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.2s"
            values="12;0"
          ></animate>
        </path>
        <path
          strokeDasharray={24}
          strokeDashoffset={24}
          d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.5s"
            values="24;0"
          ></animate>
        </path>
      </g>
    </svg>
  ),
  Map: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8m0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"
      ></path>
    </svg>
  ),
  Phone: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m15 9l4-4m0 0v3m0-3h-3"
        ></path>
        <path
          fill="currentColor"
          d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972c-2.955-3.111-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"
        ></path>
      </g>
    </svg>
  ),
  Mail: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
        <path
          fill="currentColor"
          d="M10.89 2.538a2 2 0 0 1 2.072-.09l.147.09l8 5.333a2 2 0 0 1 .884 1.498l.007.166V19a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19V9.535a2 2 0 0 1 .756-1.566l.135-.098zM12 4.202L4.803 9L12 13.798L19.197 9z"
        ></path>
      </g>
    </svg>
  ),
  NimbusMarketing: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M14.25 2.1a1.25 1.25 0 0 0-1.17-.1L6.91 4.43a1.22 1.22 0 0 1-.46.09H2.5a1.25 1.25 0 0 0-1.25 1.25v.1H0v3h1.25V9a1.25 1.25 0 0 0 1.25 1.22L4 13.4a1.26 1.26 0 0 0 1.13.72h.63A1.25 1.25 0 0 0 7 12.87v-2.53l6.08 2.43a1.27 1.27 0 0 0 .47.09a1.29 1.29 0 0 0 .7-.22a1.25 1.25 0 0 0 .55-1V3.13a1.25 1.25 0 0 0-.55-1.03m-8.5 3.67V9H2.5V5.77zm0 7.1h-.63l-1.23-2.65h1.86zm1.62-3.72A2.29 2.29 0 0 0 7 9V5.7a2.26 2.26 0 0 0 .37-.11l6.18-2.46v8.48zm7.46-3.03v2.5a1.25 1.25 0 0 0 0-2.5"
      ></path>
    </svg>
  ),
  AngleLeft: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15 19l-7-7l7-7"
      ></path>
    </svg>
  ),
  AngleRight: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2rem"
      height="1.2rem"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9 5l7 7l-7 7"
      ></path>
    </svg>
  ),
  Quote: (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 16 16" {...props}><path fill="currentColor" d="M9 9V2h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-.6-1.4s2-.3 2.4-1.9c.4-1.2-.4-2.2-.4-2.2zM0 9V2h7v7.1c0 4.8-4.5 5.4-4.5 5.4l-.6-1.4s2-.3 2.4-1.9C4.7 10 3.9 9 3.9 9z"></path></svg>
  ),
};


