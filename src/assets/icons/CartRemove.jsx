import React from "react";

function CartRemove(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none">
        <path d="M39 32H13L8 12h36z"></path>
        <path
          stroke="#e84f4f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.75}
          d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"
        ></path>
        <circle
          cx={13}
          cy={39}
          r={3}
          stroke="#e84f4f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.75}
        ></circle>
        <circle
          cx={39}
          cy={39}
          r={3}
          stroke="#e84f4f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.75}
        ></circle>
        <path
          stroke="#e84f4f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.75}
          d="M22 22h8"
        ></path>
      </g>
    </svg>
  );
}

export default CartRemove;
