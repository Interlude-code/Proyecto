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
        type : Number,
        default : 0
    },
    precio : {
        type : Number,
        default : 0
    }
})

export default mongoose.models.Material || mongoose.model("Material", materialSchema);
