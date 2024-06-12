import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from './productsConfig';

export default function Products() {
  return (
    <div className='my-10 text-center'>
      <h1 className='text-3xl font-bold mb-10'  >Our Products</h1>
      <div className='mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6' data-aos="fade-up">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            productId={product.id} 
          />
        ))}
      </div>
    </div>
  );
}
