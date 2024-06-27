import React, { useEffect, useState } from 'react';
import PinkTop from '../../../assets/pink_top.svg';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../../context/Authcontext';

// const smoothiesConfig = [
//     { name: 'Berry Blast', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ioUI7dO2ZEDWUDCzsUkLYAG-Kv1uUYwMPA&s' },
//     { name: 'Tropical Paradise', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ioUI7dO2ZEDWUDCzsUkLYAG-Kv1uUYwMPA&s' },
//     { name: 'Green Machine', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ioUI7dO2ZEDWUDCzsUkLYAG-Kv1uUYwMPA&s' },
//     { name: 'Citrus Sunshine', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ioUI7dO2ZEDWUDCzsUkLYAG-Kv1uUYwMPA&s' },
// ];

const SmoothieItem = ({id, index, name, image }) => (
    <Link to={`/product/${id}`}>
        <div className='space-y-6' data-aos={index < 2 ? "fade-right" : "fade-left"}>
            <div
                className='bg-yellow-400  flex justify-center items-center rounded-md shadow-lg space-x-5'

            >
                <div className="bg-white hover:bg-[#5a2f96] duration-150 h-80 w-56 ease-in-out shadow-lg  rounded-md flex flex-col justify-center items-center overflow-hidden">
                    <img src={image} alt={name} className="h-full w-full object-cover hover:scale-110 transition duration-500" />
                    {/* <h2 className="text-lg font-semibold">{name}</h2> */}
                </div>

            </div>

            <h1 className='font-hand text-3xl text-center'>{name}</h1>

        </div>
    </Link>
);

const Smoothies = () => {

    const { products } = useUserContext()
    const [smoothiesConfig, setSmoothiesConfig] = useState([])
    useEffect(() => {
        setSmoothiesConfig(products.filter((product) => product.category == 'Smoothie').slice(0, 4))
    }, [products])

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
                    {smoothiesConfig.map((smoothie, index) => (
                        <SmoothieItem
                            key={index}
                            index={index}
                            name={smoothie.title}
                            image={smoothie.imageUrl}
                            id={smoothie._id}
                        />
                    ))}
                </div>

                <Link to='/products'>
                    <button className='mt-10 bg-[#ffc935] text-black  z-50 font-light py-2 px-4 focus:outline-none hover:bg-white hover:text-black active:scale-90 duration-200  rounded-full text-lg mb-10  '>View All Products</button>
                </Link>

            </div>

        </div>
    );
}

export default Smoothies;
