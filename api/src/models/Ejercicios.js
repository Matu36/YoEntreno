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
      nombre: { type: DataTypes.STRING, allowNull: false },
      idEjercicioGrupoMuscular: { type: DataTypes.INTEGER, allowNull: true },
      idFaseEntrenamiento: { type: DataTypes.INTEGER, allowNull: true },
      descripcion: { type: DataTypes.TEXT, defaultValue: null },
      videoURL: { type: DataTypes.TEXT, defaultValue: null },
    },
    { timestamps: false }
  );
};

// aca tenemos todos los ejercicios clasificados en entrada en calor, parte central, vuelta a la calma
// en grandes y pequeños grupos musculares
// en grupo muscular
