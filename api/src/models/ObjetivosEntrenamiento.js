const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ObjetivosEntrenamiento",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      objetivo: { type: DataTypes.STRING },
    },
    {
      timestamps: false,
    }
  );
};
