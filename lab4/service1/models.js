import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

export const Book = sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
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
