import { useEffect  } from 'react'
import Layout from '../components/Layout/Layout'
import db from '../db/connection'
import Material from '../models/material'
import TablaInventario from '../components/TablaInventario/TablaInventario'
import { useMaterial } from '../context/materialContext'
import { NewDataTable } from '../components/TablaInventario/NewDataTable'



const Inventario = ({materialesApi}) => {
 
  
  const { setMateriales} =  useMaterial()
  useEffect(()=>{
    setMateriales(materialesApi)
  },[])
  
  return (
    <>
      <Layout>
         <NewDataTable />
      </Layout>
    </>
  )
}




export const getServerSideProps = async (ctx) => {
  await db()
  const result =  await Material.find({})

  const materiales = result.map((doc) => {
    const material = doc.toObject();
    material._id = material._id.toString();
    return material
  });
  return {
    props: {
      materialesApi : materiales
    }
  }
}

export default Inventario