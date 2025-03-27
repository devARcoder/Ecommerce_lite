import React from 'react'
import Footer_logo from '../Assets/logo.avif'
const Footer = () => {
  return (
    <div className="flex flex-col items-center space-y-4 mt-12 md:flex md:flex-col md:items-center md:space-y-6 md:mt-16">
      <div className="head flex flex-row items-center space-x-2 md:flex md:flex-row md:items-center md:space-x-3">
        <img className="w-12 h-12 md:w-20 md:h-20" src={Footer_logo} alt="footer logo"/>
        <h1 className="text-xl font-bold md:text-4xl md:font-bold">SHOPPER</h1>
      </div>
      <ul className="flex flex-row items-center space-x-2 text-sm md:flex md:flex-row md:items-center md:space-x-5 md:text-xl">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="social flex flex-row items-center space-x-2 text-[10px] md:flex md:flex-row md:items-center md:space-x-3 md:text-[16px]">
        <p className="">WhatsApp</p>
        <p className="">GitHub</p>
        <p className="">LinkedIn</p>
      </div>
      <div className="copyright">
        <hr className="mx-2 my-2 md:mx-5 md:my-2"/>
        <p className="text-[10px] md:text-[16px]">Copyright in 2024 | devarcoder789@gmail.com | All right Reserved</p>
        <hr className="mx-2 my-2 md:mx-5 md:my-2"/>
      </div>
    </div>
  )
}

export default Footer
