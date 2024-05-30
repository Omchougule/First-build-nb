import React from 'react'
import Products from '../../components/HomeComp/Products/Products'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';

const ProductsPage = () => {

  useEffect(()=>{
    Aos.init({duration : 1000, delay : 300});
})

  return (
    <>
    <Navbar/>

    <Products/>
    
    
    </>
  )
}

export default ProductsPage