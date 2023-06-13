// .from(iterable)-> Convierte el array el elemento iterable(todo aquel que se puede recorrer), es decir un strings, otro array

let word = "Hola Mundo"

// console.log(Array.from(word));
// console.log(word.split("")


// SORT
// const letters = ["b", "c", "z", "a"]
// const numbers = ["1", "8", "100", "3"]

// console.log(letters.sort());
// console.log(numbers.sort((a,b)=>a-b));

// funtion menorMayor(a, b){
//     if (a-b < 0) return -1;
//     if (a-b > 0) return 1;
//     if(a == b) return 0;
// }

// funtionmayorMenor(a, b) {
//     if (b-a < 0) return -1;
//     if (b-a > 0) return 1;
//     if(b == a) return 0;
// }

// const numbers =[12, 25, 47, 84, 98]

// numbers.forEach((number)=>console.log(number))
// numbers.forEach((number,index) =>
//      console.log(`${number} esta en la posicion ${index}`))

// const words = ["HTML", "CSS", "JavaScript", "PHP"]

// console.log(words.some(word => word.length>10));
// console.log(words.every(word => word.length>3));

const numbers =[1, 2, 3, 4, 5]

// const numbers2 = numbers.map(number => number*2)

// console.log(numbers2);

// const numbers2 = numbers.filter(number=>number>40)

// console.log(numbers2);

 
// console.log(numbers.reduce((a,b)=>a+b));

const users = [
  {
    name: "user 1",
    online: true
  },
  {
    name: "user 2",
    online: true
  },
  {
    name: "user 3",
    online: false
  },
  {
    name: "user 4",
    online: true
  },
  {
    name: "user 5",
    online: false
  },
  {
    name: "user 6",
    online: true
  }
]

const userOnline = users.reduce((cont, user) =>{
  if(user.online) cont++
  return cont
},0)

console.log(`Hay ${userOnline} usuarios conectados`);