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

  return (
    <div >
      <div className='
       md:bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/slider01_c82beff2-7ccb-48cb-8194-98e1e197b1e9.jpg?v=1658472890")] bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/slider01_c82beff2-7ccb-48cb-8194-98e1e197b1e9.jpg?v=1658472890")]
      bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-between items-center
      '>

        <Navbar />

        <button className='text-white bg-transparent z-50 border py-2 px- w-32 focus:outline-none hover:bg-white hover:text-black active:scale-90 duration-200  rounded-full text-lg mb-10 -translate-y-20'>Shop Now</button>

      </div>

      <div className=' bg-slate-700  '>
        <AboutUs/>

      </div>

      <div className=' bg-slate-700  '>
        <MenuC/>

      </div>

      <div className=' bg-slate-700  '>
        <MenuList/>

      </div>

      <div className=' bg-slate-700  '>
        <SpecialItems/>

      </div>

      <div className=' bg-slate-700  '>
        <OurBlogs/>

      </div>

      <div className=' bg-slate-700  '>
        <TestimonialsComp/>

      </div>

      <Footer/>




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
