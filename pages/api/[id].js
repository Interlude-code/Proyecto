import Material from '../../models/material'
import db from '../../db/connection'



export default async function  Materialhandler(req, res) {

  const { id } = req.query
  db()
  const {
    method,
    body
  } = req

  switch (method) {
    case 'POST':
        const nuevoMaterial = new Material({
          nombre     : body.nombre,
          unidad     : body.unidad,
          categoria  : body.categoria,
          precio     : body.precio,
          stock      : body.stock,
          descripcion: body.descripcion
        })
        await nuevoMaterial.save()
        res.status(201).json({ success: true, data: nuevoMaterial })
    
      break
    case 'PATCH':
      await Material.findByIdAndUpdate(id ,{
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
    break
    case 'DELETE':
      await Material.findById(id).then(material =>{
        if(material){
        material.deleteOne(material)
        res.status(201).json({ success: true, data: material })
        }else{
          res.status(401).json("errro")
        }
      }) 
      break

    default:
      res.status(405).end(`Method ${method} Not Allowed`)
    break
  }

}