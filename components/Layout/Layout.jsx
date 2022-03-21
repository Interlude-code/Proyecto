import Navbar from '../Navbar'

const Layout = ({children}) => {
  return (
    <div className=' h-screen bg-slate-300'>
        <div className='max-w-screen-2xl m-auto'>
            <Navbar/>
            {children}
            <footer>footer</footer>
        </div>
    </div>
  )
}

export default Layout