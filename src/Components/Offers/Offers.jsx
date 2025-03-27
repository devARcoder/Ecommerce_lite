import React from 'react'
import './offers.css'
import offers from '../Assets/offers.PNG'
const Offers = () => {
  return (
    <div>
      <div className="offers flex flex-row justify-between py-4 mx-4 my-8 rounded-md h-[23vh] md:flex md:flex-row md:jusrify-between md:py-4 md:mx-24 md:my-12 md:rounded-xl md:h-[61vh]">
        <div className="left relative flex flex-col pl-5 -mt-4 py-6 md:realtive md:flex md:flex-col md:pl-36 md:py-6 md:space-y-4 md:mt-3">
            <h1 className="text-2xl font-extrabold my-1 md:text-6xl md:font-extrabold md:my-1">Exculsive</h1>
            <h1 className="text-1xl font-bold md:text-4xl md:font-bold">Offers For You</h1>
            <p className="text-[7px] font-semibold md:text-2xl md:font-semibold">Only On Best Sellers Products</p>
            <button className="bg-red-500 text-white text-[9px] rounded-full shadow-lg shadow-red-500/20 px-2 py-1 my-2 w-2/3 md:bg-red-500 md:text-white md:text-lg md:rounded-full md:shadow-lg md:shadow-red-500/20 md:px-4 md:py-2 md:w-2/3">Order Now</button>
        </div>
        <div className="right absolute left-[127px] -mt-8 md:absolute md:left-[700px] md:-mt-14">
            <img src={offers} alt="error in offer"/>
        </div>
      </div>
    </div>
  )
}

export default Offers
