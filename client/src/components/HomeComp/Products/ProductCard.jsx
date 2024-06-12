import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ imageUrl, title, description, productId, idx }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden"
    // data-aos="fade-up"
    // data-aos-delay={`${500 + idx * 400}`}
    >
      <Link to={`/product/${productId}`}>
        <img
          className="w-full h-96 object-cover object-center grayscale hover:grayscale-0 transition duration-300 transform hover:scale-105"
          src={imageUrl}
          alt={title}
        />
      </Link>
      <div className="p-5">
        <Link to={`/product/${productId}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <Link
          to={`/product/${productId}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
