import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

export const User = sequelize.define(
  "User",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
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
