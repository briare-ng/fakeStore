import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CartPlus from "../assets/icons/cartPlus";
import { Link } from "react-router-dom";
import Stars from "../assets/icons/Stars";
import { addToCart } from "../reducers/cartDetails";

function ProductCard({ id, title, price, image, rating }) {
  const [qty, SetQty] = useState(0);
  const dispatch = useDispatch();
  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log(qty + " added of " + title + " in the cart");
    const productData = {
      id,
      title,
      price,
      image,
      qty,
    };
    console.log("productData", productData);
    dispatch(addToCart(productData));
  };

  return (
    <Card>
      <Link to={`/Product/${id}`}>
        <Image src={image} alt={`${title}_picture`}></Image>
        <Title>{title}</Title>
        <Price>{price} €</Price>
        <Rate>
          rated {rating["rate"]}
          <Stars width="1.5rem" height="1.5rem" /> /{rating["count"]} votes
        </Rate>
      </Link>
      <Form onSubmit={handleAddToCart}>
        <Qty
          type="number"
          name="qty"
          id={`id_${title}`}
          onChange={(e) => {
            SetQty(e.target.value);
          }}
          min="0"
          value={qty}
        />
        <Btn id={id} type="submit">
          <CartPlus width="1.5em" height="1.5em" />
        </Btn>
      </Form>
    </Card>
  );
}

export default ProductCard;

const Card = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  border-radius: 4px;
  gap: 0.5rem;
  box-shadow: inset 4px 3px 4px rgba(0, 0, 255, 0.2),
    4px 3px rgba(0, 0, 255, 0.2);
  transition-duration: 0.3s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  max-width: 150px;
  max-height: 250px;
  flex: 1 1 0;
  margin-top: 1rem;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: rgb(44, 34, 84);
  text-shadow: 3px 3px 5px rgb(164, 165, 176);
  flex: 1 1 0;
`;

const Rate = styled.p`
  display: flex;
  color: rgb(44, 34, 84);
  font-size: 0.8rem;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  flex: 1 1 0;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0;
  color: rgb(84, 64, 160);
  flex: 1 1 0;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 0.5rem;
  height: auto;
  flex: 1 1 0;
`;
const Qty = styled.input`
  height: 1.2rem;
  width: 3rem;
  border: 1px solid rgb(163, 163, 204);
  border-radius: 4px;
  padding: 0.2rem;
  text-align: center;
  margin-bottom: 0.25rem;
  &:hover {
    border: 2px solid rgb(204, 204, 255);
  }
`;
const Btn = styled.button`
  padding: 0.3rem 1.2rem;
  box-shadow: inset 4px 3px 4px rgba(0, 0, 255, 0.2),
    1px 1px rgba(0, 0, 255, 0.2);
  padding: 0.5rem 0.8rem;
  border: 1px solid rgba(0, 0, 255, 0.2);
  transition-duration: 0.3s;
  &:hover {
    border: 1px solid rgb(134, 138, 160);
    transform: scale(1.05);
  }
`;
