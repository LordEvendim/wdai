import React from "react";

export interface ProductInfo {
  nazwa: string;
}

export const Product: React.FC<ProductInfo> = ({ nazwa }) => {
  return <>{nazwa}</>;
};
