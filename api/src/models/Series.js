const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Series",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idTipoGrupoMuscular: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "TipoGrupoMuscular",
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
    },
    {
      timestamps: false,
    }
  );
};

/* Por ejemplo, si idMetodo es 1 (sovietico) y tipoGrupoMuscular es 1 (GRANDE) las series son de 
4 a 6 y las repeticiones varian de a 1, 2, 3, 4, 5, 6; asi con todos los metodos */

/* Todas las rutinas van a traer 2 o 3 ejercicios de fase de entrenamiento y de vuelta a la calma */
