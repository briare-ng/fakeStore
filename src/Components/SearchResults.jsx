import React, { useEffect, useState } from "react";
import Loader from "./loader";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import styled from "styled-components";

function SearchResults() {
  const { search } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const url = `https://fakestoreapi.com/products`;

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
        setAllProducts(data);
        //rechercher ici dans les résultats avec le param "search"
        const matchingResults = data.filter((result) => {
          return (
            result.title.toLowerCase().includes(search) ||
            result.description.toLowerCase().includes(search) ||
            result.category.toLowerCase().includes(search)
          );
        });
        setSearchResults(matchingResults);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err.status_message);
        setIsLoaded(true);
      });
  }, [search]);

  console.log("allProducts: ", allProducts);
  console.log("searchResults: ", searchResults);
  const Productslist = searchResults.map((details, i) => {
    return <ProductCard key={i} {...details} />;
  });

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <>
        <Loader />
      </>
    );
  } else {
    return (
      <>
        <h1>Search results for : "{search}"</h1>
        {searchResults.length == [] && (
          <p>pas de résultats pour cette recherche</p>
        )}
        {searchResults.length >= 1 && <CardList>{Productslist}</CardList>}
      </>
    );
  }
}

export default SearchResults;
const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
