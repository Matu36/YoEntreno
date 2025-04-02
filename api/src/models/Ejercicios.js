const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ejercicios",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Nombre: { type: DataTypes.STRING, allowNull: false },
      Descripcion: { type: DataTypes.TEXT, defaultValue: null },
      Video: { type: DataTypes.TEXT, defaultValue: null },
      idCategoria: { type: DataTypes.INTEGER, allowNull: true },
      idFaseEntrenamiento: { type: DataTypes.INTEGER, allowNull: true },
      idDificultad: { type: DataTypes.INTEGER, allowNull: true },
      idTipoGrupoMuscular: { type: DataTypes.INTEGER, allowNull: true },
    },
    { timestamps: false }
  );
};

// aca tenemos todos los ejercicios clasificados en entrada en calor, parte central, vuelta a la calma
// en grandes y pequeños grupos musculares
// en grupo muscular
