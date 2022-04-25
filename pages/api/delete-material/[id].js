import db from "../../../db/connection"
import material from "../../../models/material"

export default async function handler(req, res) {
    const { id } = req.query
    db()
    const { method } = req
    if(method === "DELETE"){

      await material.findById(id).then(material =>{
        if(material){
        material.deleteOne(material)
        res.status(201).json({ success: true, data: material })
        }else{
          res.status(401).json("errro")
        }
      }) 
    }else{
      res.status(405).end(`Method ${method} Not Allowed`)
    }
  }