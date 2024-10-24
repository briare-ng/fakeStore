import React from "react";
import styled, { keyframes } from "styled-components";

function Loader() {
  

  return (
    <>
      <Load></Load>
      <Msg>Loading</Msg>
    </>
  );
}

export default Loader;

const rotation = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
    `;

  const Load = styled.span`
    width: 48px;
  height: 48px;
  border: 3px solid #d2d1f4;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
&::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid;
  border-color: #3473e099 transparent;`;

  const Msg = styled.p`
    font-weight: 400;
    font-size: 0.8rem;
    margin: .5rem;
  `;