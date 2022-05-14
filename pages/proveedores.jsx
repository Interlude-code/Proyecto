import { Grid } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout'
import { ListCards } from '../components/ListCards'

const Proveedores = () => {
  return (
    <Layout>
       <Grid container >
          <ListCards/>
       </Grid>
    </Layout>
  )
}

export default Proveedores
