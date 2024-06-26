import React from 'react';
import './MenuC.css';
import OrangeTop from '../../../assets/orange_top.webp';

const AppetizerItem = ({ index }) => (
  <div 
    className='bg-yellow-400 h-72 px-10 w-full flex justify-center items-center rounded-md shadow-md space-x-5' 
    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
  >
    <div className="bg-white h-56 w-44 rounded-md"></div>
    <div className="bg-black h-56 w-96 rounded-md"></div>
  </div>
);

const Appetizers = () => {
  const appetizerItems = [1, 2, 3, 4]; // Adjust the number of items as needed

  return (
    <div className='bg-[#f76d3c] pb-32 flex justify-center flex-col'>
      <div>
        <img className='hidden md:block md:-translate-y-28 rotate-180' src={OrangeTop} alt="Orange Top Decoration" />
      </div>
      <div className='flex flex-col text-white justify-center items-center mb-20 md:-translate-y-24'>
        <img className='w-12 opacity-90 invert' src='https://dt-faryita.myshopify.com/cdn/shop/files/icon04.png?v=1654245124' alt="Icon" />
        <h1 className='font-hand text-4xl'>Our Delicious Appetizers</h1>
        <h1 className='font-hand text-3xl my-5 opacity-80'>Menu List</h1>
        <div className='grid px-10 grid-cols-1 md:grid-cols-2 gap-10'>
          {appetizerItems.map((item, index) => (
            <AppetizerItem key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Appetizers;
