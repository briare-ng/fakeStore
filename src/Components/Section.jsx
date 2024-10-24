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
        <h1 className="sectionTitle">{section}</h1>
        <Loader />
      </>
    );
  } else {
    return (
      <div className="sectionContainer">
        <h1 className="sectionTitle">{section}</h1>
        <CardList className="cardsList">{Productslist}</CardList>
      </div>
    );
  }
}

const CardList = styled.div`
  display: flex;
  gap: 1rem;
`;
