import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className="popular flex flex-col mt-10 md:flex md:flex-col md:mt-0">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl text-center text-gray-700 md:text-4xl md:text-gray-700 md:font-bold">POPULAR IN WOMEN</h1>
        <div className="rounded-full h-1 bg-gray-700 w-40 my-4 md:rounded-full md:h-2 md:bg-gray-700 md:w-56 md:mx-6 md:my-4"></div>
      </div>
      <div className="popular-item flex flex-row justify-normal items-center mx-1 overflow-auto mt-4 md:flex md:flex-row md:justify-center md:items-center md:mx-3 md:overflow-auto md:mt-4">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
