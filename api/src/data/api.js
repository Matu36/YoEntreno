const EjercicioTipoMaterial = [
  { id: 1, material: "Mancuernas" },
  { id: 2, material: "Bandas elásticas" },
  { id: 3, material: "Barras" },
  { id: 4, material: "Pesas rusas" },
  { id: 5, material: "Balón medicinal" },
  { id: 6, material: "Poleas" },
  { id: 7, material: "Máquinas" },
  { id: 8, material: "Propio cuerpo" },
];

// faseEntrenamiento 1: entrada en calor
// faseEntrenamiento 2: parte central
// faseEntrenamiento 3: vuelta a la calma

//tipo muscular //
// 1: Pequeños
// 2: Grandes

//Categoria//
// GRUPO 1: dinamicos
// GRUPO 2: core
// GRUPO 3: pectoral
// GRUPO 4: espalda
// GRUPO 5: piernas
// GRUPO 6: hombros
// GRUPO 7: biceps
// GRUPO 8: triceps

//Dificultad//
/* 
1 Inicial
2 Medio
3 Avanzada
 */

//EjercicioTipoMaterial//
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

const ejercicios = [
  {
    Id: 1,
    Nombre: "Jumping Jacks",
    Descripcion: "Ejercicio aeróbico para activar el cuerpo.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dc4DAnQ6DtF8&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907479020%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=plirptdEidGKre6u2YCA6EfWoqWzvQevlcuY8dj5RQY%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 2,
    idCategoria: 1,
    idDificultad: 1,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 2,
    Nombre: "Rotaciones de hombros",
    Descripcion: "Movilidad articular para calentar los hombros.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6hzM3zeTTRw&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907495720%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=w%2BGySW46pJpGy4Jnx6PQCm2zWDv2P%2Fn5PbGZD6Ld9uE%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 1,
    idCategoria: 6,
    idDificultad: 1,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 3,
    Nombre: "Sentadilla con salto",
    Descripcion: "Ejercicio dinámico para piernas y glúteos.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1kRrK_lnAs8&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907504027%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=CqKo%2BV%2FKoxo01bp4H7jLnCHxBcMSJdLX%2FqzEOGcvu5c%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 4,
    Nombre: "Plancha abdominal",
    Descripcion: "Ejercicio isométrico para fortalecer el core.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpSHjTRCQxIw&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907512104%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=FJfD5XBvMZAGCefM243cPbwLbO6eo1WLLmbnG6zF%2FCE%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 2,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 5,
    Nombre: "Flexiones de pecho",
    Descripcion: "Ejercicio clásico para fortalecer el pectoral.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907520277%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=tLkLjqLweJybiwYm3%2FpXsjVn084hNiCgG98QjZBdes8%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 3,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 6,
    Nombre: "Dominadas",
    Descripcion: "Ejercicio avanzado para fortalecer la espalda.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeGo4IYlbE5g&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907528241%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=H370khbaxZytnu50wy46nQhSg5nt6T5PMJ1JFvKKktQ%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 4,
    idDificultad: 3,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 7,
    Nombre: "Press Militar",
    Descripcion: "Ejercicio con pesas para fortalecer los hombros.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0GMr8xV4IY4&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907536202%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=SImubT2SaiBiblRLOLsCd1cCGsKidgnuR6%2BjOIVX9a0%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 6,
    idDificultad: 2,
    idEjercicioTipoMaterial: 3,
  },
  {
    Id: 8,
    Nombre: "Curl de bíceps con mancuernas",
    Descripcion: "Ejercicio para desarrollar los bíceps.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DykJmrZ5v0Oo&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907544460%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=raPCwkTtlME1SqEbLRN2tqe3jkQXscTXs8oFDQQxBhs%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 7,
    idDificultad: 1,
    idEjercicioTipoMaterial: 1,
  },
  {
    Id: 9,
    Nombre: "Fondos en paralelas",
    Descripcion: "Ejercicio avanzado para tríceps y pectorales.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6kALZikXxLc&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907554634%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=YQuE85ghp5Fz0UBKywUbdFemSCh73ypYWxDft%2B%2FCIBY%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 8,
    idDificultad: 3,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 10,
    Nombre: "Estiramiento de cuádriceps",
    Descripcion: "Ejercicio de elongación para relajar las piernas.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1kRrK_lnAs8&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907564199%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=DqyZtrNbTU5NMkyCi5z40kY%2FFT67BT12sKIDDPNuF2Q%3D&reserved=0",
    idFaseEntrenamiento: 3,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 1,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 11,
    Nombre: "Burpees",
    Descripcion: "Ejercicio de alta intensidad para todo el cuerpo.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJZQA08E7vws&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907572606%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=YQpQxBQRUDP%2BYrsz4LmhZKchJOJf1kADgWLHJ3ca%2FsE%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 2,
    idCategoria: 1,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 12,
    Nombre: "Escaladores",
    Descripcion: "Ejercicio dinámico para el core y piernas.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2z8JmcrW-As&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907580289%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=xWUepwMmMhPbsT5nO%2B8iPoSDpwHw4GzJDZ%2FImkXN6QE%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 1,
    idCategoria: 2,
    idDificultad: 1,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 13,
    Nombre: "Saltos de tijera",
    Descripcion: "Ejercicio cardiovascular que trabaja todo el cuerpo.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DO3dbM0Fv7HA&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907588137%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=LWGZ5caHEyMSszWgJssoQs69OHr0m2mls3hMgfigp1M%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 2,
    idCategoria: 1,
    idDificultad: 1,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 14,
    Nombre: "Plancha lateral",
    Descripcion: "Ejercicio para fortalecer los oblicuos.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKzOwTAY9hbY&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907595894%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=diAPdhRNzaZFc404t3AGl0QG9YLDHscZ5h8rmc8OGEM%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 2,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 15,
    Nombre: "Superman",
    Descripcion: "Ejercicio para fortalecer la espalda baja.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dz6PJMT2y8GQ&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907603708%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=jBtFaOTc67T61jeA9P4IqAdcp49RYlYz%2FqvN0apNDKc%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 4,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 16,
    Nombre: "Curl femoral",
    Descripcion: "Ejercicio para trabajar los isquiotibiales.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJ4uYHzY8htY&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907611694%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=8oDd6xmiPfmiHPuv3HsA2jgpX5xSCP1xprRnY9rXTaw%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 7,
  },
  {
    Id: 17,
    Nombre: "Prensa de pierna",
    Descripcion: "Ejercicio avanzado para fortalecer las piernas.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeZFxg9p1gMc&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907619909%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=%2Be6soDq1j1beSlzl3t%2FVk%2FEz%2B7zK5zGRFq1tUbMVnEc%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 3,
    idEjercicioTipoMaterial: 7,
  },
  {
    Id: 18,
    Nombre: "Aperturas de pectorales",
    Descripcion: "Ejercicio para trabajar los pectorales.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqdD7vyd9ZRY&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907627917%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=B5T0Uj%2BRE2aZDkbrkYdffr1wntlKltZCFl%2FjxbCOL0E%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 3,
    idDificultad: 2,
    idEjercicioTipoMaterial: 7,
  },
  {
    Id: 19,
    Nombre: "Elevaciones frontales",
    Descripcion: "Ejercicio para trabajar los hombros.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGo3rLMH2hzo&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907636246%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=5ml49k8QIkYrZ3jV2B1y75xQ%2B%2FJF0pMIXL387wXB%2FaI%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 6,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 20,
    Nombre: "Flexiones de tríceps",
    Descripcion: "Ejercicio para fortalecer los tríceps.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnzC9sjFNg40&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907644569%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=f4a7vNapMumxnbY%2FKXWtAScvl7KmgK8bys7Dz2DF8xI%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 8,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 21,
    Nombre: "Zancadas",
    Descripcion: "Ejercicio para fortalecer las piernas y glúteos.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZyK6S_l5XYg&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907653834%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=wBxHhWkwSoZaOdTBqo9%2BhDrhbJJmoBUfmFY7WpEWWlA%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 3,
  },
  {
    Id: 22,
    Nombre: "Mountain climbers",
    Descripcion: "Ejercicio de alta intensidad para todo el cuerpo.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2z8JmcrW-As&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907662226%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=wymuBt5arbaSCyxr6R%2BNgpkJEb%2FAprpSH85ymJHaF%2FY%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 2,
    idCategoria: 1,
    idDificultad: 1,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 23,
    Nombre: "Flexiones con aplauso",
    Descripcion: "Ejercicio avanzado de flexiones explosivas.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxtXJ7u64XAY&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907670564%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=grrnz03zwuq4urrN12%2FCnRb5kvf%2F1MovpH6Ycws47PU%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 3,
    idDificultad: 3,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 24,
    Nombre: "Burpees con salto",
    Descripcion: "Burpees con un salto al final para aumentar la intensidad.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DqXJdpOzmDkw&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907678578%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=6oPDnhUhSeRqcrx07hD%2FCsqxUwNv5peSEN1pOlFrzzc%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 2,
    idCategoria: 1,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 25,
    Nombre: "Tijeras con mancuernas",
    Descripcion: "Ejercicio para trabajar piernas y glúteos.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DbPExXYtVxJw&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907687248%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=XJmqQGz24F7BD2MWlrWiAIVjuM27DUS2%2BXKfyJoACoE%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 1,
  },
  {
    Id: 26,
    Nombre: "Sprints",
    Descripcion:
      "Ejercicio cardiovascular para mejorar la velocidad y resistencia.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DX6b4AsV9cZo&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907695306%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=wYRWbAeP1auAdbKvks%2F%2FRj4B%2Fo5EiH%2FnJzubA8L1YiY%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 2,
    idCategoria: 1,
    idDificultad: 1,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 27,
    Nombre: "Ab twist",
    Descripcion: "Ejercicio para trabajar el core y los oblicuos.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkfXcFzGV8TA&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907704032%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=DsiJroyCYZxLKl1bISVt%2FuleJK5TK6IauLLgdtA8Fzg%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 2,
    idDificultad: 1,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 28,
    Nombre: "Deadlifts",
    Descripcion:
      "Ejercicio para fortalecer la parte inferior de la espalda y piernas.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1P5EGO9Lxfg&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907714982%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=aVxp6ZVT0hvPGiRYN5CQHHgXufB3686CL962MH0wgXc%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 5,
    idDificultad: 3,
    idEjercicioTipoMaterial: 3,
  },
  {
    Id: 29,
    Nombre: "Sentadilla búlgara",
    Descripcion: "Ejercicio de piernas para glúteos y cuádriceps.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2C-uNgKwPLE&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907723035%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=2MUkxYyMdi%2FY12x9iwg0c5tlM8U9iCQisFULvpCh0Ss%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 1,
  },
  {
    Id: 30,
    Nombre: "Saltos en caja",
    Descripcion: "Ejercicio explosivo para trabajar las piernas.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkwzZuMl7FcA&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907731366%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=3xdfpEVho2EQhJL4tYpvYayhFJmZ%2F%2BNXq%2BxZsee9390%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 3,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 31,
    Nombre: "Flexiones de triceps",
    Descripcion: "Ejercicio clásico para fortalecer los triceps.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnzC9sjFNg40&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907864895%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=yt5FcgtWl4tpDsrPWAd6sHYiOLR83gGq6GrJTtGzsP0%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 8,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 32,
    Nombre: "Squats con salto",
    Descripcion: "Sentadillas con salto para fortalecer piernas y glúteos.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1kRrK_lnAs8&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907875300%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=b2SB52dfaeSOcTNGRmKPxDQyorgscsAk5%2FyNeqifASE%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 33,
    Nombre: "Elevación de talones",
    Descripcion: "Ejercicio para trabajar las pantorrillas.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4NiIjoHGbA4&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907884256%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=48tgVhN3hqHYEtPriOMVIRlhXTQd%2F7fkZuKxDVvQPAI%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 1,
    idEjercicioTipoMaterial: 1,
  },
  {
    Id: 34,
    Nombre: "Press de banca",
    Descripcion: "Ejercicio clásico para trabajar los pectorales.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrT7DgCr-3V8&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907892678%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=0A%2FVKlIEKWX3ZgvECS%2FhpMM9jA9XLZzW4GMweTpctwg%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 3,
    idDificultad: 2,
    idEjercicioTipoMaterial: 3,
  },
  {
    Id: 35,
    Nombre: "Crunch abdominal",
    Descripcion: "Ejercicio básico para el desarrollo de los abdominales.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DK7wRiB5KkZQ&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907900899%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=eJslLNMmK%2FgamE%2Bxdalxi5xRQF6LVM2bj6qFS%2FI4aZg%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 2,
    idDificultad: 1,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 36,
    Nombre: "Hiperextensiones",
    Descripcion: "Ejercicio para fortalecer la espalda baja.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dz6PJMT2y8GQ&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907909171%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=vOVb7UTgyvTBBH7ZS6kfUmQdtPhKhhz15XMgdUwDA6I%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 4,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 37,
    Nombre: "Flexiones de brazos",
    Descripcion: "Ejercicio para fortalecer los pectorales y tríceps.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907917235%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=wUq2TgIG7o%2Bput9R4wwkQ3VtQl6Jj1Wp53aSOkE6ptk%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 3,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 38,
    Nombre: "Plancha con toques de hombro",
    Descripcion: "Ejercicio avanzado para fortalecer el core y los hombros.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5WbA8D7a29Y&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907925239%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=dIAQgJ%2FrZug6BZHSvnvqJYHSX8voJCUzXQqyyJWyPao%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 2,
    idDificultad: 3,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 39,
    Nombre: "Mountain climbers cruzados",
    Descripcion: "Versión avanzada de los escaladores, con un toque cruzado.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2z8JmcrW-As&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907933322%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=uuCzm1VWyN%2BoRoTavhzKMHSgQloevpnjhOunw65Tj7U%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 2,
    idCategoria: 1,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 40,
    Nombre: "Zancadas con mancuernas",
    Descripcion: "Ejercicio para trabajar piernas y glúteos con pesas.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOZGJzJ-9X_I&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907941534%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=o7pXwsAJxHbAmZzwR4z8HpYXaNv9jkOW2Fn9hQmm7EM%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 1,
  },
  {
    Id: 41,
    Nombre: "Flexiones de pecho con palmada",
    Descripcion: "Ejercicio avanzado para fortalecer el pecho y los hombros.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DV2a9Gz7__sY&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907949762%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=ZN8qwQqe9j2BrjGM6T8J7UYUNzEqQTV%2BCl4jK39MMec%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 3,
    idDificultad: 3,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 42,
    Nombre: "Patadas de burro",
    Descripcion: "Ejercicio para trabajar los glúteos.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGlKvQUj33L4&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907957732%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=vOqmxvMS9GJK4R8jcHh2A1oinfHH%2FM4eurf%2B1stUrVg%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 5,
    idDificultad: 1,
    idEjercicioTipoMaterial: 6,
  },
  {
    Id: 43,
    Nombre: "Elevaciones laterales",
    Descripcion: "Ejercicio para trabajar los hombros.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGo3rLMH2hzo&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907965676%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=cb2U48t4x2a08%2BNQ%2F8KnFdQjrYevvf%2Fnmeut0xKLHUQ%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 6,
    idDificultad: 2,
    idEjercicioTipoMaterial: 1,
  },
  {
    Id: 44,
    Nombre: "Sentadilla con mancuernas",
    Descripcion: "Sentadilla con carga adicional para trabajar las piernas.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2uXr2L5gV14&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907973613%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=PsZpf5iiZtvcNJhbZHXzzrFoFRIVWmjcmfaGFTmA96o%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 1,
  },
  {
    Id: 45,
    Nombre: "Crunch inverso",
    Descripcion: "Ejercicio para trabajar la parte inferior del abdomen.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZTuyvnb2HhI&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907981389%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=hvkvleYCzvGBnBfP1j%2F9N7T150wf0d3tCF%2BvGopkQVg%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 2,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 46,
    Nombre: "Flexión de codo",
    Descripcion: "Ejercicio para trabajar los bíceps.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsUqnoRhJgOE&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907989509%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=UunBnLfP3EQ%2BKNIYcWJ8qSzydlJkE4%2B6ZIvtoeA8E8o%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 7,
    idDificultad: 1,
    idEjercicioTipoMaterial: 1,
  },
  {
    Id: 47,
    Nombre: "Desplantes",
    Descripcion: "Ejercicio de piernas con foco en glúteos y cuádriceps.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsZZopfrSspA&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575907997315%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=RWcSl9qc8fD89TzTu9A5vbd4UmF6kN5glZHgdLMmiX8%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 1,
  },
  {
    Id: 48,
    Nombre: "Estiramiento de glúteos",
    Descripcion: "Ejercicio de estiramiento para relajar los glúteos.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKNs4hFmvn6M&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908005394%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=tJBd90xJ0YET9s8h0c%2FdBytir%2BV%2BsKuKY5tT587fv5Y%3D&reserved=0",
    idFaseEntrenamiento: 3,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 1,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 49,
    Nombre: "Press de hombros",
    Descripcion:
      "Ejercicio para fortalecer los hombros con barra o mancuernas.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0GMr8xV4IY4&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908013237%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=%2Bwrgcfumsh4byBRGP6TmuN3f0dujOhMdFiOB0IOqyDc%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 6,
    idDificultad: 2,
    idEjercicioTipoMaterial: 1,
  },
  {
    Id: 50,
    Nombre: "Ab twist con balón medicinal",
    Descripcion: "Ejercicio para trabajar los oblicuos con balón medicinal.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkfXcFzGV8TA&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908030965%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=atfAYluq8rvtYhCi9Y8QcMFc%2F%2Fa8VBF%2FZrmpvzrzFCk%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 2,
    idDificultad: 2,
    idEjercicioTipoMaterial: 5,
  },
  {
    Id: 51,
    Nombre: "Hip thrust",
    Descripcion: "Ejercicio para glúteos y piernas.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DtyZyqa69JY8&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908045620%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=WWXbe1pOPscY52nwL6legQhfEFz6MnBeIIYYCfXIzFA%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 3,
  },
  {
    Id: 52,
    Nombre: "Rodillas al Pecho",
    Descripcion: "Saltos en el lugar elevando las rodillas al pecho.",
    Video: "https://www.youtube.com/watch?v=Uamr4M1WfQg",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 1,
    idCategoria: 1, // Dinámicos
    idDificultad: 1,
    idEjercicioTipoMaterial: 8, // Propio Cuerpo
  },
  {
    Id: 53,
    Nombre: "Russian twists",
    Descripcion: "Ejercicio para trabajar el core y los oblicuos.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwDAN4V5qbEw&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908062627%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=Ze9uRwvSR0iviAK%2Fhy%2FyC7SLvFi8EqievLjs2FIOIcI%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 2,
    idDificultad: 1,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 54,
    Nombre: "Superman",
    Descripcion: "Ejercicio para fortalecer la espalda baja.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dz6PJMT2y8GQ&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908070552%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=ge%2BmaWgtrVq%2BbD7QWSpdlvi%2F27pYKi8eKV2gBx8LrYc%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 4,
    idDificultad: 1,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 57,
    Nombre: "Lunges con giro",
    Descripcion: "Zancadas con un giro para trabajar piernas y core.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5N7s0diGmG0&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908095004%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=pCKQIWafUEass%2BZeqgBV3dupYDZ9MhP7aSxuOG5NaDg%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },

  {
    Id: 59,
    Nombre: "Círculos con los brazos",
    Descripcion: "Ejercicio para calentar y activar los hombros.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DzxgWGUaJ0cc&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908111222%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=7WqklAkDdnfcBLKvY99co31B2%2BxOjDUeHS1GWgGBgoE%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 1,
    idCategoria: 6,
    idDificultad: 1,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 60,
    Nombre: "Jump squat",
    Descripcion: "Sentadillas con salto para trabajar piernas y glúteos.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DK3RGITuPvWk&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908119196%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=kl6I2l%2F0j1d5u7pXu5JbAytUZ9hGlRjZlKbk9bru4VQ%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 61,
    Nombre: "Flexión de brazo con mancuerna",
    Descripcion: "Ejercicio para fortalecer los triceps y bíceps.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DehDi7lFwD2E&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908127112%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=hFYopQE8bKPqpsIkDEmteer8wsSWTa%2BPFfE4U3yTy3U%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 8,
    idDificultad: 2,
    idEjercicioTipoMaterial: 1,
  },
  {
    Id: 62,
    Nombre: "Paseo del granjero",
    Descripcion: "Ejercicio que trabaja los hombros, core y espalda.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFq8hv_XT2OY&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908134960%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=8Z%2FaO4egoHFWqjfTxhJgPOHhJIoil9yKV97gh0%2BTkLk%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 6,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 63,
    Nombre: "Flexiones de brazos modificadas",
    Descripcion:
      "Flexiones con las rodillas apoyadas, ideal para principiantes.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D0hVfNpq_AaI&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908143149%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=as2McpEAMc2isDX1MDEdFwq5gXJHWtiHFDxWLAMIOiw%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 3,
    idDificultad: 1,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 64,
    Nombre: "Bicicleta abdominal",
    Descripcion: "Ejercicio de abdominales para fortalecer el core y oblicuos.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHv4kw6At-B0&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908151037%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=jcHh1C6O0S1b1uizKdHoY35lth%2FWrNAykSWAIXJ9A0Q%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 2,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 65,
    Nombre: "Puente de glúteos",
    Descripcion: "Ejercicio para trabajar los glúteos y la espalda baja.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3pT-i_Fz7A8&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908158728%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=a7BK3t6KZO3lD54jcoruKAFuK7IG9Ib2a0hDGZCc3jI%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 5,
    idDificultad: 1,
    idEjercicioTipoMaterial: 1,
  },

  {
    Id: 67,
    Nombre: "Sentadillas con salto en caja",
    Descripcion:
      "Sentadillas seguidas de un salto sobre una caja, para mejorar fuerza y resistencia.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D51mwls38o-4&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908174710%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=DzmVAwXUqlBkfMH1y2vl374aUvnPI%2FjI%2Bdc8Yq0BLnk%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 3,
    idEjercicioTipoMaterial: 1,
  },
  {
    Id: 68,
    Nombre: "Curl de piernas en máquina",
    Descripcion: "Ejercicio para trabajar los isquiotibiales.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZ7hwHl7tYl4&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908183575%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=fRow7seEaEYaLHk51ik3k7pWbYZQ6ZUROGmspnpUOSY%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 7,
  },

  {
    Id: 70,
    Nombre: "Fondos en paralelas",
    Descripcion: "Ejercicio para fortalecer los triceps y pectorales.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1Q07jlO7OIg&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908199449%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=yEAk0xWDgrOWlBEMbR02w78BfZcSCMDTd5wuQpcwKiU%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 8,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 71,
    Nombre: "Press militar con barra",
    Descripcion: "Ejercicio para fortalecer los hombros.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSTUqzWrrj_A&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908218143%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=3ejLezsMyB2HIzIiSJ7D7AS38UynipsLmU7fsC%2FicR8%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 6,
    idDificultad: 2,
    idEjercicioTipoMaterial: 3,
  },
  {
    Id: 72,
    Nombre: "Elevaciones frontales",
    Descripcion: "Ejercicio para trabajar la parte frontal de los hombros.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D53pY4BgrKdg&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908226425%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=lNZpS5nAabUMV2zOuf4UfZOBwiJ3%2FMSNxoekZj%2FaPHM%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 6,
    idDificultad: 1,
    idEjercicioTipoMaterial: 1,
  },
  {
    Id: 76,
    Nombre: "Ab roll-out",
    Descripcion: "Ejercicio avanzado para el desarrollo del core.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGzJ3F9Fs3Zk&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908259029%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=385XfN3jBzqbpzEmywji8asBGQ6n4UBA17vyS%2F9S%2FdY%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 2,
    idDificultad: 3,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 77,
    Nombre: "Burpees con push-up",
    Descripcion:
      "Burpees combinados con flexión de brazos para trabajar todo el cuerpo.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DtpGqNgg2e9Y&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908267094%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=Wm9XGxUnEP2mpsiRaeWt9x8cDibPky1wOLyIR38IP9c%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 2,
    idCategoria: 1,
    idDificultad: 3,
    idEjercicioTipoMaterial: 8,
  },

  {
    Id: 80,
    Nombre: "Remo con barra",
    Descripcion: "Ejercicio para trabajar la espalda media y bíceps.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6RY-Nj_dQgE&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908291114%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=Oq2dP5Y1kLqOwArgZT4b3m7UmnbTmBHdOo9Ph7BMpqo%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 4,
    idDificultad: 2,
    idEjercicioTipoMaterial: 3,
  },
  {
    Id: 81,
    Nombre: "Curl de bíceps con barra",
    Descripcion: "Ejercicio para trabajar los bíceps.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D9ktt1MrrLhA&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908299322%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=iPcDsoaj9T5V3fZaeBsza6WWDUzWpmVzMudh2ZQOi20%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 7,
    idDificultad: 1,
    idEjercicioTipoMaterial: 3,
  },
  {
    Id: 82,
    Nombre: "Jumping Lunges",
    Descripcion: "Ejercicio para trabajar las piernas con un toque dinámico.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTH3JfJ7Ij0s&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908307283%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=SQNx78mNYedpiA86uFGS1U%2B0I%2FfLIucMWl2Nwcgz7%2F8%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 83,
    Nombre: "Sentadilla hack",
    Descripcion: "Sentadilla con máquina para trabajar los cuadriceps.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DlMtq-pLrT9k&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908315455%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=IwhiQ8S91nLfo%2F%2BpqQMC0x3iSzH99N4lbCAKxm4CPaU%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 7,
  },
  {
    Id: 84,
    Nombre: "Curls de pierna acostado",
    Descripcion: "Ejercicio de isquiotibiales.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dw8hK9DzGTe0&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908323545%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=2NnHSDGbfz3SgoP3toWLstd8XsoOat1v4BqsLgapHBQ%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 1,
    idEjercicioTipoMaterial: 7,
  },
  {
    Id: 85,
    Nombre: "Box jumps",
    Descripcion:
      "Saltos sobre una caja para mejorar la explosividad y la fuerza de las piernas.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3fPde2OkRAw&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908334041%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=jOIFNq%2FAAMZC0yGS1sdiYycZMPB3PVwQGm50zK82jJ0%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 3,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 86,
    Nombre: "Plancha abdominal con elevación de pierna",
    Descripcion: "Ejercicio para trabajar el core y la estabilidad.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D7XU4Szw5Efw&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908343117%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=AAko2GyX%2Bui90FNm%2B3ACuyOa%2BGA%2BY0dukR1N2irugg0%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 2,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 87,
    Nombre: "Lunge con mancuernas",
    Descripcion: "Zancadas con mancuernas para trabajar piernas y glúteos.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DThkYrHfxHRw&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908351510%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=boXUGouvXLN9289hhLviW4Lq%2Fosm%2B9gKq%2B6KbcrNjkA%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 1,
    idEjercicioTipoMaterial: 1,
  },
  {
    Id: 88,
    Nombre: "Crunch invertido",
    Descripcion:
      "Ejercicio abdominal para trabajar los músculos inferiores del abdomen.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-bJGV10_Rp0&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908359511%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=ifcAKyFg4NtFoMJRjLa3MkjLnJiyfsV25jqZR4zpvgA%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 2,
    idDificultad: 1,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 89,
    Nombre: "Kettlebell swings",
    Descripcion: "Ejercicio para trabajar glúteos y espalda baja.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D4FqSgqfqEu8&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908367436%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=WXVGKR13cOX4sLz0nbmjgM1g6T9ghRmcpEOo%2BJowYxI%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 4,
  },
  {
    Id: 90,
    Nombre: "Saltos en cuclillas",
    Descripcion:
      "Sentadillas con salto, excelente para trabajar la fuerza explosiva.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_b2wkpQj60Y&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908375422%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=ox4we5xs9cOhEmixci6XdIcK38wwddQVKwUHSkYR7q0%3D&reserved=0",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 2,
    idEjercicioTipoMaterial: 8,
  },
  {
    Id: 91,
    Nombre: "Tríceps en cuerda",
    Descripcion:
      "Ejercicio para trabajar los tríceps usando la cuerda en polea.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQfj5a7J_hmM&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908383256%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=6mds2LUJAw7SbjmOYXw1ReOKJkUKGr1uh8FPShqdtvw%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 8,
    idDificultad: 2,
    idEjercicioTipoMaterial: 6,
  },
  {
    Id: 92,
    Nombre: "Vuelos laterales",
    Descripcion:
      "Ejercicio para fortalecer los hombros, particularmente la parte lateral.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2VZpRl23ReE&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908391129%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=jXl5WL89oLi3yt%2F5WZYAMrubX7NmIm6honZwLKw2hmI%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 6,
    idDificultad: 1,
    idEjercicioTipoMaterial: 1,
  },
  {
    Id: 93,
    Nombre: "Peso muerto con barra",
    Descripcion:
      "Ejercicio fundamental para la parte posterior de las piernas y la espalda.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DytGaGIn3SjE&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908399477%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=wUdB0T%2FtxsLH2UOLWT0%2BGwM31sAGCUEkQANJEhJbeJ4%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 2,
    idCategoria: 5,
    idDificultad: 3,
    idEjercicioTipoMaterial: 3,
  },
  {
    Id: 94,
    Nombre: "Elevaciones laterales",
    Descripcion: "Ejercicio de hombros para fortalecer la parte lateral.",
    Video:
      "https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D3tD6pY2Ymzk&data=05%7C02%7C%7C730c4f9ce7ea400d951908dd718dc56e%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638791575908407751%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=QA3bhVrGAOL2XmEJ86HcjAzqdyzMQc8aohiH%2FLVfP3I%3D&reserved=0",
    idFaseEntrenamiento: 2,
    idTipoGrupoMuscular: 1,
    idCategoria: 6,
    idDificultad: 1,
    idEjercicioTipoMaterial: 1,
  },

  // DINAMICOS //

  {
    Id: 95,
    Nombre: "Skaters",
    Descripcion: "Saltos laterales simulando el movimiento de un patinador.",
    Video: "https://www.youtube.com/watch?v=0JUlZMV0v14",
    idFaseEntrenamiento: 1,
    idTipoGrupoMuscular: 2,
    idCategoria: 1, // Dinámicos
    idDificultad: 2,
    idEjercicioTipoMaterial: 8, // Propio Cuerpo
  },
  {
    Id: 96,
    Nombre: "Salto de cuerda",
    Descripcion:
      "Ejercicio de cardio que mejora la coordinación y resistencia.",
    Video: "https://www.youtube.com/watch?v=1BZMbtWIy3s",
    idFaseEntrenamiento: 1, // Entrada en calor
    idTipoGrupoMuscular: 1, // Pequeños
    idCategoria: 1, // Dinámicos
    idDificultad: 1, // Inicial
    idEjercicioTipoMaterial: 8, // Propio Cuerpo
  },
  {
    Id: 97,
    Nombre: "Skipping Alto",
    Descripcion:
      "Correr en el lugar elevando las rodillas lo más alto posible.",
    Video: "https://www.youtube.com/watch?v=_VwO0W3G3mk",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 1, // Pequeños
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 8, // Propio Cuerpo
  },
  {
    Id: 98,
    Nombre: "Salto en caja",
    Descripcion:
      "Ejercicio pliométrico que fortalece las piernas y la potencia.",
    Video: "https://www.youtube.com/watch?v=52r_UzUPn1Q",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 3, // Avanzado
    idEjercicioTipoMaterial: 8, // Propio Cuerpo
  },
  {
    Id: 99,
    Nombre: "Tijeras Laterales",
    Descripcion: "Saltos alternando las piernas hacia los lados.",
    Video: "https://www.youtube.com/watch?v=O_olXr-E1XA",
    idFaseEntrenamiento: 1, // Entrada en calor
    idTipoGrupoMuscular: 1, // Pequeños
    idCategoria: 1, // Dinámicos
    idDificultad: 1, // Inicial
    idEjercicioTipoMaterial: 8, // Propio Cuerpo
  },
  {
    Id: 100,
    Nombre: "Salto en Sentadilla",
    Descripcion:
      "Ejercicio de potencia donde se realiza una sentadilla seguida de un salto.",
    Video: "https://www.youtube.com/watch?v=1oed-UmAxFs",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 8, // Propio Cuerpo
  },

  {
    Id: 101,
    Nombre: "Skipping alto",
    Descripcion:
      "Ejercicio cardiovascular que mejora la coordinación y resistencia.",
    Video: "https://www.youtube.com/watch?v=DeTBwEL4m7s",
    idFaseEntrenamiento: 1, // Entrada en calor
    idTipoGrupoMuscular: 1, // Pequeños
    idCategoria: 1, // Dinámicos
    idDificultad: 1, // Inicial
    idEjercicioTipoMaterial: 8, // Propio Cuerpo
  },
  {
    Id: 102,
    Nombre: "Patadas de glúteo",
    Descripcion:
      "Ejercicio de activación para piernas y resistencia cardiovascular.",
    Video: "https://www.youtube.com/watch?v=PtERxupmYpc",
    idFaseEntrenamiento: 1, // Entrada en calor
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 1, // Inicial
    idEjercicioTipoMaterial: 8, // Propio Cuerpo
  },
  {
    Id: 103,
    Nombre: "Saltos con giro",
    Descripcion:
      "Ejercicio pliométrico que trabaja coordinación y explosividad.",
    Video: "https://www.youtube.com/watch?v=MXmPVJZwhvM",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 8, // Propio Cuerpo
  },
  {
    Id: 104,
    Nombre: "Zancadas dinámicas",
    Descripcion: "Ejercicio para fortalecer piernas con desplazamiento.",
    Video: "https://www.youtube.com/watch?v=DgUGVxhvxrA",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 8, // Propio Cuerpo
  },
  {
    Id: 105,
    Nombre: "Saltos en caja",
    Descripcion: "Ejercicio pliométrico para mejorar potencia y explosividad.",
    Video: "https://www.youtube.com/watch?v=52r_UlDDvwY",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 3, // Avanzado
    idEjercicioTipoMaterial: 8, // Propio Cuerpo
  },
  {
    Id: 107,
    Nombre: "Vitalizaciones con disco",
    Descripcion: "Ejercicio de movilidad y activación muscular con disco.",
    Video: "https://www.youtube.com/watch?v=3p4jWYSuXEM",
    idFaseEntrenamiento: 1, // Entrada en calor
    idTipoGrupoMuscular: 1, // Pequeños
    idCategoria: 1, // Dinámicos
    idDificultad: 1, // Inicial
    idEjercicioTipoMaterial: 3, // Barras / Discos
  },
  {
    Id: 108,
    Nombre: "Saltos laterales con balón medicinal",
    Descripcion: "Ejercicio pliométrico para mejorar agilidad y fuerza.",
    Video: "https://www.youtube.com/watch?v=6J-lShEvdzs",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 5, // Balón medicinal
  },
  {
    Id: 109,
    Nombre: "Carrera con resistencia elástica",
    Descripcion: "Ejercicio de potencia con bandas elásticas para velocidad.",
    Video: "https://www.youtube.com/watch?v=O_9QINg3w2g",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 3, // Avanzado
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 110,
    Nombre: "Swing con pesa rusa",
    Descripcion: "Ejercicio de potencia y coordinación con pesas rusas.",
    Video: "https://www.youtube.com/watch?v=YSxHifyI6s0",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 4, // Pesas rusas
  },
  {
    Id: 111,
    Nombre: "Burpees con salto a banco",
    Descripcion:
      "Variante de burpees con mayor dificultad y trabajo explosivo.",
    Video: "https://www.youtube.com/watch?v=ZLNGDywMkuE",
    idFaseEntrenamiento: 3, // Vuelta a la calma
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 3, // Avanzado
    idEjercicioTipoMaterial: 8, // Propio Cuerpo
  },
  {
    Id: 112,
    Nombre: "Zancadas con Press de Hombros",
    Descripcion: "Ejercicio combinado que trabaja piernas y hombros.",
    Video: "https://www.youtube.com/watch?v=lJ3Q3-Wo6Wc",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 1, // Mancuernas
  },
  {
    Id: 113,
    Nombre: "Sentadilla con Curl de Bíceps",
    Descripcion: "Ejercicio funcional que combina fuerza en piernas y brazos.",
    Video: "https://www.youtube.com/watch?v=EddBw1BCmHE",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 1, // Mancuernas
  },
  {
    Id: 114,
    Nombre: "Estocadas Laterales con Mancuernas",
    Descripcion: "Ejercicio para piernas y glúteos con carga adicional.",
    Video: "https://www.youtube.com/watch?v=NNbOExh26bo",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 1, // Inicial
    idEjercicioTipoMaterial: 1, // Mancuernas
  },
  {
    Id: 115,
    Nombre: "Peso Muerto con Remo",
    Descripcion: "Ejercicio para espalda y femorales con movimiento compuesto.",
    Video: "https://www.youtube.com/watch?v=ZZZyDukl2vo",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 3, // Avanzado
    idEjercicioTipoMaterial: 1, // Mancuernas
  },
  {
    Id: 116,
    Nombre: "Press de Hombros Alternado con Sentadilla",
    Descripcion: "Ejercicio de fuerza y coordinación con mancuernas.",
    Video: "https://www.youtube.com/watch?v=VtXhXn8c4yE",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 1, // Mancuernas
  },

  {
    Id: 117,
    Nombre: "Sentadilla con Press de Hombros con Bandas",
    Descripcion:
      "Ejercicio que combina sentadillas y press de hombros con bandas.",
    Video: "https://www.youtube.com/watch?v=fz7J4zVmFME",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 118,
    Nombre: "Zancadas con Remo con Bandas",
    Descripcion: "Ejercicio que trabaja piernas y espalda al mismo tiempo.",
    Video: "https://www.youtube.com/watch?v=T_yB7RRm2CU",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 119,
    Nombre: "Puente de Glúteos con Resistencia de Banda",
    Descripcion:
      "Ejercicio enfocado en glúteos y femorales con banda elástica.",
    Video: "https://www.youtube.com/watch?v=8zEZGlfDxd8",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 1, // Inicial
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 120,
    Nombre: "Press de Pecho con Bandas",
    Descripcion:
      "Ejercicio que simula el press de banca usando bandas de resistencia.",
    Video: "https://www.youtube.com/watch?v=PAWD7TVfB_o",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 3, // Avanzado
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 121,
    Nombre: "Elevaciones Laterales con Bandas",
    Descripcion:
      "Ejercicio para fortalecer los deltoides con bandas de resistencia.",
    Video: "https://www.youtube.com/watch?v=cYjmUbP2xms",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 1, // Pequeños
    idCategoria: 1, // Dinámicos
    idDificultad: 1, // Inicial
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 122,
    Nombre: "Patada de Glúteo con Bandas",
    Descripcion:
      "Ejercicio para fortalecer los glúteos con resistencia controlada.",
    Video: "https://www.youtube.com/watch?v=UY40H02pCCM",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 1, // Inicial
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 123,
    Nombre: "Remo al Pecho con Bandas",
    Descripcion:
      "Ejercicio para fortalecer la espalda, imitando un remo con resistencia.",
    Video: "https://www.youtube.com/watch?v=sdv7QT_MrPY",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 124,
    Nombre: "Curl de Bíceps con Bandas",
    Descripcion:
      "Ejercicio clásico de bíceps usando bandas elásticas como resistencia.",
    Video: "https://www.youtube.com/watch?v=K0mwYhHm4jY",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 1, // Pequeños
    idCategoria: 1, // Dinámicos
    idDificultad: 1, // Inicial
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 125,
    Nombre: "Press de Hombros con Bandas",
    Descripcion: "Ejercicio que trabaja hombros, simulando un press militar.",
    Video: "https://www.youtube.com/watch?v=9NkgYSo1qf4",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 1, // Pequeños
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 126,
    Nombre: "Aperturas de Pecho con Bandas",
    Descripcion:
      "Ejercicio para fortalecer el pectoral con resistencia progresiva.",
    Video: "https://www.youtube.com/watch?v=ljRxLGUXNaQ",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 127,
    Nombre: "Sentadillas con Bandas",
    Descripcion: "Ejercicio para fortalecer piernas y glúteos con resistencia.",
    Video: "https://www.youtube.com/watch?v=dWcVmZP6qk4",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 1, // Inicial
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 128,
    Nombre: "Extensión de Tríceps con Bandas",
    Descripcion:
      "Ejercicio para aislar y fortalecer los tríceps con resistencia progresiva.",
    Video: "https://www.youtube.com/watch?v=3k8zzH1vML8",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 1, // Pequeños
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 129,
    Nombre: "Zancadas Laterales con Bandas",
    Descripcion: "Ejercicio que fortalece piernas y mejora la estabilidad.",
    Video: "https://www.youtube.com/watch?v=0fIfPeUA4Rk",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 130,
    Nombre: "Pallof Press con Bandas",
    Descripcion:
      "Ejercicio isométrico para fortalecer el core y mejorar la estabilidad.",
    Video: "https://www.youtube.com/watch?v=ry3gH7kxbD4",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 3, // Avanzado
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 131,
    Nombre: "Face Pull con Bandas",
    Descripcion:
      "Ejercicio para fortalecer la parte posterior de los hombros y mejorar la postura.",
    Video: "https://www.youtube.com/watch?v=rcXAZOcBr9k",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 1, // Pequeños
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 2, // Bandas elásticas
  },
  {
    Id: 137,
    Nombre: "Kettlebell Swing",
    Descripcion:
      "Ejercicio explosivo para mejorar la potencia y la resistencia.",
    Video: "https://www.youtube.com/watch?v=YSxHifyI4pU",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 4, // Pesas rusas
  },
  {
    Id: 138,
    Nombre: "Goblet Squat con Pesa Rusa",
    Descripcion: "Sentadilla profunda sosteniendo la pesa rusa al pecho.",
    Video: "https://www.youtube.com/watch?v=MeIiIdhvXT4",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 1, // Inicial
    idEjercicioTipoMaterial: 4, // Pesas rusas
  },
  {
    Id: 139,
    Nombre: "Press con Pesa Rusa a un Brazo",
    Descripcion:
      "Ejercicio unilateral para desarrollar fuerza y estabilidad en los hombros.",
    Video: "https://www.youtube.com/watch?v=ZcdmJD2JDqE",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 1, // Pequeños
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 4, // Pesas rusas
  },
  {
    Id: 140,
    Nombre: "Deadlift con Pesa Rusa",
    Descripcion:
      "Ejercicio para fortalecer la parte baja de la espalda y los isquiotibiales.",
    Video: "https://www.youtube.com/watch?v=UsQNGHjK3L8",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 4, // Pesas rusas
  },
  {
    Id: 141,
    Nombre: "Snatch con Pesa Rusa",
    Descripcion:
      "Ejercicio avanzado para mejorar la potencia y la coordinación.",
    Video: "https://www.youtube.com/watch?v=wgP9DO92I6g",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 3, // Avanzado
    idEjercicioTipoMaterial: 4, // Pesas rusas
  },
  {
    Id: 142,
    Nombre: "Péndulo con Pesa Rusa",
    Descripcion:
      "Balanceo controlado de la pesa rusa entre las piernas para trabajar estabilidad y coordinación.",
    Video: "https://www.youtube.com/watch?v=X5Kj7tG9U9s",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 1, // Inicial
    idEjercicioTipoMaterial: 4, // Pesas rusas
  },
  {
    Id: 143,
    Nombre: "Lunges con Pesa Rusa",
    Descripcion:
      "Desplantes dinámicos sosteniendo una pesa rusa para fortalecer piernas y core.",
    Video: "https://www.youtube.com/watch?v=7SR-bLZxjlo",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 2, // Medio
    idEjercicioTipoMaterial: 4, // Pesas rusas
  },
  {
    Id: 144,
    Nombre: "Halo con Pesa Rusa",
    Descripcion:
      "Movimiento circular alrededor de la cabeza para fortalecer hombros y core.",
    Video: "https://www.youtube.com/watch?v=NmSRfBfNl-w",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 1, // Pequeños
    idCategoria: 1, // Dinámicos
    idDificultad: 1, // Inicial
    idEjercicioTipoMaterial: 4, // Pesas rusas
  },
  {
    Id: 145,
    Nombre: "High Pull con Pesa Rusa",
    Descripcion:
      "Levantamiento explosivo de la pesa rusa para trabajar espalda y trapecios.",
    Video: "https://www.youtube.com/watch?v=2UplVKoFHPk",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 3, // Avanzado
    idEjercicioTipoMaterial: 4, // Pesas rusas
  },
  {
    Id: 146,
    Nombre: "Turkish Get Up con Pesa Rusa",
    Descripcion:
      "Movimiento completo para desarrollar estabilidad y fuerza funcional.",
    Video: "https://www.youtube.com/watch?v=0bWRPC49-KI",
    idFaseEntrenamiento: 2, // Parte central
    idTipoGrupoMuscular: 2, // Grandes
    idCategoria: 1, // Dinámicos
    idDificultad: 3, // Avanzado
    idEjercicioTipoMaterial: 4, // Pesas rusas
  },
];

const EjercicioCategoriaApi = [
  { id: 1, grupoMuscular: "dinamicos" },
  { id: 2, grupoMuscular: "core" },
  { id: 3, grupoMuscular: "pectoral" },
  { id: 4, grupoMuscular: "espalda" },
  { id: 5, grupoMuscular: "piernas" },
  { id: 6, grupoMuscular: "hombros" },
  { id: 7, grupoMuscular: "biceps" },
  { id: 8, grupoMuscular: "triceps" },
];

const ejercicioFaseEntrenamiento = [
  { id: 1, fase: "entrada en calor" },
  { id: 2, fase: "parte central" },
  { id: 3, fase: "vuelta a la calma" },
];

const tipoGrupoMuscular = [
  { id: 1, tipoGrupoMuscular: "Pequeños" },
  { id: 2, tipoGrupoMuscular: "Grandes" },
];

const objetivosEntrenamiento = [
  { id: 1, objetivo: "Adaptación" },
  { id: 2, objetivo: "Resistencia muscular" },
  { id: 3, objetivo: "Fuerza máxima" },
  { id: 4, objetivo: "Estabilidad, equilibrio y postura" },
  { id: 5, objetivo: "Prevención de lesiones" },
  { id: 6, objetivo: "Hipertrofia muscular" },
  { id: 7, objetivo: "Potencia muscular" },
];

const metodosEntrenamiento = [
  {
    id: 1,
    idObjetivoEntrenamiento: 1,
    nombre: "Circuito de fuerza adaptativa",
    descripcion: "Ejercicios básicos con carga ligera para adaptación muscular",
  },
  {
    id: 2,
    idObjetivoEntrenamiento: 1,
    nombre: "Ejercicios isométricos iniciales",
    descripcion: "Contracciones sostenidas para mejorar control muscular",
  },
  {
    id: 3,
    idObjetivoEntrenamiento: 1,
    nombre: "Entrenamiento con bandas elásticas",
    descripcion: "Resistencia progresiva para mejorar la fuerza básica",
  },
  {
    id: 4,
    idObjetivoEntrenamiento: 2,
    nombre: "Circuito de resistencia de fuerza",
    descripcion: "Ejercicios con alta repetición y descanso moderado",
  },
  {
    id: 5,
    idObjetivoEntrenamiento: 2,
    nombre: "Superseries de resistencia",
    descripcion: "Ejercicios combinados para maximizar la resistencia muscular",
  },
  {
    id: 6,
    idObjetivoEntrenamiento: 2,
    nombre: "Método de carga progresiva",
    descripcion: "Incremento gradual de peso con repeticiones controladas",
  },
  {
    id: 7,
    idObjetivoEntrenamiento: 3,
    nombre: "Levantamiento de pesas con cargas máximas",
    descripcion: "Ejercicios de fuerza con el 90-100% del 1RM",
  },
  {
    id: 8,
    idObjetivoEntrenamiento: 3,
    nombre: "Método 5x5",
    descripcion: "Cinco series de cinco repeticiones con cargas altas",
  },
  {
    id: 9,
    idObjetivoEntrenamiento: 3,
    nombre: "Isometría con cargas pesadas",
    descripcion: "Contracciones sostenidas con pesos elevados",
  },
  {
    id: 10,
    idObjetivoEntrenamiento: 4,
    nombre: "Trabajo de fuerza estabilizadora",
    descripcion: "Ejercicios de control postural con resistencia",
  },
  {
    id: 11,
    idObjetivoEntrenamiento: 4,
    nombre: "Entrenamiento propioceptivo con carga",
    descripcion: "Ejercicios de equilibrio con peso adicional",
  },
  {
    id: 12,
    idObjetivoEntrenamiento: 4,
    nombre: "Fortalecimiento del core con resistencia",
    descripcion: "Movimientos para mejorar la estabilidad y el control",
  },
  {
    id: 13,
    idObjetivoEntrenamiento: 5,
    nombre: "Trabajo de fuerza excéntrica",
    descripcion: "Ejercicios controlados para reforzar tendones y músculos",
  },
  {
    id: 14,
    idObjetivoEntrenamiento: 5,
    nombre: "Entrenamiento correctivo con carga",
    descripcion: "Ejercicios para mejorar patrones de movimiento",
  },
  {
    id: 15,
    idObjetivoEntrenamiento: 5,
    nombre: "Isometría preventiva",
    descripcion: "Ejercicios de contracción estática para evitar lesiones",
  },
  {
    id: 16,
    idObjetivoEntrenamiento: 6,
    nombre: "Entrenamiento de hipertrofia clásica",
    descripcion: "Cargas medias con alto volumen de repeticiones",
  },
  {
    id: 17,
    idObjetivoEntrenamiento: 6,
    nombre: "Método German Volume",
    descripcion: "10 series de 10 repeticiones con descanso corto",
  },
  {
    id: 18,
    idObjetivoEntrenamiento: 6,
    nombre: "Drop Sets",
    descripcion: "Reducción progresiva de peso hasta la fatiga total",
  },
  {
    id: 19,
    idObjetivoEntrenamiento: 7,
    nombre: "Pliometría con carga",
    descripcion: "Saltos explosivos con peso moderado",
  },
  {
    id: 20,
    idObjetivoEntrenamiento: 7,
    nombre: "Levantamiento olímpico",
    descripcion: "Movimientos explosivos con pesas para potencia",
  },
  {
    id: 21,
    idObjetivoEntrenamiento: 7,
    nombre: "Método contrastado de fuerza",
    descripcion: "Alternancia entre cargas altas y ejercicios rápidos",
  },
];

const dificultades = [
  {
    id: 1,
    idEjercicios: null,
    Dificultad: "Inicial",
  },
  {
    id: 2,
    idEjercicios: null,
    Dificultad: "Medio",
  },
  {
    id: 3,
    idEjercicios: null,
    Dificultad: "Avanzada",
  },
];

const Intensidad = [
  { id: 1, tipo: "baja", Intensidad: "50%" },
  { id: 2, tipo: "media", Intensidad: "70%" },
  { id: 3, tipo: "alta", Intensidad: "80 a 100%" },
];

const NivelProgresionRutinas = [
  { id: 1, nivel: "Inicial" },
  { id: 2, nivel: "Media" },
  { id: 3, nivel: "Avanzada" },
];

module.exports = {
  EjercicioCategoriaApi,
  ejercicios,
  ejercicioFaseEntrenamiento,
  tipoGrupoMuscular,
  objetivosEntrenamiento,
  metodosEntrenamiento,
  dificultades,
  EjercicioTipoMaterial,
  Intensidad,
  NivelProgresionRutinas,
};
