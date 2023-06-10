// Escribe un programa que pueda calcular el area de 3 figuras geometricas, triangulo, rectangulo y círculo. En primer lugar pregunta de que figura se quiere calcular el área, despues solicita los datos que necesites para calcularlo.
// triangulo = b * h/2
// rectangulo = b * h 
// circulo = π * r2 (pi * radio al cuadrado)

let figure = prompt(`Introduce la figura geometrica de la que quieres calcular el area: triangle, rectangle or circle`)

let base;
let height;
let radius;

switch(figure){
    case `triangle`:
        base=prompt(`Introduce la base del triángulo`)
        height=prompt(`Introduce la altura del triángulo`)
        console.log(`El área del tríangulo es ${(base*height)/2}`);
        break
    case `rectangle`:
        base=prompt(`Introduce la base del rectángulo`)
        height=prompt(`Introduce la altura del rectángulo`)
        console.log(`El área del rectángulo es ${(base*height)}`);
        break
    case `circle`:
        radius=prompt(`Introduce la base del círculo`)
        console.log(`El área del círculo es ${Math.PI * Math.pow(radius,2)}`);
        break
    default: console.log(`La figura geométrica no es válida`)
}