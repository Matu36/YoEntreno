const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Repeticiones",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idEjercicios: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Ejercicios",
          key: "id",
        },
      },
      idMetodoEntrenamiento: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "MetodosEntrenamiento",
          key: "id",
        },
      },
      cantidad: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
    },
    {
      timestamps: false,
    }
  );
};
