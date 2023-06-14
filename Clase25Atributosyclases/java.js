// Atributos:
// 	element.getAttribute('atribute') -> Devuelve el atributo
// 	element.setAttribute('atribute', value) -> Le asigna un valor al atributo

//  Clases:
// 	element.classList.add('class', 'class',...) -> Para añadir clases, una o las que queramos separadas por comas.
// 	element.classList.remove('class', 'class',...) > Para eliminar clases, una o las que queramos separadas por comas.
// 	element.classList.toggle('class'[,force]) -> Si tiene la clase se la quita y sino la tiene se la pone
// 	element.classList.contains('class') -> Devuelve true o false en función de si tiene la clase o no
// 	element.classList.replace('oldClass', newClass) -> sustituye una clase por otra

//  Atributos directos
// 	id
// 	value

const title = document.getElementById("title")
const name = document.getElementById("name")



// console.log(name.getAttribute("type"))
// name.setAttribute("type", "date")

// title.classList.add("main-title", "other-title")
// title.classList.remove("main-title")

// if(title.classList.contains("title")) console.log("Title tiene la clase")
// else console.log("Title no tiene la clase title")

title.classList.replace("title", "main-title")

// console.log(title.innerHTML)
// console.log(title.textContent)
console.log(name.value)
// console.log(title)
// console.log(name)

