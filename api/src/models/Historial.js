const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Historial",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    },
    { timestamps: true }
  );
};
