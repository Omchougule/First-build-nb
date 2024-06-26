import React from 'react';
import PinkTop from '../../../assets/pink_top.svg';

const SmoothieItem = ({index}) => (
    <div className='bg-yellow-400 h-80 w-56 flex justify-center items-center rounded-md shadow-md space-x-5' 
    data-aos={index < 2 ? "fade-right" : "fade-left"}>
        <div className="bg-white hover:bg-[#5a2f96] duration-150 ease-in-out shadow-lg h-64 w-32 rounded-md"></div>
    </div>
);

const Smothies = () => {
    const smoothieItems = [1, 2, 3, 4]; // Adjust the number of items as needed

    return (
        <div className='bg-[#ff679a] flex justify-center flex-col'>
            <div>
                <img className='hidden md:block md:-translate-y-28' src={PinkTop} alt="Pink Top Decoration" />
            </div>
            <div className='flex flex-col text-white pt-28 md:pt-0 justify-center items-center mb-20 md:-translate-y-24'>
                <img className='w-12 opacity-90 invert' src='https://dt-faryita.myshopify.com/cdn/shop/files/icon04.png?v=1654245124' alt="Icon" />
                <h1 className='font-hand text-4xl'>Our Delicious Smoothies</h1>
                <h1 className='font-hand text-3xl my-5 opacity-80'>Menu List</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20'>
                    {smoothieItems.map((item, index) => (
                        <SmoothieItem key={index} index={index}  />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Smothies;
