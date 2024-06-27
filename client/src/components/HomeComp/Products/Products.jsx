import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import axios from 'axios';
import { useUserContext } from '../../../context/Authcontext';
// import products from './productsConfig';


export default function Products() {
  const { products } = useUserContext();
  const [category, setCategory] = useState('all')
  const [pro, setPro] = useState([])
  // const [products, setProducts] = useState([]);
  // useEffect(()=>{
  //   axios.get('http://localhost:5000/getproducts')
  //     .then((res) => {
  //       // console.log(res.data);
  //       setProducts(res.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  // },[])
  useEffect(() => {
    setPro(products)
  }, [products])

  const selectcat = (e) => {
    setCategory(e.target.id)
    if (e.target.id == 'all') {
      setPro(products)
      return
    }
    const filarray = products.filter((product) => product.category === e.target.id)
    setPro(filarray)
  }

  return (
    <div className='my-10 text-center'>
      <h1 className='text-3xl font-bold mb-10'  >Our Products</h1>
      <div className="flex justify-center mt-10">
        <ul className="flex space-x-4 bg-white p-4 rounded-lg mb-10">
          <li onClick={selectcat} id="all" className={`px-6 py-3 cursor-pointer rounded-full border-green-500 border transition duration-300 ${category === 'all' ? 'bg-green-500 text-white border-green-500' : 'bg-gray-100 text-gray-800 hover:bg-green-100 hover:text-green-500 active:scale-75 duration-500 '}`}>
            All
          </li>
          <li onClick={selectcat} id="Smoothie" className={`px-6 py-3 cursor-pointer rounded-full border-green-500 border transition duration-300 ${category === 'Smoothie' ? 'bg-green-500 text-white border-green-500' : 'bg-gray-100 text-gray-800 hover:bg-green-100 hover:text-green-500 active:scale-75 duration-500'}`}>
            Smoothie
          </li>
          <li onClick={selectcat} id="Shakes" className={`px-6 py-3 cursor-pointer rounded-full border-green-500 border transition duration-300 ${category === 'Shakes' ? 'bg-green-500 text-white border-green-500' : 'bg-gray-100 text-gray-800 hover:bg-green-100 hover:text-green-500 active:scale-75 duration-500'}`}>
            Shakes
          </li>
          <li onClick={selectcat} id="Appetizer" className={`px-6 py-3 cursor-pointer rounded-full border-green-500 border transition duration-300 ${category === 'Appetizer' ? 'bg-green-500 text-white border-green-500' : 'bg-gray-100 text-gray-800 hover:bg-green-100 hover:text-green-500 active:scale-75 duration-500'}`}>
            Appetizer
          </li>
          <li onClick={selectcat} id="Meals" className={`px-6 py-3 cursor-pointer rounded-full border-green-500 border transition duration-300 ${category === 'Meals' ? 'bg-green-500 text-white border-green-500' : 'bg-gray-100 text-gray-800 hover:bg-green-100 hover:text-green-500 active:scale-75 duration-500'}`}>
            Meals
          </li>
        </ul>
      </div>

      {pro &&
        <div className='mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6' data-aos="fade-up">
          {pro.map((product) => (
            <ProductCard
              key={product._id}
              imageUrl={product.imageUrl}
              title={product.title}
              description={product.description}
              productId={product._id}
            />
          ))}
        </div>

      }
    </div>
  );
}
