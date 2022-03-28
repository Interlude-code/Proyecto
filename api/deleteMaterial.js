import axios from "axios";



export const DeleteMaterial = (id,setMateriales)=>{

const options = {
  method: 'DELETE',
  url: `http://localhost:3000/api/delete-material/${id}`,
  headers: {'Content-Type': 'application/json'}
};

axios.request(options).then(function (response) {
  const {data} = response.data
  setMateriales(materiales => materiales.filter(materiale=> materiale.id !== id ))
}).catch(function (error) {
  console.error(error);
});
}
