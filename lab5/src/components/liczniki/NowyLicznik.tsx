import React, { useState } from "react";
import { Przycisk } from "./Przycisk";

export const Licznik: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>{count}</div>
      <Przycisk click={handleButtonClick} />
    </>
  );
};
