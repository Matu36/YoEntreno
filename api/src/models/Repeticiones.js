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
      idSeries: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Series",
          key: "id",
        },
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
