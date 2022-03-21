import Material from '../../models/material'
import db from '../../db/connection'


export default async function  Materialhandler(req, res) {


  db()
  const {
    method,
    body
  } = req

  switch (method) {
    case 'POST':
        const nuevoMaterial = new Material({
          nombre    : body.nombre,
          unidad    : body.unidad,
          categoria : body.categoria,
          precio    : body.precio,
          stock     : body.stock,
        })
        await nuevoMaterial.save()
        res.status(201).json({ success: true, data: nuevoMaterial })
    
      break
    default:
      res.status(405).end(`Method ${method} Not Allowed`)
  }

}