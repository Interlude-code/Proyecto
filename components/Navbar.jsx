import Link from 'next/link'
import sodexoLogo from '../public/pngwing.com.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className=' max-w-screen-2xl m-auto'>
          <div className='flex w-full bg-slate-300'>
          <Image src={sodexoLogo} width={250} height={100}/>
          </div>
          <div className='flex w-full justify-center text-4xl space-x-20 bg-blue-800 text-white rounded-lg  items-center h-16 shadow-xl '>
            <Link Link href="/">
              Inicio
            </Link>
            <Link href="/inventario">
              <a className=' '>
                Inventario
              </a>
              </Link>
            <Link href="/proveedores">
              Proveedores
              </Link>
          
          </div>
    </div>
  )
}

export default Navbar