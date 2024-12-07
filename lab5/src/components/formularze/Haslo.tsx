import React from "react";

export const Haslo: React.FC = () => {
  const [password, setPassword] = React.useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = React.useState<string>("");

  return (
    <>
      <label htmlFor="input">Hasło:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="input">Powtórz hasło:</label>
      <input
        type="password"
        value={passwordRepeat}
        onChange={(e) => setPasswordRepeat(e.target.value)}
      />
      <div>
        {password.length === 0 && passwordRepeat.length === 0
          ? "Proszę wprowadzić hasło"
          : password === passwordRepeat
          ? null
          : "Hasła nie są zgodne "}
      </div>
    </>
  );
};
