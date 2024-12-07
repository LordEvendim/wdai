import React from "react";

export const Aktualizacja: React.FC = () => {
  const [obiekt, setObiekt] = React.useState({
    nazwa: "Pomidor",
    cena: 50,
  });

  const increasePrice = () => {
    setObiekt((prev) => ({ ...prev, cena: 100 }));
  };

  return (
    <>
      <div>
        {obiekt.nazwa} - {obiekt.cena} zł
      </div>
      <button onClick={increasePrice}>Zwiększ cenę</button>
    </>
  );
};
