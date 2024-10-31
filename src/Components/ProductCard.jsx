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
      <LinkTo to={`/Product/${id}`}>
        <Image src={image} alt={`${title}_picture`}></Image>
        <Title className="text-xs sm:text-sm md:text-lg">{title}</Title>
        <Price className="text-base sm:text-lg md:text-2xl" >{price} €</Price>
        <Rate className="text-xs sm:text-sm">
          {rating["rate"]}
          <Stars width="1.5rem" height="1.5rem" /> /{rating["count"]} votes
        </Rate>
      </LinkTo>
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
  min-width:250px;
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
    color: #535bf2;
  }
`;
const LinkTo = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height:100%;
`;

const Image = styled.img`
  max-width: 150px;
  max-height: 250px;
  width: 50%;
  margin: 1rem;
`;

const Title = styled.h1`
  font-weight: 600;
  color: rgb(44, 34, 84);
  text-shadow: 3px 3px 5px rgb(164, 165, 176);
  &:hover {
    color: #535bf2;
  }
`;

const Rate = styled.p`
  display: flex;
  color: rgb(44, 34, 84);

  font-weight: 400;
  align-items: center;
  justify-content: center;
`;

const Price = styled.p`
  font-weight: 800;
  margin: 0;
  color: rgb(84, 64, 160);
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 0.5rem;
  height: auto;
`;
const Qty = styled.input`
  height: 1.7rem;
  width: 3rem;
  border: 2px solid rgb(163, 163, 204);
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
