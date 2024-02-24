import React from "react";
import Header from "../components/header/Header";
import Product from "../components/product/Product";
import Filter from "../components/product/Filter";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />

      <Product />
    </React.Fragment>
  );
};

export default Layout;
