import React from "react";

export default function CartPlus(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <defs>
        <mask id="ipTShoppingCartAdd0">
          <g fill="none">
            <path fill="#555" d="M39 32H13L8 12h36z"></path>
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.75}
              d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"
            ></path>
            <circle
              cx={13}
              cy={39}
              r={3}
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.75}
            ></circle>
            <circle
              cx={39}
              cy={39}
              r={3}
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.75}
            ></circle>
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.75}
              d="M22 22h8m-4 4v-8"
            ></path>
          </g>
        </mask>
      </defs>
      <path
        fill="#2b914a"
        d="M0 0h48v48H0z"
        mask="url(#ipTShoppingCartAdd0)"
      ></path>
    </svg>
  );
}
