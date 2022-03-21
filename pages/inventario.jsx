import React from 'react'
import Layout from '../components/Layout/Layout'
import Materialhandler from './api/hello'
import db from '../db/connection'
import Material from '../models/material'



const Inventario = ({materiales}) => {
  console.log(materiales)
  return (
    <>
      <Layout>
       {materiales.map((material)=>(
         <h1 key={material._id} >{material.nombre}</h1>
       ))}
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
    return material;
  });
  return {
    props: {
      materiales 
    }
  }
}

export default Inventario