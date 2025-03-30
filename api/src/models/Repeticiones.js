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
      idEjercicioGrupoMuscular: { type: DataTypes.INTEGER, allowNull: true },
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
