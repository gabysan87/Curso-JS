// const getUser = (id, cb) =>{
//     const user = {
//         name: "Gaby",
//         id:id
//     }

//  if(id==2) cb("User not exist")
//  else cb(null, user)
// }

// getUser(1, (err,user)=>{
//     if(err) return console.log(err)
//     console.log(`User name is ${user.name}`);
// })

const users = [{ id:1, name: "Gaby" }, { id:2, name:"Dorian" }, { id:3, name: "Carlos"} ]
 
 const emails=[{ id:1, email: "gabysan0487@gmail.com" }, { id:2, email: "dorian@gmail.com" }]
 
 const getUser = (id) => {
     const user = users.find(user => user.id == id)
     return promise = new Promise((resolve, reject) => {
        if(!user) reject(`Doesn´t exist a user with id ${id}`)
        else resolve(user)
     })
    }
    
 
 const getEmail = (user) => {
     const email = emails.find(email => email.id == user.id)
     return promise = new Promise((resolve, reject) => {
        if(!email) reject(`${user.name} hasn´t email`)
        else resolve({
           id: user.id,
           name: user.name,
           email: email.email
        })  
     })
 }
 
//  getUser(2)
//     .then(user => getEmail(user))
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

    getUser(2)
    .then(getEmail)
    .then(console.log)
    .catch(console.log)
