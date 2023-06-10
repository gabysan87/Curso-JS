// 1- Solicita un nombre, la edad y muestra por consola el mensaje "Hola _____, tienes _____ años y el año que viene tendrás ______ años"
// Realiza el ejercicio con prompt (mensaje) y haz uso de los template String

let name = prompt(`Introduce tu nombre`)
let age = parseInt(prompt(`Introduce tu edad`))

console.log(`Hola ${name} tienes ${age} años y el año que viene tendrás ${age+1} años`);