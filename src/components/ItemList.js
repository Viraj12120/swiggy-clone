import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";

 const ItemList=({items})=>{
const dispatch=useDispatch();

const handleAddItem=(item)=>{
    dispatch(addItem(item));
}
    
    
    return (
    <div>
        {items.map((item)=>(
        <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left flex justify-between">
  <div className="w-9/12">
<div className="py-4">
     <span>{item.card.info.name}</span>
     <div> 
         ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</div>
</div>
<p className="flex text-xs">{item.card.info.description}</p>
</div>
   <div className="w-3/12 p-4">    
<div className="absolute">
    <button className="p-2 -my-1 -mx-1 text-green-500  rounded-lg bg-white shadow-lg absolute m-auto transition ease-in delay-100  hover:translate-y-1 hover:scale-110
     hover:drop-shadow-2xl  duration-300 ...  " onClick=
     {()=>handleAddItem(item)}>Add</button>
     </div>
     <img  src={CDN_URL + item?.card?.info?.imageId} className="w-full rounded-lg"/>
     </div>
     </div> 
        ))}
    </div>
);
};

export default ItemList;
