const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Rutina",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      descripcion: {
        type: DataTypes.STRING,
      },
      fechaCreacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      idObjetivoEntrenamiento: {
        type: DataTypes.INTEGER,
        references: {
          model: "ObjetivosEntrenamiento",
          key: "id",
        },
      },
      idMetodoEntrenamiento: {
        type: DataTypes.INTEGER,
        references: {
          model: "MetodosEntrenamiento",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
