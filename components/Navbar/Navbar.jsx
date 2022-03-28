import Link from 'next/link'
import sodexoLogo from '../../public/pngwing.com.png'
import Image from 'next/image'
import Formulario from '../Formulario'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className='flex max-w-screen-2xl bg-slate-50 pb-4 items-end '>
          <div>
            <Image src={sodexoLogo} width={250} height={100} alt="sodexo-logo"/>
          </div>
          <div className={`flex w-full justify-end text-sm space-x-20 font-medium mr-5 ${styles['text-color']} rounded-lg items-center h-12`}>
            <Link Link href="/">
              Inicio
            </Link>
            <Link href="/inventario">
              <a>
                Inventario
              </a>
              </Link>
            <Link href="/proveedores">
              <a>
              Proveedores
              </a>
           
            </Link>
            <Formulario/>
          
          </div>
    </div>
  )
}

export default Navbar