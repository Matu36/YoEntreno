const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "TipoGrupoMuscular",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tipoGrupoMuscular: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
    },
    {
      tableName: "TipoGrupoMuscular",
      timestamps: false,
    }
  );
};

//tipo muscular //
// 1: Pequeños
// 2: Grandes
