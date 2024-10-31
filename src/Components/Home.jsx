// import "./../assets/css/MyMovieDB.css";

import styled from "styled-components";
import Section from "./Section";

export default function Home({ urls }) {
  const content = Object.keys(urls).map((key, i) => {
    return <Section key={i} section={key} url={urls[key]} isHome />;
  });
  return (
    <>
      <Title>Welcome to the FakeStore !</Title>
      <img src="" alt="" />
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
