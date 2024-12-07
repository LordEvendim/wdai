import React, { useEffect, useState } from "react";

export const Tytul: React.FC = () => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    document.title = text;
  }, [text]);

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
};
