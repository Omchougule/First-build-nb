import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import axios from 'axios';
import { useUserContext } from '../../../context/Authcontext';
// import products from './productsConfig';


export default function Products() {
  const { products} = useUserContext();
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
    if(e.target.id == 'all')
    {
      setPro(products)
      return
    }
    const filarray = products.filter((product) => product.category === e.target.id)
    setPro(filarray)
  }

  return (
    <div className='my-10 text-center'>
      <h1 className='text-3xl font-bold mb-10'  >Our Products</h1>
      <div>
        <ul className='flex justify-between mx-20 my-10'>
          <li onClick={selectcat} id='all' className={`px-4 py-2 cursor-pointer border-2 border-black rounded-lg ${category === 'all' ? 'border-4 border-blue-500' : ''
            }`}>All</li>
          <li onClick={selectcat} id='Smoothie' className={`px-4 py-2 cursor-pointer border-2 border-black rounded-lg ${category === 'Smoothie' ? 'border-4 border-blue-500' : ''
            }`}>Smoothie</li>
          <li onClick={selectcat} id='Appetizer' className={`px-4 py-2 cursor-pointer border-2 border-black rounded-lg ${category === 'Appetizer' ? 'border-4 border-blue-500' : ''
            }`}>Appetizer</li>
          <li onClick={selectcat} id='Meals' className={`px-4 py-2 cursor-pointer border-2 border-black rounded-lg ${category === 'Meals' ? 'border-4 border-blue-500' : ''
            }`}>Meals</li>
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
