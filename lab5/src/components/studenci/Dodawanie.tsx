import React from "react";

export const Dodawanie: React.FC<{
  handleAdd: (name: string, surname: string, age: string) => void;
}> = ({ handleAdd }) => {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [age, setAge] = React.useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Imię"
        value={name}
        onChange={(e) => setName(e.target.value ?? "")}
      />
      <input
        type="text"
        placeholder="Nazwisko"
        value={surname}
        onChange={(e) => setSurname(e.target.value ?? "")}
      />
      <input
        type="text"
        placeholder="Wiek"
        value={age}
        onChange={(e) => setAge(e.target.value ?? "")}
      />
      <button onClick={() => handleAdd(name, surname, age)}>Dodaj</button>
    </>
  );
};
