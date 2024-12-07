import React, { useEffect, useState } from "react";

export const Odliczanie: React.FC = () => {
  const [count, setCount] = useState<number>(15.0);
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: number;

    if (isCounting) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount - 0.1);
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [isCounting]);

  useEffect(() => {
    if (count <= 0) {
      setIsCounting(false);
      setIsFinished(true);
    }
  }, [count]);

  return (
    <>
      <div>{count.toFixed(1)}</div>
      <button disabled={isFinished} onClick={() => setIsCounting(!isCounting)}>
        {isFinished ? "Odliczanie zakonczone" : isCounting ? "Stop" : "Start"}
      </button>
    </>
  );
};
