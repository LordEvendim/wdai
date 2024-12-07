import React from "react";

export const Logowanie: React.FC = () => {
  const [password, setPassword] = React.useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = React.useState<string>("");

  const handleLogin = () => {
    if (password !== passwordRepeat) {
      alert("Hasła nie są zgodne");
    }

    alert("Zalogowano poprwanie");
  };

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
      <button
        onClick={handleLogin}
        disabled={password.length === 0 || passwordRepeat.length === 0}
      >
        Zaloguj
      </button>
    </>
  );
};
