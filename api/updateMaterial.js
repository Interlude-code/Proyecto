import axios from "axios";
import { toast  } from 'react-toastify';



export const updateMaterial=(data ,setMateriales )=>{

    const options = {
      method: 'PATCH',
      url: `http://localhost:3000/api/update-material/${data._id}`,
      headers: {'Content-Type': 'application/json'},
      data:data
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setMateriales(materiales => materiales.map(material =>{

        if(material._id === data._id ){
          return {
            ...material,
            stock : data.stock,
            precio : data.precio
          }
        }
        return material

      }))
      toast.success(`Actualizado con exito`, {
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