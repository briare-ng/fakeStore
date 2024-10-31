import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import PrivateRoutes from "./PrivateRoutes";
import Category from "./Category";
import UserCart from "./UserCart";
import ProductPage from "./ProductPage";
import Footer from "./Footer";
import Login from "./Login";
import SearchResults from "./SearchResults";
import NavbarTest from "./NavbarTest";

const Router = () => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const urls = categories.reduce((obj, category) => {
    obj[category] = `https://fakestoreapi.com/products/category/${category}`;
    return obj;
  }, {});

  const routes = Object.keys(urls).map((key, i) => {
    return (
      <Route
        key={i}
        path={`/${key}`}
        element={<Category key={i} name={key} url={urls[key]} />}
      />
    );
  });
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <NavbarTest />
      <Routes>
        <Route path="/" element={<Home urls={urls} />} />
        <Route path="/Product/:id" element={<ProductPage />} />
        {/* les "Route" pour chaque "category" */}
        {routes}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}> */}
        <Route path="/Cart" element={<UserCart />} />
        <Route path="/Search/:search" element={<SearchResults />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
