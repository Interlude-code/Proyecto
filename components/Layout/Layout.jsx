import Head from 'next/head'
import Navbar from '../Navbar/Navbar'
import NewNavBar from '../Navbar/NewNavbar'

const Layout = ({children}) => {
  return (
    <div className='bg-slate-50'>
        <div className='h-screen  mx-4'>
        <div className='max-w-screen-2xl m-auto'>
            <NewNavBar/>
            {children}
        </div>
      </div>
    </div>
  
  )
}

export default Layout