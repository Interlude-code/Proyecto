import axios from "axios";



export const postMaterial = (material,materiales,setMateriales)=>{

const options = {
  method: 'POST',
  url: 'http://localhost:3000/api/hello',
  headers: {'Content-Type': 'application/json'},
  data: material
};

axios.request(options).then(function (response) {
  // const {data} = response.data
  // const update = materiales
  // let update2 = update.push(data)
  // console.log(materiales);
  // console.log(data)
  // console.log(update2)
  // setMateriales(update2)
}).catch(function (error) {
  console.error(error);
});
}