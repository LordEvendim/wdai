import { Book } from "./models.js";
import { isAdmin } from "./isAdmin.js";
import express from "express";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/api/book", async (req, res) => {
  const books = await Book.findAll();

  res.send(books);
});

app.get("/api/book/:id", async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);

  if (book) {
    res.send(book);
  } else {
    res.status(404).send({ error: "Book not found" });
  }
});

app.post("/api/book", isAdmin, async (req, res) => {
  const { title, author, year } = req.body;
  const book = await Book.create({ title, author, year });

  res.send({ id: book.id });
});

app.delete("/api/book/:id", isAdmin, async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByPk(id);

  if (book) {
    await book.destroy();
    res.send({ message: "Book deleted successfully" });
  } else {
    res.status(404).send({ error: "Book not found" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
