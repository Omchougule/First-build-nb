import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Review from './views/Review/Review';
import Login from './views/Login/Login';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/HomeComp/Products/ProductDetails';
import Reciept from './components/Reciept/Reciept';
import Dashboard from './views/Dashboard/Dashboard';
import ProductsPage from './views/ProductsPage/ProductsPage';
import  TrackOrder from './views/Dashboard/TrackOrder';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Checkout from './views/Checkout/Checkout';
import Cart from './views/Cart/Cart';
import Payment from './views/Payment/Payment';
import OrderConfirmaton from './views/OrderConfirmation/OrderConfirmaton';
import { SignUp } from './views/Login/SignUp';
import './App.css'

function App() {

  useEffect(() => {

    gsap.registerPlugin(useGSAP,ScrollTrigger);

  });

  

  


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },

    {
      path: "/contact",
      element: <Contact/>
    },

    {
      path: "/review",
      element : <Review/>
    },

    {
      path:"/signup",
      element : <SignUp/>
    },

    {
      path : "/login",
      element : <Login/>
    },

    {
      path: "/product/:id",
      element: <ProductDetail/>
    },

    {
      path : "/reciept/:id",
      element : <Reciept/>
    },

    {
      path : "/dashboard",
      element : <Dashboard/>
    },

    {
      path: "/products",
      element: <ProductsPage/>
    },

    {
      path : "/cart",
      element : <Cart/>
    },

    {
      path : "/cart/checkout",
      element : <Checkout/>
    },

    {
      path : "cart/checkout/payment",
      element : <Payment/>
    },

    {
      path : "cart/checkout/payment/confirmation",
      element : <OrderConfirmaton/>
    },

    {
      path:"/orders/trackorder",
      element : <TrackOrder/>
    },

    {
      path : "*",
      element : <NotFound/>
    }



  ]);

  return (
    <>
    
    <RouterProvider router={router} />
  
    </>
  );
}

export default App;
