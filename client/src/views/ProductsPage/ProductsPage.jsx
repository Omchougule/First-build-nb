import React from 'react'
import Products from '../../components/HomeComp/Products/Products'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useUserContext } from '../../context/Authcontext';

const ProductsPage = () => {
  const {fetchProducts, products} = useUserContext()
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 300 });
    if(products == [])
    {
      fetchProducts()
    }
  })

  // useEffect(() => {

  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true,
  //     lerp: 0.05,
  //     // lerp : 0.95,

  //   });
  // }, [])

  return (
    <div data-scroll-container className='pb-20' >

      <div className='
       md:bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/breadcrumb_bc57e145-dc2e-410c-9c11-4c22d1a357eb.png?v=1655187284")] 
      bg-inherit bg-no-repeat bg-cover  flex flex-col justify-between items-center pt-20
      '>

        <Navbar />

        <h1 className='font-hand text-5xl py-36 mt-2 text-orange-400'>Our Products</h1>

        {/* <button className='text-white bg-transparent z-50 border py-2 px- w-32 focus:outline-none hover:bg-white hover:text-black active:scale-90 duration-200  rounded-full text-lg mb-10 -translate-y-20'>Shop Now</button> */}

      </div>
      {/* <Navbar/> */}

      <Products />


    </div>
  )
}

export default ProductsPage