import axios from "axios";



export const postMaterial = (material)=>{
    

const options = {
  method: 'POST',
  url: 'http://localhost:3000/api/hello',
  headers: {'Content-Type': 'application/json'},
  data: material
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
}