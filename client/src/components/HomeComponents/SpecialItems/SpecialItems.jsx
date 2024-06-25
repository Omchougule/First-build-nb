import React from 'react'
import PinkTop from  '../../../assets/pink_top.svg';

const SpecialItems = () => {
    return (
        <div className='bg-[#ff679a]    flex justify-center flex-col 
          '>
            {/* <div className="custom-shape-2  ">
                <svg className='custom-shape-2-svg ' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div> */}

            <div>
                <img className=' hidden md:block md:-translate-y-28 ' src={PinkTop} alt="" />
            </div>


            <div className=' flex flex-col text-white pt-28 md:pt-0  justify-center items-center mb-20 md:-translate-y-24'>
                <img className='w-12 opacity-90 invert  ' src='https://dt-faryita.myshopify.com/cdn/shop/files/icon04.png?v=1654245124' />
                <h1 className='font-hand text-4xl '>Our Delicious Smothies</h1>
                <h1 className='font-hand text-3xl my-5 opacity-80'>Menu List</h1>
                {/* <img className='w-96     object-cover' src="https://dt-faryita.myshopify.com/cdn/shop/files/grid15_8c36583c-9f32-498a-9e44-59507412669e.png?v=1655093327" alt="" /> */}

                <div className='grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-20 '>

                    <div className='bg-yellow-400 h-80 w-56 flex justify-center items-center rounded-md shadow-md space-x-5' data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal" >
                        <div className="bg-white hover:bg-[#5a2f96] duration-150 ease-in-out shadow-lg h-64 w-32 rounded-md"></div>
                        {/* <div className="bg-black h-16 w-44 rounded-md"></div> */}
                    </div>

                    <div className='bg-yellow-400 h-80 w-56  flex justify-center items-center rounded-md shadow-md space-x-5' data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">
                        <div className="bg-white hover:bg-[#5a2f96] duration-150 ease-in-out shadow-lg h-64 w-32 rounded-md"></div>
                        {/* <div className="bg-black h-16 w-44 rounded-md"></div> */}
                    </div>



                    <div className='bg-yellow-400 h-80 w-56 flex justify-center items-center rounded-md shadow-md space-x-5'data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">
                        <div className="bg-white hover:bg-[#5a2f96] duration-150 ease-in-out shadow-lg h-64 w-32 rounded-md"></div>
                        {/* <div className="bg-black h-16 w-44 rounded-md"></div> */}
                    </div>

                    <div className='bg-yellow-400 h-80 w-56 flex justify-center items-center rounded-md shadow-md space-x-5'data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">
                        <div className="bg-white hover:bg-[#5a2f96] duration-150 ease-in-out shadow-lg h-64 w-32 rounded-md"></div>
                        {/* <div className="bg-black h-16 w-44 rounded-md"></div> */}
                    </div>






                </div>


            </div>
        </div>
    )
}

export default SpecialItems