import React from 'react'

const Item = (props) => {
  return (
    <div className="item flex flex-col mx-0.5 my-4 md:flex md:flex-col md:mx-1 md:my-6">
      <img className="h-64 w-44 object-cover md:h-80 md:w-60 md:object-cover" src={props.image} alt="" />
      <p className="name my-1 text-[11px] w-44 font-semibold md:my-1 md:text-[15px] md:w-48 md:font-semibold">{props.name}</p>
      <div className="items-price flex space-x-2 md:flex md:space-x-4">
        <div className="new-price text-[14px] text-[#374151] font-bold md:text-[18px]">
            ${props.new_price}
        </div>
        <div className="old-price text-[14px] text-[#8c8c8c] font-bold md:text-[18px]">
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
