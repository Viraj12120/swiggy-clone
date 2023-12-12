
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex})=>{
    

    const handleClick=()=>{
        setShowIndex();
    };
    return <div>
        <div className="w-6/12 mx-auto bg-slate-50 shadow-lg p-8 mt-4  rounded-lg">
            <div className="flex justify-between">
            <span className="font-bold text-center">{data.title}({data.itemCards.length})</span>
            <span><button className="cursor-pointer transition-shadow delay-150  hover:translate-y-1 hover:scale-100 hover:bg-slate-50" onClick={handleClick}>🔽</button></span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>

       
    </div>

    
};

export default RestaurantCategory;