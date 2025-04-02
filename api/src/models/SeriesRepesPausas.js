const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "SeriesRepesPausas",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      idSeries: { type: DataTypes.INTEGER, allowNull: true },
      idRepeticiones: { type: DataTypes.INTEGER, allowNull: true },
      idPausas: { type: DataTypes.INTEGER, allowNull: true },
    },
    { timestamps: false }
  );
};
