import { DataGrid , GridToolbar , esES  } from '@mui/x-data-grid';
import { updateMaterial } from '../../api/updateMaterial';




const columns = [
  { field: 'nombre', headerName: 'Nombre', width: 200, editable: true },
  { field: 'categoria', headerName: 'Categoria', width: 200  },
  { field: 'descripcion', headerName: 'Descripcion', width: 200 },
  { field: 'unidad', headerName: 'Unidad' ,width: 120 },
  { field: 'stock', headerName: 'Stock', type: 'number',width: 150 , editable: true },
  { field: 'precio', headerName: 'Precio', type: 'number',width: 150, editable: true ,
  valueFormatter:(params) =>{
    return ` $ ${new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 10 }).format(params.value)}`
  }}
];

export const NewDataTable=({materiales})=> {

  const handleCommit = async (params)=>{
    console.log("params",params)
    let data = materiales.find(material=>material._id===params.id)
    data[params.field] = params.value
    await updateMaterial(data);
  }

  return (
    <div style={{ height: 579, width: '100%' }}>
      <DataGrid 
        getRowId={(materiales)=>materiales._id}
        rows={materiales}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[6]}
        onCellEditCommit={(params)=>handleCommit(params)}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        components={{
          Toolbar:GridToolbar
        }}
      />
    </div>
  );
}