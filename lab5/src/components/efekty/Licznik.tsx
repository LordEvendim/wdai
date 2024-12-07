import React, { useEffect, useState } from "react";

export const Licznik: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Hello world");
  }, []);

  useEffect(() => {
    console.log("Licznik zwiększył się do " + count);
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Dodaj</button>
    </>
  );
};
