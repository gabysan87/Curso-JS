const person = {
    name: `Juan`,
    age: 26,
    sons: [`Laura`, `Diego`, `Pepe`, `Rosa`, `Tomás`]
}

// console.log(person.name);
// console.log(person[`name`]);

// for(const key in person){
//     console.log(key);
// }

// for(const key in person){
//     console.log(person[key]);
// }

// for(const son of person.sons){
//     console.log(son);
// }

console.log(`Hola ${person.name}. Tienes ${person.age} y tus hijos se llaman ${person.sons.join(`, `)}`);