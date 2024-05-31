import React from 'react'

export const TestimonialsComp = () => {
    return (
        <>

            <div className='bg-[#f76d3c]    flex justify-center flex-col 
          '>
                {/* <div class="custom-shape-2  ">
                <svg className='custom-shape-2-svg ' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div> */}

                <div>
                    <img className=' shade hidden md:block md:-translate-y-24 rotate-180   ' src='https://dt-faryita.myshopify.com/cdn/shop/files/after_image-orange_top.png?v=1657021307' alt="" />
                </div>

                <div className=' flex flex-col space-y-10     justify-center items-center'>
                    <h1 className='font-hand text-4xl  text-white'>Testimonials</h1>
                    {/* <img className='w-96     object-cover' src="https://dt-faryita.myshopify.com/cdn/shop/files/grid15_8c36583c-9f32-498a-9e44-59507412669e.png?v=1655093327" alt="" /> */}
                    <section class="text-white body-font">
                        <div class="container w-4/5 px-5 pb-24 mx-auto">
                            <div class="grid lg:grid-cols-3 grid-col-1 gap-10 -m-4">
                                <div class=" lg:mb-0 mb-6 p-4">
                                    <div class="h-full text-center">
                                        <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://randomuser.me/api/portraits/men/54.jpg"/>
                                            <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. </p>
                                            <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
                                            <h2 class="text-white font-medium title-font tracking-wider text-2xl font-hand">HOLDEN CAULFIELD</h2>
                                            <p class="text-white">Senior Product Designer</p>
                                    </div>
                                </div>
                                <div class=" lg:mb-0 mb-6 p-4">
                                    <div class="h-full text-center">
                                        <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://randomuser.me/api/portraits/men/55.jpg"/>
                                            <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.</p>
                                            <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
                                            <h2 class="text-white font-medium title-font tracking-wider text-2xl font-hand">ALPER KAMU</h2>
                                            <p class="text-white">UI Develeoper</p>
                                    </div>
                                </div>
                                <div class=" lg:mb-0 p-4">
                                    <div class="h-full text-center">
                                        <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://randomuser.me/api/portraits/men/56.jpg"/>
                                            <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. </p>
                                            <span class="inline-block h-1 w-10 rounded bg-yellow-500 mt-6 mb-4"></span>
                                            <h2 class="text-white font-medium title-font tracking-wider text-2xl font-hand">HENRY LETHAM</h2>
                                            <p class="text-white">CTO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
