import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Assets/logo.avif'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
    // const [menu, setMenu] = useState("shop")
  return (
    <div>
      <nav className="flex justify-center items-center px-2 py-0 md:flex md:justify-between md:items-center md:px-2 md:py-2">
      <div className="md:visible md:flex md:space-x-2 md:px-4 md:py-2 md:text-white md:items-center hidden  ">
      <img className="md:visible md:w-14 md:h-14 md:rounded-full" src={logo} alt="error in img"/>
      <Link to='/'><li className="md:visible md:text-3xl md:text-orange-500 md:font-bold md:list-none">Shop</li></Link>
  </div>
        <ul className="flex items-center space-x-4 text-[16px] md:flex md:items-center md:space-x-10 md:text-2xl">
            <li className="font-bold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-orange-500"><Link to='/mens'>Men</Link></li>
            <li className="font-bold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-orange-500"><Link to='/kids'>Kids</Link></li>
            <div className="visible flex flex-col text-white items-center border border-white bg-gray-100 rounded-full py-1 px-6 md:hidden">
            <img className="w-9 h-9 rounded-full mt-1 md:w-12 md:h-12 md:rounded-full" src={logo} alt="error in img"/>
            <Link to='/'><li className="text-md mb-2 text-orange-500 font-bold md:text-2xl md:text-orange-500 md:font-bold">Shop</li></Link>
        </div>
            <li className="font-bold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-orange-500"><Link to='/womens'>Women</Link></li>
            <li className="visible font-bold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-orange-500 md:hidden"><Link to='/cart'>Cart</Link></li>
        </ul>
        <div className="hidden md:visible text-white md:flex md:space-x-2 md:items-center md:relative md:mx-4">
            <Link to='/login'><button className="bg-green-500 text-white px-2 py-1 rounded-md shdaow-sm active:bg-black active:text-white">Login</button></Link>
            <Link to='/cart'><img className="w-10 h-10 rounded-full flex" src={cart_icon} alt="error in img"/></Link>
            <div className="w-[20px] h-[20px] flex justify-center items-center rounded-full text-[12px] bg-red-500 text-white px-1 py-1 absolute left-20 bottom-6">
                0
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
