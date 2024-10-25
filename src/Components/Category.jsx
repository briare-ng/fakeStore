import React, { useEffect, useState } from "react";
import Loader from "./loader";
import ProductCard from "./ProductCard";
import styled from "styled-components";

function Category({ name, url }) {
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

  const Productslist = results.map((details, i) => {
    return <ProductCard key={i} {...details} />;
  });

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <>
        <h1> {name} Category </h1>
        <Loader />
      </>
    );
  } else {
    return (
      <div className="sectionContainer">
        <h1> {name} Category </h1>
        <CardList className="cardsList">{Productslist}</CardList>
      </div>
    );
  }
}

export default Category;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
