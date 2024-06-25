import React, { useEffect } from 'react';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
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
import './App.css'
import AuthProvider from './context/Authcontext';
import { SignUp } from './views/Login/SignUp';

function App() {

  useEffect(() => {

    gsap.registerPlugin(useGSAP,ScrollTrigger);

  });

  

  


  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home/>
  //   },

  //   {
  //     path: "/contact",
  //     element: <Contact/>
  //   },

  //   {
  //     path: "/review",
  //     element : <Review/>
  //   },

  //   {
  //     path : "/login",
  //     element : <Login/>
  //   },

  //   {
  //     path: "/product/:id",
  //     element: <ProductDetail/>
  //   },

  //   {
  //     path : "/reciept/:id",
  //     element : <Reciept/>
  //   },

  //   {
  //     path : "/dashboard",
  //     element : <Dashboard/>
  //   },

  //   {
  //     path: "/products",
  //     element: <ProductsPage/>
  //   },

  //   {
  //     path : "/cart",
  //     element : <Cart/>
  //   },

  //   {
  //     path : "/cart/checkout",
  //     element : <Checkout/>
  //   },

  //   {
  //     path : "cart/checkout/payment",
  //     element : <Payment/>
  //   },

  //   {
  //     path : "cart/checkout/payment/confirmation",
  //     element : <OrderConfirmaton/>
  //   },

  //   {
  //     path:"/orders/trackorder",
  //     element : <TrackOrder/>
  //   },

  //   {
  //     path : "*",
  //     element : <NotFound/>
  //   }



  // ]);

  return (
      // <RouterProvider router={router} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/reciept/:id' element={<Reciept/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/cart/checkout' element={<Checkout/>}/>
        <Route path='cart/checkout/payment' element={<Payment/>}/>
        <Route path='cart/checkout/payment/confirmation/:id' element={<OrderConfirmaton/>}/>
        <Route path='/orders/trackorder/:id' element={<TrackOrder/>}/>
        <Route path='/dash' element={<Dashboard/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
        
      </Routes>
  );
}

export default App;
