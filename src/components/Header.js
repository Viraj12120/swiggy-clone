import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";
import { useSelector } from "react-redux/es/hooks/useSelector";


const Header=()=>{
  const [btnName,setBtnName]=useState("Login") 
  
  
  
  const onlineStatus=useOnlinestatus(); 
  
  const cartItems =useSelector((store)=>store.cart.items);
  
  return(
      <div className='flex justify-between shadow-lg m-0.5 pb-0'>
      <div className="logo-container"> 
       <img className="w-2/12" src={LOGO_URL}  />
       </div> 
      <div className="flex items-center ">
        <div>
           <ul className="flex p-4 m-4 ">
            <li>Status:{onlineStatus?"🟢":"🔴"}</li>
           <li className="px-4"><Link to="/">Home</Link></li>
           <li className="px-4"><Link to="/about">About us</Link></li>
           <li className="px-4"><Link to= "/contact">Contact us</Link></li>
           <li className="px-4"><Link to= "/cart">Cart🛒({cartItems.length}-Items)</Link></li>
           <button className="px-4" onClick={()=>{ btnName ==="Login" ? setBtnName("Logout"): setBtnName("Login");}}>
{btnName}
           </button>
           </ul>
      </div>
      </div>
      </div>
    );
  };

export default Header;  