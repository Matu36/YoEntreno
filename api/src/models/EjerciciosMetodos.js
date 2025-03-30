const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "EjerciciosMetodos",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idEjercicio: {
        type: DataTypes.INTEGER,
        references: {
          model: "Ejercicios",
          key: "id",
        },
      },
      idMetodo: {
        type: DataTypes.INTEGER,
        references: {
          model: "MetodosEntrenamiento",
          key: "id",
        },
      },
      series: {
        type: DataTypes.INTEGER,
      },
      repeticiones: {
        type: DataTypes.INTEGER,
      },
      descanso: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};

//aca definimos el etodo junto con las repeticiones, descansos, series, etc.
