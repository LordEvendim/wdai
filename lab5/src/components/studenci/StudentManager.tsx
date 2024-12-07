import React, { useState } from "react";
import { Dodawanie } from "./Dodawanie";

interface Student {
  name: string;
  surname: string;
  age: number;
}

export const StudentManager: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      name: "Jan",
      surname: "Kowalski",
      age: 20,
    },
    {
      name: "Adam",
      surname: "Nowak",
      age: 22,
    },
  ]);

  const handleAdd = (name: string, surname: string, age: string) => {
    console.log(name);
    console.log(surname);
    console.log(age);

    const parsedAge = parseInt(age);

    console.log(parsedAge);

    if (isNaN(parsedAge)) {
      alert("Wiek musi być liczbą");
      return;
    }

    if (name === "" || surname === "") {
      alert("Imię i nazwisko nie mogą być puste");
      return;
    }

    setStudents([...students, { name, surname, age: parsedAge }]);
  };

  return (
    <>
      <table>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.surname}</td>
            <td>{student.age}</td>
          </tr>
        ))}
      </table>
      <Dodawanie handleAdd={handleAdd} />
    </>
  );
};
