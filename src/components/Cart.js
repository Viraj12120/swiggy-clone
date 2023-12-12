import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
 

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    
    const dispatch =useDispatch();

    const handleClearCart =()=>{
        dispatch(clearCart());
    }
    
    return(
        <div>
            <h1 className="text-center font-bold m-4 p-4 text-2xl">Cart</h1>
         {cartItems.length===0}<h1 className="text-center font-semibold m-4 p-4 text-lg">Your Cart is Empty🛒 Please add Items!!! </h1>

         <div className="w-6/12 m-auto border-solid border-2 border-slate-200 bg-slate-100 ">
            <ItemList items={cartItems}/>
         </div>
        <button className=" text-center rounded-lg p-2 m-96 my-2 bg-lime-400 text-neutral-50  " onClick={handleClearCart}>Clear Cart</button>
       </div>
    )
}
export default Cart;