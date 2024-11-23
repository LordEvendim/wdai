import express from "express";
import { User } from "./models.js";

const app = express();
const port = 3000;

app.get("/book", async (req, res) => {
  const users = await User.findAll();

  res.send(users);
});

app.post("/book", async (req, res) => {
  const jane = await User.create({ firstName: "Jane", lastName: "Street" });

  res.send(jane);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
