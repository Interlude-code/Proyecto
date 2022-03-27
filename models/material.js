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
        enum : ["HIDRO-SANITARIO","PINTURAS","LOCATIVO","ELECTRICO","FERRETERIA","AIRE-ACONDICIONADO"],
    },
    stock : {
        type : String,
    },
    precio : {
        type : String,
   
    },
    descripcion: {
        type : String,
        required : true
    }
})

export default mongoose.models.Material || mongoose.model("Material", materialSchema);
