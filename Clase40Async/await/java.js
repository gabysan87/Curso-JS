
// const getName = async () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("GABY")
//         },1500)
//     })
// }



// const sayHello = async ()  => {
//     const name = await getName()
//     return `Hello ${name}`
// }

// sayHello().then(res=>console.log(res))

const users = [{ id:1, name: "Gaby" }, { id:2, name:"Dorian" }, { id:3, name: "Carlos"} ]
 
 const emails=[{ id:1, email: "gabysan0487@gmail.com" }, { id:2, email: "dorian@gmail.com" }]
 
 const getUser = async (id) => {
     const user = users.find(user => user.id == id)
   
    if(!user) throw new Error(`Doesn´t exist a user with id ${id}`)
    else return (user)
    }
    
 
 const getEmail = async (user) => {
     const email = emails.find(email => email.id == user.id) 
        if(!email) throw new Error(`${user.name} hasn´t email`)
        else return ({
           id: user.id,
           name: user.name,
           email: email.email
        })  
 }

 const getInfo = async (id) => {
    try {
        const user = await getUser(id)
        const res = await getEmail(user)
        return `${user.name} email is ${res.email}`
    } catch (error){
        console.log(error)
    }
 }

 getInfo(3).then(res => console.log(res))