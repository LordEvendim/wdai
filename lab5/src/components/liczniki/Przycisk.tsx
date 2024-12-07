import React from "react";

interface ComponentProps {
  click: () => void;
}

export const Przycisk: React.FC<ComponentProps> = ({ click }) => {
  return (
    <>
      <button onClick={() => click()}></button>
    </>
  );
};
