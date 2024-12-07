import React, { useState } from "react";
import { Przycisk } from "./Przycisk";

interface ComponentProps {
  nazwa: string;
}

export const Licznik: React.FC<ComponentProps> = ({}) => {
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
