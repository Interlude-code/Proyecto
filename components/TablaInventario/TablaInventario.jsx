import styles from './TablaInventario.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark ,faPenToSquare} from '@fortawesome/free-regular-svg-icons'
import { useState } from "react"
import { Dialog } from '@material-ui/core';
import { DeleteMaterial } from '../../api/deleteMaterial';
import { useMaterial } from '../../context/materialContext';
import 'react-toastify/dist/ReactToastify.css';

const TablaInventario = ({materiales}) => {
    const [busqueda,setBusqueda] = useState("")
    return (
        <div>
            <div className= {` bg-white border border-gray-500 rounded-xl `} >
                <i className="fas fa-search text-gray-500 pl-4 mr-3"></i>
                <input onChange={(e)=>setBusqueda(e.target.value.toLowerCase())}  className= "outline-none w-96 h-9 rounded-xl" type="text" placeholder="Busqueda por nombre o categoria..."/>
            </div>
            <div>
            <table className = "w-full table-fixed mt-10">
                <thead className = {`leading-10 text-sm text-gray-700 border-1 ${styles['thead-color']}`}>
                    <tr>
                        <th className="w-56 text-left pl-6" >Nombre</th>
                        <th className="w-30" >Categoria</th>
                        <th className="w-30" >Descripcion</th>
                        <th className="w-30">Unidad</th>
                        <th className="w-30">Stock</th>
                        <th className="w-30 ">Precio</th>
                        <th className="w-30 ">Acciones</th>
                    </tr>
                </thead>
                {console.log(materiales)}
                {materiales.filter(material=>material.nombre.toLowerCase().includes(busqueda)||
                material.categoria.toLowerCase().includes(busqueda)).map((material)=>(
                        <FilasTablaProyectos key={material._id} material={material} />
                    ))}
            </table>
        </div>
    </div>
    
    )
}

const FilasTablaProyectos = ({material}) =>{

    const [openDialog,setOpenDialog]=useState(false)
    const {setMateriales} =  useMaterial()

    return(
    <>
        <tbody className ="texto-tablas tbody-border">
        <tr className= {`${styles['hover-tablas']} `}>
            <td className="text-left pl-4">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis pl-2">{material.nombre}</span>
            </td> 
            <td className="p-2 flex justify-center">
                <span className ="">{material.categoria}</span>
            </td>
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{material.descripcion}</span>
            </td>
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{material.unidad}</span>
            </td>
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{material.stock}</span>
            </td>
            <td className="text-center">
                <span className ="overflow-hidden whitespace-nowrap overflow-ellipsis w-14 px-2">{material.precio} $</span>
            </td>
            <td className="text-center space-x-10">
                <FontAwesomeIcon icon={faPenToSquare} color="green" size="lg" cursor="pointer" />        
                <FontAwesomeIcon icon={faCircleXmark} color="red" size="lg"  cursor="pointer" onClick={()=>setOpenDialog(true)} />
            </td>
            
        </tr>
    </tbody>
    <Dialog open={openDialog}>
    <div className ='p-8 flex flex-col'>
      <h1 className= 'text gray-800 text-xl font-bold'> ¿Esta seguro de querer eliminarlo? </h1>
      <div className='flex w-full items-center justify-center'> 
            <span onClick={()=>{
                DeleteMaterial(material._id , setMateriales)
                setOpenDialog(false)
            }} className= 'mx-2 my-4 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md cursor-pointer'>Si</span>
            <span onClick={()=>setOpenDialog(false)} className= "className= 'mx-2 my-4 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md cursor-pointer">No</span>
      </div>
    </div>
    </Dialog>
    </>
    )
}

export default TablaInventario;