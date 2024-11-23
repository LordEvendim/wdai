import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

export const Order = sequelize.define(
  "Order",
  {
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();
