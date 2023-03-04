import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../context";
import { getOneProduct } from "../services/storeAPI";
import ProductDetails from "../components/ProductDetail/ProductDetails";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id: idParam } = useParams();
  const context = useContext(Context);
  const { store } = context || {};
  const { products } = store || [];

  const { id, title, image, price } = product || {};

  console.log(product);

  useEffect(() => {
    const item = products.find((item) => item.id === +idParam);
    console.log("item..", item);
    if (item) {
      setProduct(item);
    } else {
      getData(idParam);
    }
  }, []);

  const getData = async (id) => {
    const data = await getOneProduct(id);
    setProduct(data);
  };

  useEffect(() => {}, [products]);

  return <ProductDetails title={title} image={image} id={id} price={price} />;
};

export default ProductDetail;
