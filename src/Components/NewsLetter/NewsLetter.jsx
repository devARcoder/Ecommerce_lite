import React from 'react'
import './newLetters.css'
const NewsLetter = () => {
  return (
    <div className="newLetter flex flex-col justify-center items-center py-6 px-2 mx-4 my-8 rounded-md space-y-4 h-[21vh] md:flex md:flex-col md:justify-center md:items-center md:py-6 md:px-4 md:mx-28 md:my-10 md:rounded-lg md:h-[40vh]">
      <h1 className="text-[22px] mt-3 font-bold md:text-4xl md:mt-3 md:font-extrabold">Get Exclusive Offers On Email</h1>
      <p className="text-[10px] font-semibold md:text-[19px] md:font-bold">Subcribe to our newletter and stay updates</p>
      <div clasName="flex flex-row items-center space-x-4 my-8 md:flex md:flex-row md:items-center md:space-x-4">
        <input className="py-1.5 px-3 shadow-md  border-2 border-gray-100 rounded-full text-sm w-auto md:py-3 md:px-3 md:shadow-lg md:border-2 md:border-gray-100 md:rounded-full md:text-[19px] md:w-80" type="email" placeholder="Your Email Id"/>
        <button className="bg-black text-white text-sm py-1.5 px-2 rounded-full md:bg-black md:text-white md:text-[19px] md:py-3 md:px-3 md:rounded-full">Subcribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
