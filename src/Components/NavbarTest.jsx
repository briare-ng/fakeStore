import React, { useState } from "react";
import Input from "./Input";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "../assets/icons/Search";
import Cart from "../assets/icons/Cart";
import { useSelector } from "react-redux";
import { Toggler } from "../assets/icons/Toggler";
import { useEffect } from "react";

function NavbarTest() {
  const [search, setSearch] = useState("");
  const [showNav, SetShowNav] = useState(false);
  const cartDetails = useSelector((state) => state.cartDetails.value);
  console.log("cartDetails: ", cartDetails);
  const navigate = useNavigate();
  const handleSearchSubmit = () => {
    navigate(`/Search/${search}`);
  };
  let productCount = "";
  if (cartDetails.length > 0) {
    productCount = cartDetails.reduce((acc, product) => {
      return acc + parseInt(product.qty);
    }, 0);
  }
  const handleToggler = () => {
    SetShowNav(!showNav);
  };
//gestion du clic hors du menu mobile
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.mobileNav')) {
        SetShowNav(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <nav className="relative top-0 w-screen bg-gradient-to-b from-[#e5e5eb] to-[#b1b6d3]">
        <div className="mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          <div className=" py-2 md:order-1">
            <Links to="/">
              <MainTitle className="text-4xl sm:text-6xl md:text-6xl">
                The&nbsp;FakeStore
              </MainTitle>
            </Links>
          </div>

          <div className="text-gray-500 order-2 w-full md:w-auto md:order-2 hidden lg:block">
            <ul className="flex font-semibold justify-between gap-3 flex-wrap md:flex-nowrap ">
              <li>
                <Links to="/">Home</Links>
              </li>
              <li>
                <Links to="/electronics">electronics</Links>
              </li>
              <li>
                <Links to="/jewelery">jewelery</Links>
              </li>
              <li>
                <Links to="/men's clothing">Men</Links>
              </li>
              <li>
                <Links to="/women's clothing">Women</Links>
              </li>
            </ul>
          </div>
          <div className="order-3 md:order-3 items-center hidden md:flex">
            <form onSubmit={handleSearchSubmit}>
              <SearchBar>
                <Input type="text" name="search" setValue={setSearch} />
                <SearchButton type="submit">
                  <Search />
                </SearchButton>
              </SearchBar>
            </form>
            <Links className="invisible lg:visible" to="/Cart">
              <Button>
                <Cart />
                {cartDetails.length > 0 && <Badge>{productCount}</Badge>}
              </Button>
            </Links>
          </div>
        </div>
        {/* Mobile navigation btn */}
        <div
          className={`mobileNav fixed top-0 right-0 p-2 flex flex-col justify-between items-center transition-width duration-300 ease-in-out rounded lg:hidden z-10 ${
            showNav
              ? "h-1/2 w-64 bg-gradient-to-b from-[#e5e5eb] to-[#b1b6d3]"
              : "h-20 w-20"
          }`}
        >
          <button className="bg-white bg-opacity-40 border-none hover:bg-opacity-90 px-2 py-1.5 sm:px-3 sm:py-2" onClick={handleToggler}>
            <Toggler />
          </button>
          <Links to="/Cart">
            <Button>
              <Cart />
              {cartDetails.length > 0 && <Badge>{productCount}</Badge>}
            </Button>
          </Links>

          {/* Mobile navigation menu */}

          <ul
            className={` flex flex-col gap-1.5 w-2/3 bg-white bg-opacity-40 rounded py-2 ${
              showNav
                ? "scale-100 ease-in-out delay-200 transition duration-200"
                : "scale-0"
            }`}
          >
            <li>
              <Links to="/" onClick={handleToggler}>
                Home
              </Links>
            </li>
            <li>
              <Links to="/electronics" onClick={handleToggler}>
                electronics
              </Links>
            </li>
            <li>
              <Links to="/jewelery" onClick={handleToggler}>
                jewelery
              </Links>
            </li>
            <li>
              <Links to="/men's clothing" onClick={handleToggler}>
                Men
              </Links>
            </li>
            <li>
              <Links to="/women's clothing" onClick={handleToggler}>
                Women
              </Links>
            </li>
          </ul>
          <form
            className={`  ${
              showNav
                ? ""
                : "translate-x-full ease-in-out transition duration-200"
            }`}
            onSubmit={handleSearchSubmit}
          >
            <SearchBar>
              <Input type="text" name="search" setValue={setSearch} />
              <SearchButton type="submit">
                <Search />
              </SearchButton>
            </SearchBar>
          </form>
        </div>
      </nav>
    </>
  );
}

export default NavbarTest;

const MainTitle = styled.h1`
  color: rgb(232, 172, 93);
  text-shadow: 3px 3px 10px rgb(18, 16, 7);
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 0 1rem 0 0;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 0rem;
`;
const Links = styled(Link)`
  text-shadow: 1px 1px 2px rgb(18, 16, 7);
  color: rgb(245, 132, 39);
  &:hover {
    color: rgb(222, 188, 55);
  }
`;
const Button = styled.button`
  filter: drop-shadow: 1px 1px rgba(0, 0, 255, 0.2);
  position: relative;
  transition-duration: 0.3s;
  padding:.6rem;
  background: none;
  &:hover {
    transform: scale(1.08);
  }
`;
const Badge = styled.span`
  display: inline-block;
  min-width: 1rem;
  font-size: 0.6rem;
  color: #ffff;
  font-weight: 600;
  position: absolute;
  bottom: 1.6rem;
  background-color: #d64852;
  border-radius: 50%;
`;
