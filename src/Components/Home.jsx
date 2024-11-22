// import "./../assets/css/MyMovieDB.css";

import styled from "styled-components";
import Section from "./Section";
import tree from "../assets/img/tree.jpg"
import basket from "../assets/img/basket.jpg"

export default function Home({ urls }) {
  const content = Object.keys(urls).map((key, i) => {
    return <Section key={i} section={key} url={urls[key]} isHome />;
  });
  return (
    <>
      <Title>Welcome to the FakeStore !</Title>
      <Image src={tree} alt="" />
      {content}
    </>
  );
}
const Title = styled.h1`
font-size: 2.5rem;
  font-weight: 600;
  color: rgb(44, 34, 84);
  text-shadow: 4px 3px 4px rgb(164, 165, 176);
  margin-top: 2rem;
`;
const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  opacity: 0.4;
`;