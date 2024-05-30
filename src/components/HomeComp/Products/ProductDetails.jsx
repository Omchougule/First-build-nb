import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from './productsConfig';
import Navbar from '../../Navbar/Navbar';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-10 text-gray-800">Product not found</div>;
  }

  return (
    <>
    <Navbar/>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
          <img className="h-96 mb-10 object-cover object-center rounded animate-fade-down" alt="hero" src={product.imageUrl} />
          <div className="text-center lg:w-2/3 animate-fade-up w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium  text-gray-900">{product.title}</h1>
            <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
            <div className="flex justify-center">
              <Link to={`/reciept/${id}`}> 
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Buy Now</button>
              </Link>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Add To Wishlist</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
