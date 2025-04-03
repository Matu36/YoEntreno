const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "MetodoEjercicio",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idMetodoEntrenamiento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "MetodosEntrenamiento",
          key: "id",
        },
      },
      idEjercicios: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Ejercicios",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
