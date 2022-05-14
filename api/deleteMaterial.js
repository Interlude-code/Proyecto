import axios from "axios";
import { toast  } from 'react-toastify';


export const DeleteMaterial = (id,setMateriales)=>{

const options = {
  method: 'DELETE',
  url: `/api/${id}`,
  headers: {'Content-Type': 'application/json'}
};

axios.request(options)
.then(function (response) {
  setMateriales(materiales => materiales.filter(material=> material._id !== id ))
  toast.success(`Eliminado Con exito ${response.data.data.nombre}`, {
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
