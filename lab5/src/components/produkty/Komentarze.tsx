import React, { useEffect } from "react";
import { Komentarz, KomentarzProps } from "./Komentarz";
import axios from "axios";

export const Komentarze: React.FC = () => {
  const [data, setData] = React.useState<KomentarzProps[]>([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/comments");
      console.log(response);

      setData(response.data.comments);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((komentarz) => (
        <Komentarz key={komentarz.id} {...komentarz} />
      ))}
    </>
  );
};
