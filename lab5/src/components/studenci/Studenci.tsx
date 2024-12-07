import React from "react";

interface Student {
  name: string;
  surname: string;
  age: number;
}

export const Studenci: React.FC = () => {
  const students: Student[] = [
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
  ];

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
    </>
  );
};
