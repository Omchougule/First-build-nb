import React, { useEffect, useState } from 'react';
import OrangeTop from '../../../assets/orange_top.webp';
import GreenTop from '../../../assets/green_top.webp';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../../context/Authcontext';

// Dummy images
// const dummyImage1 = 'https://dishingouthealth.com/wp-content/uploads/2021/04/BroccoliFriedRiceUpdate_Styled2.jpg';
// const dummyImage2 = 'https://placekitten.com/201/300';

// Configuration for meal items
// const mealConfig = [
//   {
//     imageUrl: dummyImage1,
//     title: 'Green Salad',
//     description: 'A healthy green salad with fresh vegetables. AND ALSO THE INGREDIENTS IN THE DESC'
//   },
//   {
//     imageUrl: dummyImage1,
//     title: 'Orange Delight',
//     description: 'A refreshing orange-flavored dessert.'
//   },
//   {
//     imageUrl: dummyImage1,
//     title: 'Veggie Platter',
//     description: 'An assortment of fresh and cooked vegetables.'
//   },
//   {
//     imageUrl: dummyImage1,
//     title: 'Fruit Medley',
//     description: 'A mix of seasonal fruits for a refreshing treat.'
//   }
// ];

const MealItem = ({ meal, index }) => (
  <div
    className='bg-yellow-400 h-72 px-10 w-full flex justify-center items-center rounded-md shadow-md space-x-5'
    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
  >
    <div className="bg-white h-56 w-44 rounded-md flex justify-center items-center">
      <img src={meal.imageUrl} alt={meal.title} className="h-full w-full object-cover rounded-md" />
    </div>
    <div className="bg-black h-56 w-96 rounded-md p-5 text-white flex flex-col justify-around">
      <h2 className="text-2xl font-bold ">{meal.title}</h2>
      <p className="mt-2">{meal.description}</p>
    </div>
  </div>
);

const Meals = () => {

  const {products} = useUserContext()
  const [mealConfig, setMealConfig] = useState([])
  useEffect(()=>{
    setMealConfig(products.filter((product) => product.category == 'Meals').slice(0,4))
  },[products])
  return (
    <div className='bg-[#f76d3c]  flex justify-center flex-col'>
      <div>
        <img className='hidden md:block md:-translate-y-28 rotate-180' src={OrangeTop} alt="Orange Top Decoration" />
      </div>
      <div className='flex flex-col text-white justify-center items-center mb-20 md:-translate-y-24'>
        <img className='w-12 opacity-90 invert' src='https://dt-faryita.myshopify.com/cdn/shop/files/icon04.png?v=1654245124' alt="Icon" />
        <h1 className='font-hand text-4xl'>Our Delicious Meal</h1>
        <h1 className='font-hand text-3xl my-5 opacity-80'>Menu List</h1>
        <div className='grid px-10 grid-cols-1 md:grid-cols-2 gap-10'>
          {mealConfig.map((meal, index) => (
            <MealItem key={index} meal={meal} index={index} />
          ))}
        </div>

        <Link to='/products'>
          <button className='mt-10 bg-[#b4c817] text-white  z-50 font-light py-2 px-4 focus:outline-none hover:bg-white hover:text-black active:scale-90 duration-200  rounded-full text-lg mb-10  '>View All Products</button>
        </Link>

      </div>
    </div>
  );
}

export default Meals;
