import React from "react";

export const Ternary: React.FC = () => {
  const a = true;
  const b = false;

  return (
    <>
      <div>
        {a ? "Stwierdzenie A jest prawdziwe" : "Stwierdzenie A jest falszywe"}
      </div>
      <div>
        {b ? "Stwierdzenie B jest prawdziwe" : "Stwierdzenie B jest falszywe"}
      </div>
    </>
  );
};
