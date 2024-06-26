import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import DeliveryCTA from '../../components/HomeComp/Delivery/DeliveryCTA'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Carousel from '../../components/HomeComp/Carousel/Carousel';
import FewWords from '../../components/HomeComp/FewWords/FewWords';
import FAQ from '../../components/HomeComp/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';
import SpecialOffer from '../../components/HomeComp/SpecialOffer/SpecialOffer';
import Gallery from '../../components/HomeComp/Gallery/Gallery';
import Testimonials from '../../components/HomeComp/Testimonials/Testimonials';
import Features from '../../components/HomeComp/Features/Features';
import Founder from '../../components/HomeComp/Founder/Founder';
import Products from '../../components/HomeComp/Products/Products';
import Reciept from '../../components/Reciept/Reciept';
import AboutUs from '../../components/HomeComponents/AboutUs/AboutUs';
import Appetizers from '../../components/HomeComponents/Appetizers/Appetizers';
import Meals from '../../components/HomeComponents/Meals/Meals';
import Smothies from '../../components/HomeComponents/Smothies/Smothies';
import  OurBlogs  from '../../components/HomeComponents/OurBlogs/OurBlogs';
import TestimonialsComp from '../../components/HomeComponents/TestimonialsComps/TestimonialsComp';
import { useUserContext } from '../../context/Authcontext';
import { Link } from 'react-router-dom';
import DisplayF from '../../components/HomeComponents/DisplayF/DisplayF';
export default function Home() {

  const { user, products } = useUserContext();
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 300 });
  })
  console.log(user);

  // useEffect(() => {

  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector('[data-scroll-container]'),
  //     smooth: true,
  //     lerp: 0.05,
  //     // lerp : 0.95,

  //   });

  //   document.querySelector("#scroll-to-top").addEventListener("click", () => {

  //     scroll.scrollTo(0)
  //   })


  // }, [])

  return (

    <div className='bg-[#ff679a] pt-20' data-scroll-container >
      {/* md:bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/slider01_c82beff2-7ccb-48cb-8194-98e1e197b1e9.jpg?v=1658472890")] bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/slider01_c82beff2-7ccb-48cb-8194-98e1e197b1e9.jpg?v=1658472890")] */}
      <div className='
        md:bg-[#fe669e] 
       bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center mb-20 
      '>

        <Navbar />

        <DisplayF />



      </div>

      <div className=' bg-slate-700  ' data-scroll data-scroll-speed="-1">
        <AboutUs />

      </div>

      <div className=' bg-slate-700  '  >
        <Appetizers />

      </div>

      <div className=' bg-slate-700  ' data-scroll data-scroll-speed="-1" >
        <Meals />

      </div>

      <div className=' bg-slate-700  '>
        <Smothies />

      </div>

      <div className=' bg-slate-700  '>
        <OurBlogs />

      </div>

      <div className=' bg-slate-700  '>
        <TestimonialsComp />

      </div>

      <div className='fixed bottom-5 right-5'>
        <button className='' id="scroll-to-top">
          <img src='https://cdn-icons-png.flaticon.com/128/833/833102.png' className='w-10 h-10' alt='Go Up' />
        </button>
      </div>

      <Footer />




      {/* <Carousel/>

    <DeliveryCTA/>

    <Products/>

    <FewWords/>

    <SpecialOffer/>

    <Gallery/>

    <Testimonials/>

    <Features/>
    

    <Founder/>

    <FAQ/>
 */}
      {/* <Reciept/>   */}


      {/* <Footer/> */}

    </div>
  )
}
