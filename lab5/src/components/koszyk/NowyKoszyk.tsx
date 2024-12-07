import React from "react";
import { Product, ProductInfo } from "./Product";

interface ComponentProps {
  products: ProductInfo[];
}

export const Koszyk: React.FC<ComponentProps> = ({ products }) => {
  return (
    <>
      {products.map((productInfo) => (
        <Product nazwa={productInfo.nazwa} />
      ))}
    </>
  );
};
