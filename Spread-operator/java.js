

// console.log(...numbers);

// Enviar elementos en un array a una función (to Add)

// const addNumbers = (a, b, c) => {
//     console.log(a+b+c)

// }

// let numbersToAdd = [1,2,3]

// addNumbers(...numbersToAdd)

// Añadir un array a otro array (.push al final y .splice al inicio)


// let users = ["javier", "david", "rosa", "juan", "mercedes"]
// let newUsers = ["marta", "jaime", "laura"]

// users.push(...newUsers)

// console.log(users);

// Cómo copiar arrays

// let arr1 = [1,2,3,4,5]
// let arr2 = [...arr1]
// console.log(arr2);

// Cómo concatenar arrys (Concat)

// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8]

// let arrConcat =[...arr1,...arr2] 
// console.log(arrConcat);

// Enviar un número indefinidos de argumentos a una función 

// const restParms = (...numbers) => {
//     console.log(numbers);
// }

// restParms(1,2,3,4,5,6,7,8)

// Librería math (Math.max y Math.min)
const numbers = [-12, 2, 3, 23, 43, 2, 3]

console.log(Math.min(...numbers));

// Eliminar elementos duplicados (new Set)

console.log([...new Set(numbers)]);