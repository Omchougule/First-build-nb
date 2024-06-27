import React from 'react';

import "./AboutUs.css"
import img from "./image.png"
import img2 from "./AboutUs.png"
import img3 from "./aboutUs2.png"
import img4 from "./Natural.png"
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='bg-[#f4f73c]  flex justify-center flex-col  '>

            <div>
                <img className=' hidden md:block md:-translate-y-28 rotate-180' src={img} alt="" />
            </div>

            <div className="flex flex-col  justify-center items-center py-20 md:py-0 md:-translate-y-28 p-10 ">
                <h1 className="font-hand text-6xl  text-gray-800">About Us</h1>

                <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
                    <div className="flex flex-col space-y-4 max-w-lg ms-10">
                        <img className='w-20 animate-shake animate-infinite animate-duration-[6000ms]  ' src="https://faryita.wpengine.com/wp-content/uploads/2024/03/Mint-leaves-Img.png" alt="" />
                        <h2 className="text-7xl font-hand  text-gray-700">Natural Café With Smoothies, Appetizers and Fresh Meals</h2>
                        <h4 className="text-gray-600 leading-relaxed">
                            Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Congue eu consequat ac felis donec. Ante in nibh mauris cursus.
                        </h4>


                        <Link to="/contact">

                            <button className="bg-[#fe669e] text-white  z-50 font-light py-2 px- w-32 focus:outline-none hover:bg-white hover:text-black active:scale-90 duration-200  rounded-full text-lg mb-10 mt-5  ">
                                Contact Us

                            </button>
                            

                        </Link>
                    </div>

                    <img className="h-96 md:h-[600px] drop-shadow-2xl object-cover rounded-lg -translate-y-24" src={img2} alt="About Us" />
                    <div className="hidden md:flex flex-col -translate-y-36 -translate-x-32 justify-start ">
                        <img src={img4} alt="100% natural Stamp" className=" h-32 object-contain animate-spin animate-infinite animate-duration-[6000ms]" />
                    </div>
                </div>
            </div>




        </div>
    )
}

export default AboutUs