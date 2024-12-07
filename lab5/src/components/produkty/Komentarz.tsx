import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface KomentarzProps {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

export const Komentarz: React.FC<KomentarzProps> = ({ likes, body, user }) => {
  const [currentLikes, setCurrentLikes] = React.useState<number>(likes);

  return (
    <div
      style={{
        background: "white",
        borderRadius: "10px",
        padding: "20px",
        color: "#222",
        width: "300px",
        marginBottom: "20px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            marginBottom: "10px",
            marginTop: "0px",
            width: "100%",
            textAlign: "left",
            fontWeight: "bold",
            opacity: 0.4,
          }}
        >
          {user.username}
        </div>
        <div
          style={{
            marginBottom: "10px",
            marginTop: "10px",
            width: "100%",
            minHeight: "60px",
            textAlign: "left",
          }}
        >
          {body}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              marginRight: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              opacity: 0.8,
            }}
          >
            {currentLikes}
          </div>
          <button
            onClick={() => setCurrentLikes(currentLikes + 1)}
            style={{ padding: "0px", background: "transparent", opacity: 0.8 }}
          >
            <AiFillLike color="#222" size={20} />
          </button>
          <button
            onClick={() => setCurrentLikes(currentLikes - 1)}
            style={{ padding: "0px", background: "transparent", opacity: 0.8 }}
          >
            <AiFillDislike color="#222" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
