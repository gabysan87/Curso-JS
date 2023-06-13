// document.getElementById('id') -> ArrayBuffercceder a un elemento a tráves de su id.

// document  | element .querySelector('selectorCSS') - Accede al primer elemento que coincida en en selector CSS

// document  | element .querySelectorAll('selectorCSS') -> Accede a todos los elementos que coincidan con el selecctor CSS, devuelve un nodeList

// const title =document.getElementById("title")

// console.log(title);

// title.texContent= "DOM- Accediendo a nodos"

// const paragraph = document.querySelector(".paragraph")

// const span = paragraph.querySelector("span")

const paragraphs = document.querySelectorAll(".paragraph")

// const paragraphsSpread = [...document.querySelectorAll(".paragraph")]

const paragraphsArray = Array.from(document.querySelectorAll(".paragraph"))

paragraphs[0].style.color = "red"

// paragraphs.map(p=>p.style.color="green")

// paragraphsSpread.map(p=>p.style.color="green")

// console.log(paragraphs);

paragraphsArray.map(p=>p.style.color="blue")