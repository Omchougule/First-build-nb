import React, { useEffect, useState } from 'react';
import { auth } from '../../views/Login/config';
// import Order from './Order';


const Order = ({ orderID, date, price, status }) => {



    return (
        <div className="flex flex-wrap items-center gap-y-4 py-6">
            <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt className="text-base font-medium text-gray-500 light:text-gray-400">Order ID:</dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 light:text-white">
                    <a href="#" className="hover:underline">{orderID}</a>
                </dd>
            </dl>

            <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt className="text-base font-medium text-gray-500 light:text-gray-400">Date:</dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 light:text-white">{date}</dd>
            </dl>

            <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt className="text-base font-medium text-gray-500 light:text-gray-400">Price:</dt>
                <dd className="mt-1.5 text-base font-semibold text-gray-900 light:text-white">{price}</dd>
            </dl>

            <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                <dt className="text-base font-medium text-gray-500 light:text-gray-400">Status:</dt>
                <dd className={`me-2 mt-1.5 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium ${status === "Confirmed" || status === "Pre-order" ? "bg-green-100 text-green-800" : (status === "Cancelled" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800")}`}>
                    {/* Status Icon */}
                    {status === "Confirmed" && (
                        <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5" />
                        </svg>
                    )}
                    {status === "Cancelled" && (
                        <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6 18 18" />
                        </svg>
                    )}
                    {status === "Out For Delivery" && (
                        <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                        </svg>
                    )}
                    {status === "Pre-order" && (
                        <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z" />
                        </svg>

                    )}
                    {/* Status Text */}
                    {status}
                </dd>
            </dl>

            <div className="w-full grid sm:grid-cols-2  lg:w-64 lg:items-center lg:justify-end gap-4">
                <button type="button" className={`w-full rounded-lg ${status === "Confirmed" || status === "Cancelled" ? "bg-green-700 text-white" : "border border-red-700 text-red-700"} px-3 py-2 text-sm font-medium hover:bg-red-700 hover:text-white active:scale-90 focus:outline-none focus:ring-4 ${status === "Confirmed" ? "focus:ring-green-300" : "focus:ring-red-300"}`}>
                    {status === "Confirmed" || status === "Cancelled" ? "Order again" : "Cancel order"}
                </button>
                <a href="/orders/trackorder" className="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 light:border-gray-600 light:bg-gray-800 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-white light:focus:ring-gray-700 lg:w-auto">Track Order</a>
            </div>
        </div>
    );
};




const Orders = () => {



    const [orderSummary, setOrderSummary] = useState({
        cartItems: [],
        originalPrice: 0,
        storePickup: false,
        tax: 0,
        finalTotal: 0
    });

    useEffect(() => {
        const storedOrderSummary = JSON.parse(localStorage.getItem('orderSummary')) || null;
        setOrderSummary(storedOrderSummary);
    }, []);

    const { cartItems, originalPrice, storePickup, tax, finalTotal } = orderSummary;

    const proId = localStorage.getItem('randomId');

    const date = localStorage.getItem('todayDate');






    if (!auth.currentUser) {
        return <div className="text-center text-5xl font-hand md:-translate-x-28 items-center text-gray-500">User information is not available.</div>;
    }

    return (
        <div className='overflow-y-auto '  >

            <h1>Orders</h1>

            <section className="bg-white py-8 antialiased light:bg-gray-900 md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mx-auto max-w-5xl">
                        <div className="gap-4 sm:flex sm:items-center sm:justify-between">
                            <h2 className="  font-hand text-gray-900 light:text-white text-5xl">My orders</h2>

                            {/* Dropdowns for filtering orders */}
                        </div>

                        <div className="mt-6 flow-root sm:mt-8">
                            <div className="divide-y divide-gray-200 light:divide-gray-700">
                                {/* Orders */}


                                {/* {cartItems && cartItems.map((product, index) => (
                                    <>

                                        <Order
                                            orderID={product.id}
                                            date="20.12.2023"
                                            price={finalTotal}
                                            status="Pre-order"
                                        />
                                    </>

                                ))} */}

                                <Order
                                    orderID={"#" + proId}
                                    date={date}
                                    price={"$" + finalTotal}
                                    status="Out For Delivery"
                                />




                                <Order
                                    orderID="#FWB127364372"
                                    date="20.12.2023"
                                    price="$4,756"
                                    status="Pre-order"
                                />

                                <Order
                                    orderID="#FWB125467980"
                                    date="11.12.2023"
                                    price="$499"
                                    status="Out For Delivery"
                                />

                                <Order
                                    orderID="#FWB139485607"
                                    date="08.12.2023"
                                    price="$85"
                                    status="Confirmed"
                                />

                                <Order
                                    orderID="#FWB146284623"
                                    date="26.09.2023"
                                    price="$180"
                                    status="Cancelled"
                                />

                                {/* Pagination */}
                            </div>
                        </div>

                        {/* Pagination */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Orders;
