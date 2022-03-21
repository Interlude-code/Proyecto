import mongoose from "mongoose";


const materialSchema = new mongoose.Schema({

    nombre: {
        type : String,
        
    },
    unidad: {
        type: String,
        enum : ["UNIDAD","METRO","CAJA"],
        default :"UNIDAD"
        
    },
    categoria: {
        type : String,
    },
    stock : {
        type : String,
    },
    precio : {
        type : String,
   
    },
    descripcion: String
})

export default mongoose.models.Material || mongoose.model("Material", materialSchema);
