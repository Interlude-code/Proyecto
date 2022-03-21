



export default async function  Materialhandler(req, res) {
  // const {
  //   method,
  //   body
  // } = req

  // switch (method) {
  //   case 'POST':
  //     try{

  //       const nuevoMaterial = new Material({
  //         nombre    : body.nombre,
  //         unidad    : body.unidad,
  //         categoria : body.categoria,
  //         precio    : body.precio,
  //         stock     : body.stock,
  //       })
  //       await nuevoMaterial.save()
  //       res.status(201).json({ success: true, data: nuevoMaterial })
  //     }
  //     catch{
  //       res.status(400).json({ success: false });
  //     }
  //     break
  //   case 'GET':
  //     try{

  //       const materiales =  await Material.find({})
  //       res.status(200).json({  success: true, data: materiales})
  //     }
  //     catch{
  //       res.status(400).json({ success: false });
  //     }
  //     break
  //   default:
  //     res.setHeader('Allow', ['GET', 'POST'])
  //     res.status(405).end(`Method ${method} Not Allowed`)
  // }

}