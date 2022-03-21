import mongoose from "mongoose";


const connectionString = ""

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