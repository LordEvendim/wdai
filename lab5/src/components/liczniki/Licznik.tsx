import React, { useState } from "react";

interface ComponentProps {
  nazwa: string;
}

export const Licznik: React.FC<ComponentProps> = ({}) => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}></button>
    </>
  );
};
