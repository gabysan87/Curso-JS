const button = document.getElementById("button")

// Objeto window -> Es el objeto global, de él descienden todos
// 	alert()
// 	promt()
// 	confirm()

// addEventListener("scroll", (e) => {
//     console.log(e)
// })

// prompt("Escriba su nombre")

// if(confirm("Acepta?")) {
//     console.log("El usuario acepto")
// } else{
//     console.log("El usuario no acepto");
// }


// Objeto console -> Es el objeto que contiene la consola del navegador

// 	console.log( )-> Muestra un mensaje informativo en la consola
// 	console.dir( ) -> Muestra todas las propiedades del objeto
// 	console.error( ) -> Muestra un mensaje de error en la consola
// 	console.table( ) ->Muestra una tabla con los datos proporcionados en la consola

// console.error("error")

const person = {
    name: "Gabriela",
    age: 35,
    email:"gabysan0487@gmail.com"

}

// console.table([1,2,3,4]);

// Objeto location -> Es el objeto que contiene a barra de direcciones

// https://developer.mozilla.org/es/docs/Web/API/Location
// 	location.href -> Devuelve la URL completa de la página actual
// 	location.protocol -> Devuelve el protocolo de la URL (por ejemplo, "http:" o "https:")
// 	location.host -> Devuelve el nombre de dominio y el número de puerto de la URL
// 	location.pathname -> Devuelve la ruta de la URL
// 	location.hash -> Devuelve el fragmento de la URL (desde el signo de almohadilla '#' en adelante)
// 	location.reload() ->  Recarga la página actual


// console.log(location.href)
// console.log(location.protocol)
// console.log(location.host)
// console.log(location.pathname)
// console.log(location.hash)
// console.log(location.reload)

// location.href = "https://google.com"

// Objeto history: representa el historial del navegador, es decir, la lista de URLs visitadas en la ventana actual. Proporciona métodos para navegar por el historial y realizar acciones relacionadas con la navegación, como retroceder o avanzar en las páginas visitadas.
// https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador

	// back() -> Navega hacia atrás en el historial, es equivalente a hacer clic en el botón "Atrás" del navegador.
	// forward() -> Navega hacia adelante en el historial, es equivalente a hacer clic en el botón "Adelante" del navegador
	// go(n|-n) -> : Navega hacia adelante o hacia atrás en el historial según el número n. Un valor positivo de n avanza n páginas, mientras que un valor negativo retrocede n páginas.

 	// length -> devuelve el número de entradas en el historial.

    //  Objeto date: se refiere a un tipo de dato en programación que se utiliza para representar fechas y horas.
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    // https://www.w3schools.com/jsref/jsref_obj_date.asp


    // const date = new Date()

    // console.log(date.getDate());

    // Timers
    // https://developer.mozilla.org/en_US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
    
    // setTimeout (( )=>{code},delay-in-miliseconds: Hace que se ejecute la función después de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)
    // 

    // Interval:

    // setInterval(() => {code} - Hace que se ejecute la funcion cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)


// 1er ejemplo
// button.addEventListener("click", () => {
// //    setTimeout(saludar,3000)
// setTimeout(() => {
//     console.log("ADIOS");
// },3000)
//   clearTimeout(timeout)

// })

// 2do ejemplo

// const timeout = setTimeout(() => {
//     console.log("ADIOS");
// },3000)


// button.addEventListener("click", () => {
//     clearTimeout(timeout)
// })



const saludar = () => {
    console.log("Hola")
}

let cont = 0

// const interval = setInterval(saludar, 3000)

const interval = setInterval(() => {
    console.log(cont)
    cont++
},3000)

button.addEventListener("click", () => {
    clearInterval(interval)
})
