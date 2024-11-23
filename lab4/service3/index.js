import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "./models.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3002;

app.use(express.json());

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.findAll();

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/register", async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashedPassword, role });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email, role: user.role }, secretKey, {
      expiresIn: "1h",
    });
    res.json({ id: user.id, token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
