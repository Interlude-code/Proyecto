import { useState } from 'react';
import { Button, Dialog, Stack } from '@mui/material';
import { DataGrid , GridToolbar , esES , GridToolbarContainer , GridActionsCellItem  } from '@mui/x-data-grid';
import { updateMaterial } from '../../connectApi/updateMaterial';
import { useMaterial } from '../../context/materialContext';
import FormularioCrearProducto from '../FormularioCrearProducto';
import { Delete } from '@mui/icons-material';
import { DeleteMaterial } from '../../connectApi/deleteMaterial';







export const NewDataTable=()=> {
  const [openDialog,setOpenDialog]=useState(false)
  const {materiales ,setMateriales} =  useMaterial()
  const [deleteId,setDeleteId]=useState('')
  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleDeleteClick = (id) => (event) => {
    setOpenDialog(true)
    setDeleteId(id)
    event.stopPropagation();
  };

  const columns = [
  { field: 'nombre', headerName: 'Nombre', width: 200, editable: true },
  { field: 'categoria', headerName: 'Categoria', width: 200  },
  { field: 'descripcion', headerName: 'Descripcion', width: 200 },
  { field: 'unidad', headerName: 'Unidad' ,width: 120 },
  { field: 'stock', headerName: 'Stock', type: 'number',width: 150 , editable: true },
  { field: 'precio', headerName: 'Precio', type: 'number',width: 150, editable: true ,
  valueFormatter:(params) =>{
    return ` $ ${new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 10 }).format(params.value)}`
  }},
  { field: 'PrecioTotal', headerName: 'Precio Total', type: 'number',width: 200 , editable: false,
   valueFormatter:(params) =>{
    return ` $ ${new Intl.NumberFormat('es-CO', { maximumSignificantDigits: 10 }).format(params.value)}`
  },valueGetter: (params) =>
  `${params.row.precio * params.row.stock }`},
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 100,
    cellClassName: 'actions',
    getActions: ({ id }) => {
      return [
        // eslint-disable-next-line react/jsx-key
        <GridActionsCellItem
          icon={<Delete />}
          label="Delete"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
      ];
    },
  }
  
];



  const handleCommit = async (params)=>{
    console.log("params",params)
    let data = materiales.find(material=>material._id===params.id)
    data[params.field] = params.value
    await updateMaterial(data,setMateriales);
  }

  return (
    <div style={{ height: 800, width: '100%' }}>
      <Stack
        sx={{ width: '100%', mb: 1 }}
        direction="row"
        alignItems="flex-start"
        columnGap={1}
      >
      <FormularioCrearProducto/>
      </Stack>
      <DataGrid 
        getRowId={(materiales)=>materiales._id}
        rows={materiales}
        columns={columns}
        pageSize={20}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        rowsPerPageOptions={[6]}
        onCellEditCommit={(params)=>handleCommit(params)}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        components={{
          Toolbar:GridToolbar
        }}
      />
      <Dialog open={openDialog}>
        <div className ='p-8 flex flex-col'>
          <h1 className= 'text gray-800 text-xl font-bold'> ¿Esta seguro de querer eliminarlo? </h1>
          <div className='flex w-full items-center justify-center'> 
            <span span onClick={()=>{
                  DeleteMaterial(deleteId , setMateriales)
                  setOpenDialog(false)
              }} className= 'mx-2 my-4 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md cursor-pointer'>Si</span>
              <span onClick={()=>setOpenDialog(false)} className= "className= 'mx-2 my-4 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md cursor-pointer">No</span>
          </div>
            </div>
      </Dialog>
    </div>
  );
}