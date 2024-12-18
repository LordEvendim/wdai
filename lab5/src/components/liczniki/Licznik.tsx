import React, { useState } from "react";

export const Licznik: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Dodaj</button>
    </>
  );
};
