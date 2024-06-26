import React from 'react';
import GreenTop from '../../../assets/green_top.webp';

const MealItem = ({ index }) => (
  <div className='bg-yellow-400 hover:bg-[#ff679a] duration-300 cursor-pointer h-24 w-80 flex justify-center items-center rounded-md shadow-md space-x-5'
    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
  >
    <div className="bg-white h-16 w-16 rounded-md"></div>
    <div className="bg-black h-16 w-44 rounded-md"></div>
  </div>
);

const Meals = () => {
  const mealItems = [1, 2, 3, 4, 5, 6]; // Adjust the number of items as needed

  return (
    <div className='bg-[#b4c817] flex justify-center flex-col'>
      <div>
        <img className='hidden md:block md:-translate-y-28' src={GreenTop} alt="Green Top Decoration" />
      </div>
      <div className='flex flex-col text-white justify-center items-center mb-20 md:-translate-y-24'>
        <img className='w-12 opacity-90 invert' src='https://dt-faryita.myshopify.com/cdn/shop/files/icon04.png?v=1654245124' alt="Icon" />
        <h1 className='font-hand text-4xl'>Our Delicious Meals</h1>
        <h1 className='font-hand text-3xl my-5 opacity-80'>Menu List</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {mealItems.map((item, index) => (
            <MealItem 
              key={index} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Meals;
