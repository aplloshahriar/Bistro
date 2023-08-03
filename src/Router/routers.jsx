
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pagers/Home/Home/Home";
import Menu from "../Pagers/Menu/Menu/Menu";
import Order from "../Pagers/Order/Order/Order";
import Login from "../Pagers/Login/Login";

  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>,
        },
        {
          path:'/menu',
          element: <Menu></Menu>,
        },
        {
          path:'/order/:category',
          element: <Order></Order>,
        },
        {
          path:'/login',
          element: <Login></Login>
        }
      ]
    },
  ]);


