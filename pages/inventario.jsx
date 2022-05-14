import { useEffect  } from 'react'
import Layout from '../components/Layout/Layout'
import db from '../db/connection'
import Material from '../models/material'
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



export const getStaticProps = async (ctx) => {
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
    },
    revalidate: 2
  }
}

export default Inventario