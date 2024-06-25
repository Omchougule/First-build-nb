import React from 'react'
import GreenTop from  '../../../assets/green_top.webp';

const MenuList = () => {
    return (
        <div className='bg-[#b4c817]     flex justify-center flex-col 
          '  >


            <div>
                <img className=' hidden md:block md:-translate-y-28 ' src={GreenTop} alt="" />
            </div>

            <div className=' flex flex-col text-white  justify-center items-center mb-20 md:-translate-y-24'>
                <img className='w-12 opacity-90 invert  ' src='https://dt-faryita.myshopify.com/cdn/shop/files/icon04.png?v=1654245124' />
                <h1 className='font-hand text-4xl '>Our Delicious Meals</h1>
                <h1 className='font-hand text-3xl my-5 opacity-80'>Menu List</h1>
                {/* <img className='w-96     object-cover' src="https://dt-faryita.myshopify.com/cdn/shop/files/grid15_8c36583c-9f32-498a-9e44-59507412669e.png?v=1655093327" alt="" /> */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>
                    <div className='bg-yellow-400 hover:bg-[#ff679a] duration-300 cursor-pointer h-24 w-80 flex justify-center items-center rounded-md shadow-md space-x-5'>
                        <div className="bg-white h-16 w-16 rounded-md"></div>
                        <div className="bg-black h-16 w-44 rounded-md"></div>
                    </div>
                    <div className='bg-yellow-400 hover:bg-[#ff679a] duration-300 cursor-pointer h-24 w-80 flex justify-center items-center rounded-md shadow-md space-x-5'>
                        <div className="bg-white h-16 w-16 rounded-md"></div>
                        <div className="bg-black h-16 w-44 rounded-md"></div>
                    </div>
                    <div className='bg-yellow-400 hover:bg-[#ff679a] duration-300 cursor-pointer h-24 w-80 flex justify-center items-center rounded-md shadow-md space-x-5'>
                        <div className="bg-white h-16 w-16 rounded-md"></div>
                        <div className="bg-black h-16 w-44 rounded-md"></div>
                    </div>
                    <div className='bg-yellow-400 hover:bg-[#ff679a] duration-300 cursor-pointer h-24 w-80 flex justify-center items-center rounded-md shadow-md space-x-5'>
                        <div className="bg-white h-16 w-16 rounded-md"></div>
                        <div className="bg-black h-16 w-44 rounded-md"></div>
                    </div>
                    <div className='bg-yellow-400 hover:bg-[#ff679a] duration-300 cursor-pointer h-24 w-80 flex justify-center items-center rounded-md shadow-md space-x-5'>
                        <div className="bg-white h-16 w-16 rounded-md"></div>
                        <div className="bg-black h-16 w-44 rounded-md"></div>
                    </div>
                    <div className='bg-yellow-400 hover:bg-[#ff679a] duration-300 cursor-pointer h-24 w-80 flex justify-center items-center rounded-md shadow-md space-x-5'>
                        <div className="bg-white h-16 w-16 rounded-md"></div>
                        <div className="bg-black h-16 w-44 rounded-md"></div>
                    </div>
                    


                </div>


            </div>
        </div>
    )
}

export default MenuList