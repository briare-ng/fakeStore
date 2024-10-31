import React from "react";
import styled from "styled-components";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
function Footer() {
  return (
    <Foot>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <div> <a href="https://brnguyen.fr" target="_blank">
        made by brnguyen
      </a>
      <a href="https://fakestoreapi.com" target="_blank">
        &nbsp;with the fakestoreapi
      </a></div>
     
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </Foot>
  );
}

export default Footer;

const Foot = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(#b1b6d3, #e5e5eb);
  width: 100vw;
  margin-top: 60px;
  padding: 1rem 0;
`;
