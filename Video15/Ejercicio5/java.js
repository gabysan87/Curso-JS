// Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
//      El factorial es el resultado del multiplicar ese número por sus anteriores hasta la unidad.

//   !5  = 5*4*3*2*1 =120

let num = parseInt(prompt(`Introduce un número`))
let result=1

for(let i = num; i>1; i--){
    result *= 1
}

console.log(`El factorial de ${num} es ${result}`);