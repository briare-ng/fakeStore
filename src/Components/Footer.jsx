import React from "react";
import styled from "styled-components";

function Footer() {
  return <Foot>Footer</Foot>;
}

export default Footer;

const Foot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#b1b6d3, #e5e5eb);
  width: 100vw;
  height: 200px;
  margin-top: 60px;
`;
