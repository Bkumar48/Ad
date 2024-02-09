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
        stroke="black"
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
};