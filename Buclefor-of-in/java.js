
let names = [`Paco`, `Jose`, `Paula`, `Maria`]


for (let i = 0; i < names.length; i++){
    if(names[i]===`Paula`){
        continue
    }
    console.log(names[i]);
}

for(let index in names){
       if(names[index==`Paula`]){
        continue
       }
       console.log(names[index]);
    }


// for(let name of names){
//     console.log(name);
// }

// for(let index in names){
//     console.log(names[index]);
// }