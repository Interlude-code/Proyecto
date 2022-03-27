


const TablaInventario = ({materiales}) => {
    
    return (

        <div>  
            <div>
            <table className = "w-full table-fixed mt-6">
                <thead className = "thead-color leading-10 text-sm text-gray-700 border-1 text-center">
                    <tr>
                        <th className="w-80 text-left pl-6" >Nombre</th>
                        <th className="w-40" >Categoria</th>
                        <th className="w-40" >Descripcion</th>
                        <th className="w-30">Unidad</th>
                        <th className="w-30">Stock</th>
                        <th className="w-32 ">Precio</th>
                    </tr>
                </thead>
                {console.log(materiales)}
                {materiales.map((material)=>(
                        <FilasTablaProyectos key={material._id} material={material} />
                    ))}
            </table>
        </div>
    </div>
    )
}

const FilasTablaProyectos = ({material}) =>{

    return(
        <tbody className = "texto-tablas tbody-border texto-tablas">  
        <tr>
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

        </tr>
    </tbody>
    )
}

export default TablaInventario;