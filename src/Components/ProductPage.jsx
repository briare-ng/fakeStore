import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "./loader";
import { useParams } from "react-router-dom";
import CartPlus from "../assets/icons/cartPlus";

function ProductPage() {
  const [results, setResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [qty, SetQty] = useState(0);
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;

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

  const addToCart = (e) => {
    e.preventDefault();
    console.log(qty + " added of " + results.title + " in the cart");
  };

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <>
        <h1 className="sectionTitle"></h1>
        <Loader />
      </>
    );
  } else {
    return (
      <>
        <Details>
          <Title>{results.title}</Title>
          <Image src={results.image} alt={`${results.title}_picture`}></Image>
          <Description>{results.description}</Description>
          <Price>{results.price} €</Price>
          <p>
            rated {results.rating["rate"]}/5 with {results.rating["count"]}{" "}
            votes
          </p>
          <p>category {results.category}</p>
          <Form onSubmit={addToCart}>
            <label htmlFor={`id_${results.title}`}>Buy :</label>
            <Qty
              type="number"
              name="qty"
              id={`id_${results.title}`}
              onChange={(e) => {
                SetQty(e.target.value);
              }}
              min="0"
            />
            <Btn id={id} type="submit">
              <CartPlus width="1.5em" height="1.5em" />
            </Btn>
          </Form>
        </Details>
      </>
    );
  }
}

export default ProductPage;

const Details = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border-radius: 4px;
  box-shadow: inset 4px 3px 4px rgba(0, 0, 255, 0.2),
    4px 3px rgba(0, 0, 255, 0.2);
  margin: 3rem 4rem;
`;

const Image = styled.img`
  max-width: 400px;
  max-height: 400px;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: rgb(44, 34, 84);
  text-shadow: 3px 3px 5px rgb(164, 165, 176);
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin: 3rem;
`;

const Price = styled.p`
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0;
  color: rgb(84, 64, 160);
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 1.5rem;
`;
const Qty = styled.input`
  height: 1.2rem;
  width: 3rem;
  border: 1px solid rgb(163, 163, 204);
  border-radius: 4px;
  padding: 0.2rem;
  text-align: center;
  &:hover {
    border: 2px solid rgb(204, 204, 255);
  }
`;
const Btn = styled.button`
  border: 1px solid rgb(163, 163, 204);
  padding: 0.3rem 1.2rem;
  &:hover {
    border: 2px solid rgb(122, 122, 153);
  }
`;
