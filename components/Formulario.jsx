import { Box, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import useFormData from '../hooks/useFormData';
import { postMaterial } from '../api/postMaterial';
import { useMaterial } from '../context/materialContext';

const Formulario = () => {


    const {materiales, setMateriales} =  useMaterial()
    const{form, formData, updateFormData} = useFormData();
  
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');  


    const handleClickOpen = (scrollType) => () => {
      setOpen(true);
      setScroll(scrollType);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const descriptionElementRef = useRef(null);
    useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);
  
    const submitForm = async (e) => {
      e.preventDefault();
      await postMaterial(formData,materiales,setMateriales);
      handleClose()
    }
   
  
    return (
      <div>
          <div onClick={handleClickOpen('paper')} className="wrapper cursor-pointer">
                <div className="button-new">
                  <div className="icon-new self-center flex justify-between">
                    <span>Nuevo Material</span>
                  </div>
                </div>
          </div>
        
          <Dialog
              className= "bg-black bg-opacity-50"
              open={open}
              onClose={handleClose}
              scroll={scroll}
              aria-labelledby="scroll-dialog-title"
              aria-describedby="scroll-dialog-description"
            > 
              <form ref={form} onChange={updateFormData} onSubmit={submitForm}>
                  <DialogTitle id="scroll-dialog-title">
                  
                  <Box>
                    <div className="flex justify-between mt-3">
                      <div>
                        <input required name="nombre" className="w-full rounded-sm border" placeholder="Nombre Material..." type="text" id="fname" />
                      </div>
                  
                      <div className="flex self-center">
                        <div className="flex space-x-4">
                            <div className = "flex flex-col">
                                <span className = "font-semibold text-sm"></span>
                                <span className = "text-xs font-medium text-blue-500"> <i className="far fa-flag"></i></span>
                            </div>
                        </div>
                      </div>
                    </div>
  
                  </Box>
                </DialogTitle>
  
                <DialogContent dividers={scroll === 'paper'}>
                  <textarea required name="descripcion" className="mt-4 pl-2 pt-2 text-sm rounded-md input-perfil" placeholder="Descripcion del Material" id="w3review"  rows="7" cols="75"></textarea> 
                </DialogContent>
  
           
                  <DialogContent>
                      <div className = "mb-4">
                        <label>Precio : </label>
                        <input type="number" required name="precio"/>
                        <label>Stock : </label>
                        <input type="number" required name="stock"/>
                      </div>
                      <div className="flex">
                        <label>Unidades</label>
                        <select required className="text-sm pl-2 w-full font-light rounded-sm h-7 input-perfil border cursor-pointer" name="unidad"  defaultValue="Unidad">
                            <option disabled type="String" value="">Unidad</option>
                            <option type="String">UNIDAD</option>
                            <option type="String">CAJA</option>
                            <option type="String">METRO</option>
                        </select>
                        <label>Categoria</label>
                        <select required className="text-sm pl-2 w-full font-light rounded-sm h-7 input-perfil border cursor-pointer" name="categoria" defaultValue="Categoria">
                            <option disabled type="String" value="">Categoria</option>
                            <option type="String">HIDRO-SANITARIO</option>
                            <option type="String">PINTURAS</option>
                            <option type="String">LOCATIVO</option>
                            <option type="String">PINTURAS</option>
                            <option type="String">ELECTRICO</option>
                            <option type="String">FERRETERIA</option>
                            <option type="String">AIRE-ACONDICIONADO</option>
                        </select>
                      </div>
                      <div className="flex justify-center w-full ">
                        <button type='submit' className="border bg-blue-800 px-2 rounded-md mt-3 text-white">Crear</button>
                      </div>
                  </DialogContent>
                  
              </form>
              
            </Dialog>
      </div>
    );
}


export default Formulario