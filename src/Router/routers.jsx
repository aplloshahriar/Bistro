
import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pagers/Home/Home/Home";
import Menu from "../Pagers/Menu/Menu/Menu";
import Order from "../Pagers/Order/Order/Order";
import Login from "../Pagers/Login/Login";
import Signup from "../Pagers/Signup/Signup";
import PrivateRoute from "../Router/PrivateRoute";
import Secret from "../Pagers/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pagers/Dashboard/MyCart/MyCart";
import AllUsers from "../Pagers/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pagers/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pagers/Dashboard/ManageItem/ManageItem";
import Payment from "../Pagers/Dashboard/Payment/Payment";
import UserHome from "../Pagers/Dashboard/UserHome/UserHome";
import AdminHome from "../Pagers/Dashboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/menu',
        element: <Menu></Menu>,
      },
      {
        path: '/order/:category',
        element: <Order></Order>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>,
      }

    ]

  },
  {
    path: "dashboard",
    element: <PrivateRoute>  <Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },

      {
        path: "payment",
        element: <Payment></Payment>,
      },
      // admin routes
      {
        path: "adminhome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
      },
      {
        path: "allusers",
        element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>,
      },
      {
        path: "addItem",
        element: <AdminRoute>
          <AddItem></AddItem>
        </AdminRoute>
      },
      {
        path: "manageItems",
        element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
      },
    ]
  }
]);


