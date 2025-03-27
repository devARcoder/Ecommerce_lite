import React from 'react'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div className="popular flex flex-col mt-6 md:flex md:flex-col md:mt-0">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl text-center text-gray-700 md:text-4xl md:text-gray-700 md:font-bold">NEW COLLECTIONS</h1>
        <div className="rounded-full h-1 bg-gray-700 w-40 my-4 md:rounded-full md:h-2 md:bg-gray-700 md:w-56 md:mx-6 md:my-4"></div>
      </div>
      <div className="popular-item grid grid-cols-2 gap-x-1 gap-y-1 justify-center items-center mx-2 my-4 sm:grid sm:grid-cols-3 sm:gap-x-1 sm:gap-y-1 sm:justify-center sm:items-center sm:mx-14 sm:my-4 md:grid md:grid-cols-4 md:gap-x-1 md:gap-y-1 md:justify-center md:items-center md:mx-28 md:my-6">
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
