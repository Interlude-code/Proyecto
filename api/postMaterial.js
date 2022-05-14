import axios from "axios";
import { toast  } from 'react-toastify';


export const postMaterial = (material,setMateriales)=>{

const options = {
  method: 'POST',
  url: `/api/[id]`,
  headers: {'Content-Type': 'application/json'},
  data: material
};

axios.request(options).then(function (response) {
  const {data} = response.data
  setMateriales(materiales =>{
     console.log([...materiales, data])
     return [...materiales, data]
  }) 
  toast.success(`Creado con exito ${material.nombre}`, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}).catch(function (error) {
  console.error(error);
});
}