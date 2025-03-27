import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow_icon.png'
import man_sitting from '../Assets/man_sitting.png'
const Hero = () => {
  return (
    <div className="Hero flex flex-col items-center h-[100%] md:flex md:flex-row md:justify-between md:items-center md:h-[100vh]">
      <div className="top visible flex flex-col items-center  my-6 md:hidden">
        <img className="pr-[0px] md:pr-[60px] " src={man_sitting} alt="error in hero" />
      </div>
      <div className="bottom flex flex-col justify-center items-center space-y-4 pl-[0px] md:flex md:flex-col md:justify-center md:items-center md:space-y-6 md:pl-[180px]">
        <h1 className="text-1xl text-gray-500 md:text-2xl md:text-gray-500 ">NEW ARRIVALS ONLY</h1>
        <div className="flex items-center space-x-2 md:flex md:items-center md:space-x-4">
          <h1 className="text-4xl text-gray-700 md:text-6xl md:text-gray-700">Collections</h1>
          <img className="w-8 h-8 md:w-12 md:h-12" src={hand_icon} alt="error in hero" />
        </div>
        <h1 className="text-1xl text-gray-500  md:text-2xl md:text-gray-500 ">Brands for everyone</h1>
        <div className="flex items-center text-[11px] bg-red-500 text-white px-2 py-1 rounded-xl shadow-md md:flex md:items-center md:text-xl md:bg-red-500 md:text-white md:px-4 md:py-1 md:rounded-xl md:shadow-xl">
          <p className="">Latest Collection</p>
          <img className="w-8 h-8 md:w-11 md:h-11" src={arrow_icon} alt="error in hero" />
        </div>
      </div>
      <div className="hidden md:flex md:flex-col md:justify-center md:items-center  md:my-6">
      <img className=" " src={man_sitting} alt="error in hero" />
    </div>
      

    </div>
  )
}

export default Hero
