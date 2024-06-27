import React, { useEffect, useState } from 'react';
import './MenuC.css';
import GreenTop from '../../../assets/green_top.webp';
import OrangeTop from '../../../assets/orange_top.webp';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../../context/Authcontext';

// Dummy images
const dummyImage1 = 'https://placekitten.com/200/300';
const dummyImage2 = 'https://placekitten.com/201/300';

// Appetizers configuration
const appetizerConfig = [
  {
    photo: dummyImage1,
    name: 'Crispy Spring Rolls',
    description: 'Delicious spring rolls with a crispy exterior.'
  },
  {
    photo: dummyImage1,
    name: 'Stuffed Mushrooms',
    description: 'Mushroom caps stuffed with savory filling.'
  },
  {
    photo: dummyImage1,
    name: 'Bruschetta',
    description: 'Toasted bread topped with fresh tomatoes and herbs.'
  },
  {
    photo: dummyImage1,
    name: 'Caprese Salad',
    description: 'Tomatoes, mozzarella, and basil drizzled with balsamic glaze.'
  },
  {
    photo: dummyImage1,
    name: 'Garlic Shrimp',
    description: 'Juicy shrimp sautéed in garlic butter.'
  },
  {
    photo: dummyImage1,
    name: 'Spinach Artichoke Dip',
    description: 'Creamy dip with spinach, artichokes, and cheese.'
  }
];

// AppetizerItem component
const AppetizerItem = ({ appetizer, index }) => (
  <div
  className='bg-yellow-400 h-72 px-10 w-full flex justify-center items-center rounded-md shadow-md space-x-5'
    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
  >
    <div className="bg-white h-56 w-44 rounded-md flex justify-center items-center">
      <img src={appetizer.imageUrl} alt={appetizer.title} className="h-full w-full object-cover rounded-md" />
    </div>
    <div className="bg-black h-56 w-96 rounded-md p-5 text-white flex flex-col justify-around">
      <h2 className="text-lg font-bold">{appetizer.title}</h2>
      <p className="text-sm mt-1">{appetizer.description}</p>
    </div>
  </div>
);

// Appetizers component
const Appetizers = () => {

  const {products} = useUserContext()
  const [appetizerConfig, setAppetizerConfig] = useState([])
  useEffect(()=>{
    setAppetizerConfig(products.filter((product) => product.category == 'Appetizer').slice(0,4))
  },[products])

  return (
    <div className='bg-[#b4c817] flex justify-center flex-col '>
      <div>
        <img className='hidden md:block md:-translate-y-28' src={GreenTop} alt="Green Top Decoration" />
      </div>
      <div className='flex flex-col text-white justify-center items-center mb-20 md:-translate-y-24'>
        <img className='w-12 opacity-90 invert' src='https://dt-faryita.myshopify.com/cdn/shop/files/icon04.png?v=1654245124' alt="Icon" />
        <h1 className='font-hand text-4xl'>Our Delicious Appetizers</h1>
        <h1 className='font-hand text-3xl my-5 opacity-80'>Menu List</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {appetizerConfig.map((appetizer, index) => (
            <AppetizerItem key={index} appetizer={appetizer} index={index} />
          ))}
        </div>

        <Link to='/products'>
          <button className='mt-10 bg-[#f76d3c] text-white  z-50 font-light py-2 px-4 focus:outline-none hover:bg-white hover:text-black active:scale-90 duration-200  rounded-full text-lg mb-10  '>View All Products</button>
        </Link>

      </div>




    </div>
  );
}

export default Appetizers;
