import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/orders/Orders';
import Inventory from './components/Mange-Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import CheckOut from './components/Checkout/CheckOut';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element:<Shop></Shop>
      },
      {
        path: "shop",
        element:<Shop></Shop>
      },
      {
        path:"orders",
        element:<Orders></Orders>,
        // loader: () => fetch('products.json'),
        loader: cartProductsLoader,
      },
      {
        path:"inventory",
        element: <Inventory></Inventory>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"checkOut",
        element:<CheckOut></CheckOut>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
