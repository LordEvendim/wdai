import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "./models.js";

const app = express();
const port = 3001;

const secretKey = "secret";

app.use(express.json());

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashedPassword });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, secretKey, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
