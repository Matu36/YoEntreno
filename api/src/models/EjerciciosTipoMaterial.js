const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "EjerciciosTipoMaterial",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      material: { type: DataTypes.STRING, defaultValue: null },
    },
    {
      tableName: "EjerciciosTipoMaterial",
      timestamps: false,
    }
  );
};

/* 
1 Mancuernas
2 Bandas elásticas
3 Barras 
4 Pesas rusas
5 Balón medicinal
6 Poleas
7 Máquinas
8 Propio Cuerpo
*/
