import mongoose from "mongoose";


const connectionString = process.env.NEXT_PUBLIC_DB_KEY

const db = ()=>{
    mongoose.connect(connectionString)
    .then(()=>{
        console.log("conectados a la base de datos")
    })
    .catch((error)=>{
        console.log(error)
    })
} 

export default db