// const axios = require("axios");
// const { Ejercicios } = require("../db.js");
// const translate = require("google-translate-api-x");

// const apiKey = "02690487-43c5-4d74-978c-79ae8c32b410";
// const url = "https://api.wrkout.xyz/exercise/exerciseIds";

// const obtenerEjercicios = async (page = 1, limit = 25) => {
//   try {
//     console.log(`Solicitando ejercicios - Página: ${page}, Límite: ${limit}`);

//     const response = await axios.get(url, {
//       headers: { "X-API-Key": apiKey },
//       params: {
//         page: page.toString(),
//         limit: limit.toString(),
//       },
//     });

//     if (response.data && response.data.exercises) {
//       console.log(
//         `Ejercicios obtenidos en la página ${page}:`,
//         response.data.exercises
//       );
//       return response.data;
//     } else {
//       console.error("No se encontraron ejercicios en la respuesta.");
//       return null;
//     }
//   } catch (error) {
//     console.error(
//       "Error al obtener los ejercicios:",
//       error.response ? error.response.data : error.message
//     );
//     return null;
//   }
// };

// const llenarBaseDeDatos = async () => {
//   let page = 1;
//   const limit = 25;
//   let ejerciciosGuardados = 0;

//   const ejerciciosGuardadosSet = new Set();

//   while (true) {
//     console.log(`Obteniendo página ${page}...`);

//     const data = await obtenerEjercicios(page, limit);

//     if (!data || !data.exercises || data.exercises.length === 0) {
//       console.log("No hay más ejercicios para guardar.");
//       break;
//     }

//     // Si la respuesta contiene la cantidad total de ejercicios, controlamos la paginación
//     const totalEjercicios = data.total || 0; // Ajusta según la respuesta de la API
//     const totalPaginas = Math.ceil(totalEjercicios / limit);

//     for (const exercise of data.exercises) {
//       const nombreIngles = exercise.displayName;

//       if (ejerciciosGuardadosSet.has(nombreIngles)) {
//         console.log(`Ejercicio ya guardado: ${nombreIngles}`);
//         continue;
//       }

//       const videoURL =
//         exercise.premiumVideos.length > 0 ? exercise.premiumVideos[0] : null;

//       const traduccion = await translate(nombreIngles, { to: "es" });
//       const nombreEspanol = traduccion.text;

//       try {
//         await Ejercicios.create({
//           nombre: nombreEspanol,
//           videoURL: videoURL,
//         });

//         console.log(`Ejercicio guardado: ${nombreEspanol}`);
//         ejerciciosGuardados++;
//         ejerciciosGuardadosSet.add(nombreIngles);
//       } catch (error) {
//         console.error(
//           `Error al guardar ejercicio: ${nombreEspanol}`,
//           error.message
//         );
//       }
//     }

//     // Incrementa la página si no se ha llegado a la última
//     if (page < totalPaginas) {
//       page++;
//     } else {
//       break;
//     }
//   }

//   console.log(`Total de ejercicios guardados: ${ejerciciosGuardados}`);
// };

// llenarBaseDeDatos();
