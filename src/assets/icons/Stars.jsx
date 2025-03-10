import React from "react";
import styled from "styled-components";

function Stars(props) {
  return (
    <Star
      xmlns="http://www.w3.org/2000/Star"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#fff13f"
        fillRule="evenodd"
        d="M21.999 12c0 2.764-.977 5.117-2.93 7.07A9.64 9.64 0 0 1 12 21.999c-2.763 0-5.116-.977-7.069-2.93A9.64 9.64 0 0 1 2.001 12c0-2.764.977-5.117 2.93-7.07A9.63 9.63 0 0 1 12 2.001c2.764 0 5.117.977 7.07 2.93A9.64 9.64 0 0 1 21.999 12m-3.417 6.582A8.87 8.87 0 0 1 12 21.305q-3.855.001-6.582-2.723A8.97 8.97 0 0 1 2.695 12q-.001-3.855 2.723-6.582a9.2 9.2 0 0 1 3.177-2.105A9.3 9.3 0 0 1 12 2.695q3.855-.001 6.582 2.723A8.97 8.97 0 0 1 21.305 12c0 2.57-.912 4.764-2.723 6.582m.14-8.446l-4.505-.206a.32.32 0 0 1-.306-.224L12.324 5.46A.32.32 0 0 0 12 5.236a.32.32 0 0 0-.324.224l-1.588 4.246a.32.32 0 0 1-.305.224l-4.506.206a.32.32 0 0 0-.311.235a.324.324 0 0 0 .111.382l3.53 2.83c.117.093.152.217.117.364l-1.2 4.376c-.047.153 0 .276.13.37c.123.094.258.094.388.006l3.764-2.5a.32.32 0 0 1 .382 0l3.764 2.5c.136.088.271.088.394-.006c.13-.094.177-.217.13-.37l-1.194-4.376a.32.32 0 0 1 .118-.365l3.528-2.829a.324.324 0 0 0 .107-.376a.32.32 0 0 0-.312-.236z"
        clipRule="evenodd"
      ></path>
    </Star>
  );
}

export default Stars;
const Star = styled.svg`
  filter: drop-shadow(1px 1px 1px #4444dd);
`;
