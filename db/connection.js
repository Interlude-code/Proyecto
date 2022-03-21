import mongoose from "mongoose";


const connectionString = "mongodb+srv://interlude:123456abc@pascual.5em1z.mongodb.net/ProyectoGrado?retryWrites=true&w=majority"

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