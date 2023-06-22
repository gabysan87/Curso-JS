// Comodines:
// -Sustitución: Define un comodin dentro del patron. El simbolo es el ". "
// -Listado de caracteres válidos: Entre corchetes se pone una lista de los caracteres válidos.
// [aeiou] Con esto utlizamos todas las vocales.

// -Rangos: Entre corchetes si ponemos un guion entre dos caracteres establecemos un rango. [a-z]
// Todas las letras minúsculas 
// https://ascii.cl/es

// -Mezcla entre rangos y listas:
// Podemos unir los dos anteriores en una sola expresion. [0-5ou] serian números del 0 al 5, la letra "o" y la letra "u"

// -Cadenas completas:
// Para establecer una cdena completa debe it entre parentesis, si queremos más palabras irán separadas por un pipe. (lorem|amet) es válida la palabra "lorem" y la palabra "amet"

const text = document.getElementById("text").textContent
const regEx = /lorem/gi
const regEx2 = new RegExp("lorem", "gi")
const regEx3 = new RegExp("/lorem/", "gi")

console.log(regEx.test(text))
console.log(text.includes("Lorem"))
