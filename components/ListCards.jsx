import { Grid } from "@mui/material";
import CardProveedores from './CardProveedores'
import  { proveedores } from '../utils/proveedores'


export const ListCards=()=>{
  return (
      <>  
        {proveedores.map((data)=>(
            <Grid className="mt-5" key={data.id} item xs={12} sm={3}>
                <CardProveedores data={data}/>
            </Grid>
            ))}   
      </>

  );
}