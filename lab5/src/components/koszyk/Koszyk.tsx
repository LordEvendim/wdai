import React from "react";
import { Product } from "./Product";

interface ComponentProps {
  nazwa: string;
}

export const Koszyk: React.FC<ComponentProps> = ({}) => {
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
