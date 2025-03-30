const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "MetodosEjerciciosDetalles",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idMetodo: {
        type: DataTypes.INTEGER,
        references: {
          model: "MetodosEntrenamiento",
          key: "id",
        },
      },
      idObjetivo: {
        type: DataTypes.INTEGER,
        references: {
          model: "ObjetivosEntrenamientos",
          key: "id",
        },
      },
      series: {
        type: DataTypes.INTEGER,
      },
      repeticiones: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};
