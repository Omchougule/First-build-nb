import React from 'react'
import { Link } from 'react-router-dom'

const DisplayF = () => {
    return (
        <>

            <div id='top' className=' flex flex-col md:flex-row space-x-10   justify-center items-center ' >
                <div className='md:flex flex-col justify-center h-2/3  hidden'>

                    <img className='w-20 animate-bounce animate-infinite animate-duration-[6000ms]' src="https://faryita.wpengine.com/wp-content/uploads/2024/03/cub.png" alt="" />
                </div>
                <div className='md:flex flex-col justify-between h-2/3  hidden'>

                    <img className='w-28 animate-bounce animate-infinite animate-duration-[8000ms]' src="https://faryita.wpengine.com/wp-content/uploads/2024/03/grap-fruit.png" alt="" />
                    <img className='w-28 scale-x-[-1] animate-wiggle animate-infinite animate-duration-[5000ms]' src="https://faryita.wpengine.com/wp-content/uploads/2024/03/sberry-fruit.png" alt="" />
                </div>


                <div className='text-center flex justify-center flex-col items-center'>
                    <div className='w-full flex justify-end'>

                        <img className='w-20 animate-shake animate-infinite animate-duration-[6000ms]  ' src="https://faryita.wpengine.com/wp-content/uploads/2024/03/Mint-leaves-Img.png" alt="" />
                    </div>
                    <h1 className='  leading-loose text-shadow-sm  text-shadow text-shadow-white text-shadow-x-1   font-extrabold text-[#fde047] text-6xl md:p-0 pe-5  md:text-9xl mb-10 font-title italic text-center' >Healthy <br /> <span className='text-[#fde047] '>Smoothies </span>

                       <span className='text-[#b4c817]'> &</span> <br /> <span className='text-[#fde047]'>Appetizers</span>
                    </h1>
                    <div className='w-full flex justify-start'>

                        <img className='w-20 animate-shake animate-infinite animate-duration-[6000ms]  ' src="https://faryita.wpengine.com/wp-content/uploads/2024/03/Mint-leaves-Img.png" alt="" />
                    </div>
                </div>

                <div className='md:flex flex-col justify-between h-2/3  hidden'>
                    <img className='w-20 animate-wiggle animate-infinite animate-duration-[5000ms]  ' src="https://faryita.wpengine.com/wp-content/uploads/2024/03/sberry-fruit.png" alt="" />
                    <img className='w-20 animate-bounce animate-infinite animate-duration-[6000ms]' src="https://faryita.wpengine.com/wp-content/uploads/2024/03/cub.png" alt="" />

                </div>
                <div className='md:flex flex-col justify-center h-2/3  hidden'>

                    <img className='w-20 animate-wi animate-infinite animate-duration-[6000ms]' src="https://faryita.wpengine.com/wp-content/uploads/2024/04/melon-with-leef.png" alt="" />
                </div>
            </div>

            <Link to='/products' >
                <button className='text-black bg-[#ffc935] z-50 font-light py-2 px- w-32 focus:outline-none hover:bg-white hover:text-black active:scale-90 duration-200  rounded-full text-lg mb-10 mt-5  '>Shop Now</button>
            </Link>


        </>
    )
}

export default DisplayF