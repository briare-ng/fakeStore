import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCart } from "../reducers/cartDetails";
import { Trashbin } from "../assets/icons/Trashbin";

function CartLine({ id, title, price, image, rating, qty }) {
  const [quantity, SetQuantity] = useState(qty);
  const dispatch = useDispatch();
  const cartDetails = useSelector((state) => state.cartDetails.value);
  console.log(quantity);

  const remove = () => {
    dispatch(removeFromCart(id));
    console.log("removed Line");
  };

  const handleQty = (e) => {
    SetQuantity(e.target.value);
    dispatch(updateCart({ id: id, qty: e.target.value }));
  };
  const subTotal = parseFloat(price * qty).toFixed(2);
  return (
    <>
      <Card className="flex flex-row justify-between items-center p-1">
        <Image src={image} alt={`${title}_picture`}></Image>
        <Title>
          <Link className="text-xs sm:text-sm md:text-lg m-1 p-1" to={`/Product/${id}`}>
            {title}
          </Link>
        </Title>
        <Sum className="flex flex-col sm:flex-row justify-center items-center">
          <Price className="text-xs sm:text-base md:text-xl">{price}€</Price>
          <Price>&nbsp;x&nbsp;</Price>
          <Qty
            type="number"
            name="qty"
            id={`id_${title}`}
            onChange={(e) => handleQty(e)}
            min="0"
            value={quantity}
          />
          <Price>=</Price>
          <Price className="text-sm sm:text-lg md:text-2xl">{subTotal}€</Price>
        </Sum>
        {/* <Btn > */}
        <Trash onClick={remove} />
        {/* </Btn> */}
      </Card>
    </>
  );
}

export default CartLine;

const Card = styled.div`
  width: 80%;
  min-width:300px
  border-radius: 4px;
  margin-bottom: 1rem;
  box-shadow: inset 4px 3px 4px rgba(0, 0, 255, 0.2),
    4px 3px rgba(0, 0, 255, 0.2);
  transition-duration: 0.3s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin: .3rem 1rem;
`;

const Title = styled.p`
  font-weight: 600;
  color: rgb(44, 34, 84);
  text-shadow: 3px 3px 5px rgb(164, 165, 176);
  width: 30%;
`;
const Sum = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // width: 35%;
`;

const Price = styled.p`
  // font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0.5rem;
  color: rgb(84, 64, 160);
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
const Trash = styled(Trashbin)`
  padding: 0.3rem 0.2rem;
  transition-duration: 0.3s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;
