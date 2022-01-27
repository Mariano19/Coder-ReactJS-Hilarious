import React from "react"
import products from './mock';

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(products), 2000);
  });
};

export default getProducts;
