import { useState } from 'react'
import { MaterialContext } from '../context/materialContext'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
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
