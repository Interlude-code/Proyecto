import { Box, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import useFormData from '../../hooks/useFormData';
import { updateMaterial } from '../../api/updateMaterial';
import { useMaterial } from '../../context/materialContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare } from '@fortawesome/free-regular-svg-icons'

const FormularioEdicionProducto = ({material}) => {


    const {setMateriales} =  useMaterial()
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
      await updateMaterial(formData ,setMateriales);
      handleClose()
    }
   
  
    return (
      <>
        <FontAwesomeIcon onClick={handleClickOpen('paper')} icon={faPenToSquare} color="green" size="lg" cursor="pointer" />
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
                        <span>{material.nombre}</span>
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
                  <DialogContent>
                      <input type="text" hidden name="_id" value={material._id} />
                      <div className = "mb-4">
                        <label>Stock : </label>
                        <input type="number" required defaultValue={material.stock} name="stock"/>
                        <label>Precio : </label>
                        <input type="number" required defaultValue={material.precio} name="precio"/>
                      </div>
                      <div className="flex justify-center w-full ">
                        <button type='submit' className="border bg-blue-800 px-2 rounded-md mt-3 text-white">Aceptar</button>
                      </div>
                  </DialogContent>
                  
              </form>
              
            </Dialog>
      </>
    );
}


export default FormularioEdicionProducto