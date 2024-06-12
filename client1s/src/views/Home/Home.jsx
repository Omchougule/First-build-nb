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
import MenuC from '../../components/HomeComponents/MenuC/MenuC';
import MenuList from '../../components/HomeComponents/MenuList/MenuList';
import SpecialItems from '../../components/HomeComponents/SpecialItems/SpecialItems';
import { OurBlogs } from '../../components/HomeComponents/OurBlogs/OurBlogs';
import { TestimonialsComp } from '../../components/HomeComponents/TestimonialsComps/TestimonialsComp';

export default function Home() {

  useEffect(() => {
    Aos.init({ duration: 1000, delay: 300 });
  })

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
    <div className='bg-[#ff679a]' data-scroll-container >
      <div className='
       md:bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/slider01_c82beff2-7ccb-48cb-8194-98e1e197b1e9.jpg?v=1658472890")] bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/slider01_c82beff2-7ccb-48cb-8194-98e1e197b1e9.jpg?v=1658472890")]
      bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-between items-center mb-20  
      '>

        <Navbar />

        <button className='text-white bg-transparent z-50 border py-2 px- w-32 focus:outline-none hover:bg-white hover:text-black active:scale-90 duration-200  rounded-full text-lg mb-10 -translate-y-20 '>Shop Now</button>

      </div>

      <div className=' bg-slate-700  ' data-scroll data-scroll-speed="-1">
        <AboutUs />

      </div>

      <div className=' bg-slate-700  '  >
        <MenuC />

      </div>

      <div className=' bg-slate-700  ' data-scroll data-scroll-speed="-1" >
        <MenuList />

      </div>

      <div className=' bg-slate-700  '>
        <SpecialItems />

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
