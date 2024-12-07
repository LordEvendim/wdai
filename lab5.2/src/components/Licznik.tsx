import React, { useEffect, useState } from "react";

export const Licznik: React.FC = () => {
  const [count, setCount] = useState<number>();

  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem("count") ?? "0");

    if (isNaN(currentCount)) {
      localStorage.setItem("count", "0");
      setCount(0);
    } else {
      setCount(currentCount);
    }
  }, []);

  useEffect(() => {
    if (count === undefined) return;

    localStorage.setItem("count", count.toString());
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((count ?? 0) + 1)}>Dodaj</button>
    </>
  );
};
