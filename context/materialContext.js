import { createContext,useContext } from "react";

export const MaterialContext=createContext(null);


export const useMaterial=()=>{
    return useContext(MaterialContext);
}