import React, { useEffect, useState } from "react";
import Loader from "./loader";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import electronics from "../assets/img/electronics.jpg";
import jewelery from "../assets/img/jewelery.jpg";
import men from "../assets/img/men.jpg";
import women from "../assets/img/women.jpg";

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
      <Container>
        {name === "electronics" && <Image src={electronics} />}
        {name === "jewelery" && <Image src={jewelery} />}
        {name === "men's clothing" && <Image src={men} />}
        {name === "women's clothing" && <Image src={women} />}
        <h1> {name} Category </h1>
        <Loader />
      </Container>
    );
  } else {
    return (
      <Container>
        {name === "electronics" && <Image src={electronics} />}
        {name === "jewelery" && <Image src={jewelery} />}
        {name === "men's clothing" && <Image src={men} />}
        {name === "women's clothing" && <Image src={women} />}
        <h1> {name} Category </h1>
        <CardList className="cardsList">{Productslist}</CardList>
      </Container>
    );
  }
}

export default Category;

const Container = styled.div`
  justify-content: center;
`;

const CardList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  opacity: 0.4;
`;
