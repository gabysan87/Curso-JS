// Recorrer el DOM (DOM Traversing)

// Padre - parent (Nodo del que desciende)

// -parentNode - Devuelve el nodo padre (que puede ser un elemento)

// -parentElement -Devuelve el nodo elemento padre.

// Nota 
// Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode devolverá siempre null.

// Hijos - child (Nodo que desciende de un padre)
// -childNodes - Devuelve todos los nodos hijos.
// -children - Devuelve todos los nodos elementos hijos
// -firstChild - Devuelve el primer nodo hijo 
// -firtsElementChild - Devuelve el primer nodo elemento hijo
// -lastChild - Devuelve el ultimo hijo 
// -lastElementChild - Devuelve el ultimo nodo elemento hijo
// -hasChildNodes() - Devuelve true si el nodo tiene hijos y false si no tiene

// Hermanos - siblings (Nodo al mismo nivel)
// -nextSibling - Devuelve el siguiente nodo hermano
// -nextElementSibling
// -previousSibling
// -previuosElementSibling

// Cercano 
// -closest(selector) - Selecciona el nodo mas cercano que cumpla con el selector, aun es experimental.

const parent = document.getElementById("parent")

// console.log(parent.parentElement);

// console.log(parent.childNodes);
// console.log(parent.children);
// console.log(parent.firstChild)
// console.log(parent.firstElementChild)
// console.log(parent.lastChild)
// console.log(parent.lastElementChild)
// console.log(parent.firstChild.hasChildNodes())

// console.log(parent.nextSibling);
// console.log(parent.nextElementSibling);
// console.log(parent.parentElement.previousSibling);
// console.log(parent.parentElement.previousElementSibling);
