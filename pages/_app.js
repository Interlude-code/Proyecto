import { useState } from 'react'
import { MaterialContext } from '../context/materialContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [materiales,setMateriales] = useState([])

  return(
      <MaterialContext.Provider value={{materiales, setMateriales}} >
        <Component {...pageProps} />
      </MaterialContext.Provider>

  ) 
}

export default MyApp
