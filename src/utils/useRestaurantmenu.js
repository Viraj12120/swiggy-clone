import { useEffect,useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu=(resId)=>{
    const [resMenu,setresMenu]=useState(null);

 

    useEffect(()=>{
        fetchMenu();
    },[]);

const fetchMenu= async()=>{
const data=await fetch(MENU_API + resId );
const json=await data.json();
       console.log(json);
       setresMenu(json.data);
};
return resMenu;
};
export default useRestaurantMenu;