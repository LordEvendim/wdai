import React from "react";
import { Product } from "./Product";

export const Koszyk: React.FC = () => {
  return (
    <>
      <Product nazwa="Jablko" />
      <Product nazwa="Gruszka" />
      <Product nazwa="Wisnie" />
      <Product nazwa="Morele" />
      <Product nazwa="Maliny" />
    </>
  );
};
