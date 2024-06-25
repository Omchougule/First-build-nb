import React from 'react';

import "./AboutUs.css"
import img from "./image.png"

const AboutUs = () => {
    return (
        <div className='bg-[#f4f73c] pb-20  flex justify-center flex-col  '>
            {/* <div className="custom-shape-divider-bottom-1717052264">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div> */}

            <div>
                <img className=' hidden md:block md:-translate-y-28 rotate-180' src={img} alt="" />
            </div>

            <div className=' flex flex-col space-y-10 -translate-y-28    justify-center items-center'>
                <h1 className='font-hand text-4xl'>About Us</h1>
                <img className='w-96 blur-sm    object-cover' src="https://dt-faryita.myshopify.com/cdn/shop/files/grid15_8c36583c-9f32-498a-9e44-59507412669e.png?v=1655093327" alt="" />
            </div>



        </div>
    )
}

export default AboutUs