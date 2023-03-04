import React, { useContext, useEffect, useState } from "react";
import { getAllProduct } from "../services/storeAPI";
import useData from "../hooks/useData";
import ProductList from "../components/ProductList/ProductList";
import { Context } from "../context";

const Home = () => {
  const { data: products } = useData([], getAllProduct);
  const context = useContext(Context);

  useEffect(() => {
    context.store.products = products;
    context.redirectDetailsRouter = "";
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
