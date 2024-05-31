import React from 'react'
import { Link } from 'react-router-dom'

const OrderConfirmaton = () => {
  return (
    <>

<section className="bg-white py-8 antialiased light:bg-gray-900 md:py-16">
  <div className="mx-auto max-w-2xl px-4 2xl:px-0">
      <h2 className="text-xl font-semibold text-gray-900 light:text-white sm:text-2xl mb-2">Thanks for your order!</h2>
      <p className="text-gray-500 light:text-gray-400 mb-6 md:mb-8">Your order <a href="#" className="font-medium text-gray-900 light:text-white hover:underline">#7564804</a> will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.</p>
      <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 light:border-gray-700 light:bg-gray-800 mb-6 md:mb-8">
          <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 light:text-gray-400">Date</dt>
              <dd className="font-medium text-gray-900 light:text-white sm:text-end">14 May 2024</dd>
          </dl>
          <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 light:text-gray-400">Payment Method</dt>
              <dd className="font-medium text-gray-900 light:text-white sm:text-end">JPMorgan monthly installments</dd>
          </dl>
          <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 light:text-gray-400">Name</dt>
              <dd className="font-medium text-gray-900 light:text-white sm:text-end">Flowbite Studios LLC</dd>
          </dl>
          <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 light:text-gray-400">Address</dt>
              <dd className="font-medium text-gray-900 light:text-white sm:text-end">34 Scott Street, San Francisco, California, USA</dd>
          </dl>
          <dl className="sm:flex items-center justify-between gap-4">
              <dt className="font-normal mb-1 sm:mb-0 text-gray-500 light:text-gray-400">Phone</dt>
              <dd className="font-medium text-gray-900 light:text-white sm:text-end">+(123) 456 7890</dd>
          </dl>
      </div>
      <div className="flex items-center space-x-4">
          <Link to="/orders/trackorder" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 light:bg-green-600 light:hover:bg-green-700 focus:outline-none light:focus:ring-green-800">Track your order</Link>
          <a href="/products" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-100 light:focus:ring-gray-700 light:bg-gray-800 light:text-gray-400 light:border-gray-600 light:hover:text-white light:hover:bg-gray-700">Return to shopping</a>
      </div>
  </div>
</section>
    
    
    </>
  )
}

export default OrderConfirmaton