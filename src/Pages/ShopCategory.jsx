import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import './CSS/ShopCategory.css'
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div>
      <div className="category flex justify-between items-center h-[127px] mx-2 md:flex md:justify-between md:items-center md:h-[40vh] md:mx-10">
        <div className="flex flex-col items-center justify-normal space-y-2 pl-6 md:flex md:flex-col md:justify-center md:space-y-3 md:pl-44">
          <h1 className="text-orange-500 font-extrabold tracking-wide text-1.5xl w-40 md:text-orange-500 md:font-extrabold md:tracking-wide md:text-4xl md:w-80">FLAT 50% OFF</h1>
          <p className="text-1.5xl font-extrabold w-40 md:text-3xl md:font-extrabold md:w-96"><span className="text-orange-500">12</span> HOURS <span className="text-orange-500">45</span> MINUTES</p>
          <button className="bg-orange-500 text-white flex text-center -ml-[65px] px-2 py-1 text-[11px] rounded-full w-24 md:bg-orange-500 md:text-white md:flex md:text-center md:-ml-[24px] md:px-2 md:py-2 md:text-[16px] md:rounded-full md:w-40">Explore Now</button>
        </div>
        <div className="-mt-4 -pr-56">
            <img className="max-w-[100%] md:max-w-[70%]" src={props.banner} alt="error in banner"/>
        </div>
      </div>

      <div className="products grid grid-cols-2 gap-4 justify-center items-center  mx-2 md:grid md:grid-cols-4 md:gap-4 md:justify-center md:items-center md:mx-28">
        {all_product.map((item,i)=>{
          if (props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
      </div>
  )
}

export default ShopCategory
