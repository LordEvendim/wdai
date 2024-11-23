import express from "express";
import { Order } from "./models.js";
import axios from "axios";

const app = express();
const port = 3001;

app.get("/api/orders/:userId", async (req, res) => {
  const { userId } = req.params;
  const orders = await Order.findAll({ where: { userId } });

  res.send(orders);
});

app.post("/api/orders", async (req, res) => {
  const { userId, bookId, quantity } = req.body;
  try {
    const response = await axios.get(
      `http://localhost:3000/api/book/${bookId}`
    );
    if (!response.data) {
      return res.status(404).send({ error: "Book not found" });
    }
  } catch (error) {
    return res.status(500).send({ error: "Failed to fetch book information" });
  }

  try {
    const newOrder = await Order.create({ userId, bookId, quantity });
    res.status(201).send({ id: newOrder.id });
  } catch (error) {
    res.status(500).send({ error: "Failed to create order" });
  }
});

app.delete("/api/orders/:id", async (req, res) => {
  const { id } = req.params;
  const order = await Order.findByPk(id);

  if (order) {
    await order.destroy();
    res.send({ message: "Order deleted successfully" });
  } else {
    res.status(404).send({ error: "Order not found" });
  }
});

app.patch("/api/orders/:id", async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const order = await Order.findByPk(id);

  if (order) {
    order.quantity = quantity;
    await order.save();
    res.send({ message: "Order updated successfully" });
  } else {
    res.status(404).send({ error: "Order not found" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
