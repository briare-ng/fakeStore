// import "./../assets/css/MoviesSection.css";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import Loader from "./loader";

export default function Section({ section, url, isHome }) {
  const [results, setResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err.status_message);
        setIsLoaded(true);
      });
  }, []);

  let limit = isHome ? 5 : 20;

  const filtereds = results.filter((result, i) => {
    if (i < limit) {
      return result;
    }
  });

  const Productslist = filtereds.map((details, i) => {
    return <ProductCard key={i} {...details} />;
  });

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <>
        <Title className="">{section.toUpperCase()}</Title>
        <Loader />
      </>
    );
  } else {
    return (
      <div>
        <Title className="">{section.toUpperCase()}</Title>
        <CardList className="cardsList">{Productslist}</CardList>
      </div>
    );
  }
}

const CardList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;
const Title = styled.h1`
  font-weight: 600;
  color: rgb(44, 34, 84);
  text-shadow: 3px 4px 4px rgb(164, 165, 176);
  margin-top: 2rem;
`;
