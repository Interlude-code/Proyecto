
import axios from 'axios';


const materialesApi = axios.create({
    baseURL: 'https://localhost:3000/api'
});



export default materialesApi;

