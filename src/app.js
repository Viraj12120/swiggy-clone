
import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";
import { createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/Restaurantmenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";





const AppLayout=() =>{
  return( 
    <Provider store={appStore}>
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
    </Provider>
 
  )
};
const appRouter=createBrowserRouter([
 { 
  path:"/",
  element:<AppLayout/>,
  children:[ 
    {
      path:'/',
      element:<Body/>
    },
    {
    path:"/about",
    element:<About/>,
    errorElement:<Error/>,
    },
    {
      path:"/contact",
      element:<Contact/>,
    },
    {
      path:"/cart",
      element:<Cart/>,
    },
    {
      path:"restaurant/:resId",
      element:<RestaurantMenu/>
    }
  ],
      errorElement:<Error/>,
  },
]);
  
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
/*console.log(heading);*/

