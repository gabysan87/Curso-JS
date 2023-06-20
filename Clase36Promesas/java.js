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
     const promise = new Promise((resolve, reject) => {
        if(!user) reject(`Doesn´t exist a user with id ${id}`)
        else resolve(user)
    
     })
     
     return promise

    }
    
 
 const getEmail = (user, cb) => {
     const email = emails.find(email => email.id == user.id)
     if (!email) cb(`${user.name} hasn´t email`)
     else cb(null, {
         id: user.id,
         name: user.name,
         name: email.email
     })
 }
 
 getUser(5)
    .then(user => console.log(user))
    .catch(err => console.log(err))

//  if (err) return console.log(err)
 
//      getEmail(user, (err, res) => {
//          if (err) return console.log(err)
//          console.log(res);
//      })