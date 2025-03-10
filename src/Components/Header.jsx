import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Cart from "../assets/icons/Cart";
import { useSelector } from "react-redux";
import Input from "./Input";
import { useEffect, useState } from "react";
import { Search } from "../assets/icons/Search";

export default function Header() {
  const navigate = useNavigate();
  // const deconnect = () => {
  //   console.log("déconnexion");
  //   // sessionStorage.clear();
  //   localStorage.clear();
  //   navigate("/");
  //   // localStorage.removeItem();
  // };
  const cartDetails = useSelector((state) => state.cartDetails.value);
  console.log("cartDetails: ", cartDetails);

  let productCount = "";
  if (cartDetails.length > 0) {
    productCount = cartDetails.reduce((acc, product) => {
      return acc + parseInt(product.qty);
    }, 0);
  }
  const [search, setSearch] = useState("");
  console.log("search: ", search);
  const handleSearchSubmit = () => {
    navigate(`/Search/${search}`);
  };
  // useEffect(() => {
  //   if (search.length >= 3) {
  //     console.log();
  //     console.log("search est sup à 3 caractères");
  //     //rediriger vers une page résultats de recherche
  //     navigate(`/Search/${search}`);
  //   }
  // }, [search]);

  return (
    <>
      <Head>
        <NavBar className="absolute inset-x-0 top-0 w-full w-100 px-8 md:px-auto">
          <Title>
            <Links to="/">
              <MainTitle>The&nbsp;FakeStore</MainTitle>
            </Links>
          </Title>
          <Links to="/">Home</Links>
          <Links to="/electronics">electronics</Links>
          <Links to="/jewelery">jewelery</Links>
          <Links to="/men's clothing">Men's</Links>
          <Links to="/women's clothing">Women's</Links>
          {/* <Links to="/login">
            Sign In
          </Links> */}
          <form onSubmit={handleSearchSubmit}>
            <SearchBar>
              <Input type="text" name="search" setValue={setSearch} />
              <SearchButton type="submit">
                <Search />
              </SearchButton>
            </SearchBar>
          </form>

          <Links to="/Cart">
            <Button>
              <Cart />
              {cartDetails.length > 0 && <Badge>{productCount}</Badge>}
            </Button>
          </Links>
        </NavBar>
        {/* <button id="login" onClick={deconnect}>
          Déconnexion
        </button> */}
      </Head>
    </>
  );
}

const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#e5e5eb, #b1b6d3);
  width: 100vw;
  position: absolute;
  top: 0;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const MainTitle = styled.h1`
  color: rgb(232, 172, 93);
  text-shadow: 3px 3px 10px rgb(18, 16, 7);
  margin: 5px;
`;
const NavBar = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  position: relative;
  right: 3rem;
`;
const Links = styled(Link)`
  text-shadow: 1px 1px 2px rgb(18, 16, 7);
  color: rgb(245, 132, 39);
  margin: 20px;
  &:hover {
    color: rgb(222, 188, 55);
  }
`;
const Button = styled.button`
  box-shadow: 1px 1px rgba(0, 0, 255, 0.2);
  position: relative;
  padding: 0.5rem 0.8rem;
  border: 1px solid rgba(0, 0, 255, 0.2);
  transition-duration: 0.3s;
  &:hover {
    border: 2px solid rgb(134, 138, 160);
    transform: scale(1.05);
  }
`;

const Badge = styled.span`
  display: inline-block;
  min-width: 1rem;
  font-size: 0.6rem;
  color: #ffff;
  font-weight: 600;
  position: absolute;
  bottom: 1.5rem;
  right: 0.4rem;
  background-color: #d64852;
  border-radius: 50%;
`;
