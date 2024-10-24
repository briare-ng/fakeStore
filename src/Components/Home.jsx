// import "./../assets/css/MyMovieDB.css";

import Section from "./Section";

export default function Home({ urls }) {
  const content = Object.keys(urls).map((key, i) => {
    return <Section key={i} section={key} url={urls[key]} isHome />;
  });
  return (
    <>
      <h1>Welcome to the FakeStore !</h1>
      <img src="" alt="" />
      {content}
    </>
  );
}
