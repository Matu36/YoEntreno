const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "MetodosEntrenamiento",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
    },
    { timestamps: false }
  );
};
