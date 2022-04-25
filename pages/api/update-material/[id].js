import db from "../../../db/connection"
import material from "../../../models/material"

export default async function handler(req, res) {
    const { id } = req.query
    const { body ,method } = req
    db()
    if(method === "PATCH"){

        await material.findByIdAndUpdate(id ,{
            nombre     : body.nombre,
            unidad     : body.unidad,
            categoria  : body.categoria,
            precio     : body.precio,
            stock      : body.stock,
            descripcion: body.descripcion
        }).then(()=>{
            res.status(201).json({ success: true, data: body })
        }).catch(()=>{
            res.status(401).json("errro")
        })
    }else{
        res.status(405).end(`Method ${method} Not Allowed`)
    }  
}