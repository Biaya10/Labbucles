// Consulta la Tarea 5 en tus Instrucciones para completar esta tarea
let a = Number(process.argv[2]);

if (Number.isInteger(a)) {
 
  for (let i = 0; i < a; i++) {
    console.log("¡Esta es la Tarea Cinco!");
  }
} else {
  console.log("El valor no es un número entero");
}
