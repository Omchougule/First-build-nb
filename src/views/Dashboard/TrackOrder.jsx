import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { auth } from '../../views/Login/config'
import toast from 'react-hot-toast'


const TrackOrder = () => {
    const [orderSummary, setOrderSummary] = useState(null);

    useEffect(() => {
        const storedOrderSummary = JSON.parse(localStorage.getItem('orderSummary')) || null;
        setOrderSummary(storedOrderSummary);
    }, []);

    const clearOrderSummaryAndNavigate = () => {
        const isConfirmed = window.confirm('Are you sure you want to clear the order summary?');
        if (isConfirmed) {
            localStorage.removeItem('orderSummary');
            // Navigate to the dashboard
            window.location.href = '/dashboard';
            toast.success('Order summary canceled successfully');
        }
    };

    if (!orderSummary) {
        return (
            <>
                <div className='md:bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/breadcrumb_bc57e145-dc2e-410c-9c11-4c22d1a357eb.png?v=1655187284")] bg-inherit bg-no-repeat bg-cover  flex flex-col justify-between items-center'>
                    <Navbar />
                    <h1 className='font-hand text-5xl py-10 mt-2 text-orange-400'>Track Your Order</h1>
                </div>
                <section className="bg-white py-8 antialiased light:bg-gray-900 md:py-16">
                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        <h2 className="text-xl font-semibold text-gray-900 light:text-white sm:text-2xl">Track the delivery of order #957684673</h2>
                        <p className="mt-4 text-lg font-medium text-gray-900 light:text-white">No order details found!</p>
                    </div>
                </section>
            </>
        );
    }

    const { cartItems, originalPrice, storePickup, tax, finalTotal } = orderSummary;

    return (
        <>
            <>
                <div className='
       md:bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/breadcrumb_bc57e145-dc2e-410c-9c11-4c22d1a357eb.png?v=1655187284")] 
      bg-inherit bg-no-repeat bg-cover  flex flex-col justify-between items-center
      '>

                    <Navbar />

                    <h1 className='font-hand text-5xl py-10 mt-2 text-orange-400'>Track Your Order</h1>

                    {/* <button className='text-white bg-transparent z-50 border py-2 px- w-32 focus:outline-none hover:bg-white hover:text-black active:scale-90 duration-200  rounded-full text-lg mb-10 -translate-y-20'>Shop Now</button> */}

                </div>

                {/* <div className='font-hand'>TrackOrder</div> */}

                <section className="bg-white py-8 antialiased light:bg-gray-900 md:py-16">
                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        <h2 className="text-xl font-semibold text-gray-900 light:text-white sm:text-2xl">Track the delivery of order #957684673</h2>

                        <div className="mt-6 sm:mt-8 lg:flex lg:gap-8">
                            <div className="w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 light:divide-gray-700 light:border-gray-700 lg:max-w-xl xl:max-w-2xl">

                                {cartItems && cartItems.map((product, index) => (
                                    <>

                                        <div className="space-y-4 p-6 ">
                                            <div className="flex items-center gap-6">
                                                <a href="#" className="h-14 w-14 shrink-0">
                                                    <img className="h-full w-full light:hidden" src={product.imageUrl} alt="imac image" />
                                                    {/* <img className="hidden h-full w-full light:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-light.svg" alt="imac image" /> */}
                                                </a>

                                                <a href="#" className="min-w-0 flex-1 font-medium text-gray-900 hover:underline light:text-white"> {product.description} </a>
                                            </div>

                                            <div className="flex items-center justify-between gap-4">
                                                <p className="text-sm font-normal text-gray-500 light:text-gray-400"><span className="font-medium text-gray-900 light:text-white">Product ID:</span> {product.id}</p>

                                                <div className="flex items-center justify-end gap-4">
                                                    <p className="text-base font-normal text-gray-900 light:text-white">x{product.quantity}</p>

                                                    <p className="text-xl font-bold leading-tight text-gray-900 light:text-white">${product.price * product.quantity}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}





                                <div className="space-y-4 bg-gray-50 p-6 light:bg-gray-800">
                                    <div className="space-y-2">
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="font-normal text-gray-500 light:text-gray-400">Original price</dt>
                                            <dd className="font-medium text-gray-900 light:text-white">${originalPrice}</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="font-normal text-gray-500 light:text-gray-400">Savings</dt>
                                            <dd className="text-base font-medium text-green-500">-$00.00</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="font-normal text-gray-500 light:text-gray-400">Store Pickup</dt>
                                            <dd className="font-medium text-gray-900 light:text-white">${storePickup}</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="font-normal text-gray-500 light:text-gray-400">Tax</dt>
                                            <dd className="font-medium text-gray-900 light:text-white">${tax}</dd>
                                        </dl>
                                    </div>

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 light:border-gray-700">
                                        <dt className="text-lg font-bold text-gray-900 light:text-white">Total</dt>
                                        <dd className="text-lg font-bold text-gray-900 light:text-white">${finalTotal}</dd>
                                    </dl>
                                </div>
                            </div>

                            <div className="mt-6 grow sm:mt-8 lg:mt-0">
                                <div className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm light:border-gray-700 light:bg-gray-800">
                                    <h3 className="text-xl font-semibold text-gray-900 light:text-white">Order history</h3>

                                    <ol className="relative ms-3 border-s border-gray-200 light:border-gray-700">
                                        <li className="mb-10 ms-6">
                                            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white light:bg-gray-700 light:ring-gray-800">
                                                <svg className="h-4 w-4 text-gray-500 light:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                                                </svg>
                                            </span>
                                            <h4 className="mb-0.5 text-base font-semibold text-gray-900 light:text-white">Estimated delivery in 24 Nov 2023</h4>
                                            <p className="text-sm font-normal text-gray-500 light:text-gray-400">Products delivered</p>
                                        </li>

                                        <li className="mb-10 ms-6">
                                            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white light:bg-gray-700 light:ring-gray-800">
                                                <svg className="h-4 w-4 text-gray-500 light:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                                                </svg>
                                            </span>
                                            <h4 className="mb-0.5 text-base font-semibold text-gray-900 light:text-white">Today</h4>
                                            <p className="text-sm font-normal text-gray-500 light:text-gray-400">Products being delivered</p>
                                        </li>

                                        <li className="mb-10 ms-6 text-green-700 light:text-green-500">
                                            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 ring-8 ring-white light:bg-green-900 light:ring-gray-800">
                                                <svg className="h-4 w-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                                </svg>
                                            </span>
                                            <h4 className="mb-0.5 font-semibold">23 Nov 2023, 15:15</h4>
                                            <p className="text-sm">Products in the courier's warehouse</p>
                                        </li>

                                        <li className="mb-10 ms-6 text-green-700 light:text-green-500">
                                            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 ring-8 ring-white light:bg-green-900 light:ring-gray-800">
                                                <svg className="h-4 w-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                                </svg>
                                            </span>
                                            <h4 className="mb-0.5 text-base font-semibold">22 Nov 2023, 12:27</h4>
                                            <p className="text-sm">Products delivered to the courier - DHL Express</p>
                                        </li>

                                        <li className="mb-10 ms-6 text-green-700 light:text-green-500">
                                            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 ring-8 ring-white light:bg-green-900 light:ring-gray-800">
                                                <svg className="h-4 w-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                                </svg>
                                            </span>
                                            <h4 className="mb-0.5 font-semibold">19 Nov 2023, 10:47</h4>
                                            <p className="text-sm">Payment accepted - VISA Credit Card</p>
                                        </li>

                                        <li className="ms-6 text-green-700 light:text-green-500">
                                            <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 ring-8 ring-white light:bg-green-900 light:ring-gray-800">
                                                <svg className="h-4 w-4 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                                                </svg>
                                            </span>
                                            <div>
                                                <h4 className="mb-0.5 font-semibold">19 Nov 2023, 10:45</h4>
                                                <a href="#" className="text-sm font-medium hover:underline">Order placed - Receipt #647563</a>
                                            </div>
                                        </li>
                                    </ol>

                                    <div className="gap-4 sm:flex sm:items-center">
                                        <button type="button" onClick={clearOrderSummaryAndNavigate} className="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 light:border-gray-600 light:bg-gray-800 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-white light:focus:ring-gray-700">Cancel the order</button>

                                        <a href="#" className="mt-4 flex w-full items-center justify-center rounded-lg bg-green-700  px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300  light:bg-green-600 light:hover:bg-green-700 light:focus:ring-green-800 sm:mt-0">Order details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </>
        </>
    );
};

export default TrackOrder;
