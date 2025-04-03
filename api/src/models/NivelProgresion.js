const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "NivelProgresion",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      nivel: { type: DataTypes.STRING, defaultValue: null },
    },
    {
      tableName: "NivelProgresion",
      timestamps: false,
    }
  );
};

/* 
1 Inicial
2 Media
3 Avanzada
*/
