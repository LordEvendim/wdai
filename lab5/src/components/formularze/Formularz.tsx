import React from "react";

export const Formularz: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>("");

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>{inputValue}</div>
    </>
  );
};
