import React from "react";
import CartLine from "./CartLine";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../reducers/cartDetails";
import styled from "styled-components";
import { Broom } from "../assets/icons/Broom";

function UserCart() {
  const dispatch = useDispatch();
  const cartDetails = useSelector((state) => state.cartDetails.value);
  console.log("cartDetailsState1", cartDetails);
  let total = "";
  if (cartDetails.length > 0) {
    total = cartDetails.reduce((acc, product) => {
      return acc + product.price * product.qty;
    }, 0);
  }
  total = parseFloat(total).toFixed(2);
  let cartList = [];
  if (cartDetails.length > 0) {
    cartList = cartDetails.map((details, i) => {
      return <CartLine key={i} {...details} />;
    });
  } else {
    return <p>Votre panier est vide</p>;
  }

  return (
    <>
      <h1>Your Cart Details</h1>
      {cartList}
      <Price className="text-lg sm:text-2xl md:text-3xl">Total = {total}€</Price>
      <Button
        onClick={() => {
          dispatch(emptyCart());
        }}
      >
        Clear Cart
        <Broom />
      </Button>
    </>
  );
}

export default UserCart;

const Price = styled.h2`
  font-weight: 700;
  margin: 0 0.5rem;
  color: rgb(84, 64, 160);
`;
const Button = styled.button`
  display: flex;
  align-self: end;
  align-items: center;
  margin: 1rem 0;
  box-shadow: inset 4px 3px 4px rgba(0, 0, 255, 0.2),
    1px 1px rgba(0, 0, 255, 0.2);
  padding: 0.5rem 0.8rem;
  border: 1px solid rgba(0, 0, 255, 0.2);
  transition-duration: 0.3s;
  &:hover {
    border: 2px solid rgb(134, 138, 160);
    transform: scale(1.05);
  }
`;
