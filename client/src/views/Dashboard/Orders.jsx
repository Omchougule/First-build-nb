import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../context/Authcontext';
import axios from 'axios';
import toast from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Orders = () => {
    const { user } = useUserContext();
    const [orders, setOrders] = useState([]);

    const fetch_orders = async () => {
        const res = await axios.post('http://localhost:5000/getorders', { userId: user.id });
        if (res.data.success) {
            // Sort orders by date in descending order (newest first)
            const sortedOrders = res.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
            setOrders(sortedOrders);
        }
    };

    useEffect(() => {
        fetch_orders();
    }, []);

    const Cancelorder = (orderID) => {
        confirmAlert({
            title: 'Confirm to cancel',
            message: 'Do you really want to cancel the order? This action cannot be reversed!',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        if (user.id) {
                            console.log(user.id, orderID);
                            const res = await axios.post('http://localhost:5000/cancelorder', { userId: user.id, orderID });
                            if (res.data.success) {
                                toast.success("Order cancelled successfully!");
                                fetch_orders();
                            } else {
                                toast.error('Something went wrong!');
                            }
                        } else {
                            toast.error('Something went wrong!');
                        }
                    },
                    className: 'text-red-700 hover:bg-red-700 hover:text-white'
                },
                {
                    label: 'No',
                    onClick: () => {},
                    className: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }
            ],
            closeOnEscape: true,
            closeOnClickOutside: true,
            overlayClassName: "overlay-custom-class"
        });
    };

    return (
        <div className='overflow-y-auto'>
            <section className="bg-white py-8 antialiased light:bg-gray-900 md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mx-auto max-w-5xl">
                        <div className="gap-4 sm:flex sm:items-center sm:justify-between">
                            <h2 className="font-hand text-gray-900 light:text-white text-5xl">My orders</h2>
                        </div>
                        <div className="mt-6 flow-root sm:mt-8">
                            <div className="divide-y divide-gray-200 light:divide-gray-700">
                                {orders && orders.map((product, index) => (
                                    <div key={index} className="flex flex-wrap items-center gap-y-4 py-6">
                                        <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt className="text-base font-medium text-gray-500">Order ID:</dt>
                                            <dd className="mt-1.5 text-base font-semibold text-gray-900">
                                                <a href="#" className="hover:underline">{`#${product.orderId}`}</a>
                                            </dd>
                                        </dl>
                                        <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt className="text-base font-medium text-gray-500">Date:</dt>
                                            <dd className="mt-1.5 text-base font-semibold text-gray-900">{product.date.slice(0, 10)}</dd>
                                        </dl>
                                        <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt className="text-base font-medium text-gray-500">Price:</dt>
                                            <dd className="mt-1.5 text-base font-semibold text-gray-900">{` ₹ ${product.paymentAmount}`}</dd>
                                        </dl>
                                        <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                            <dt className="text-base font-medium text-gray-500">Status:</dt>
                                            <dd className={`me-2 mt-1.5 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium ${product.status === "Delivered" || product.status === "In Transit" ? "bg-green-100 text-green-800" : (product.status === "Cancelled" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800")}`}>
                                                {product.status === "Processing" && (
                                                    <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                                                    </svg>
                                                )}
                                                {product.status === "Cancelled" && (
                                                    <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                )}
                                                {product.status === "In Transit" && (
                                                    <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21h6a2 2 0 0 0 2-2v-6H7v6a2 2 0 0 0 2 2zM3 13h2v-2H3v2zm16 0h2v-2h-2v2z" />
                                                    </svg>
                                                )}
                                                {product.status === "Shipped" && (
                                                    <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 3h20v13H2zM8 21h8v-3H8z" />
                                                    </svg>
                                                )}
                                                {product.status === "Delivered" && (
                                                    <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7" />
                                                    </svg>
                                                )}
                                                {product.status}
                                            </dd>
                                        </dl>
                                        <div className="w-full grid sm:grid-cols-2 lg:w-64 lg:items-center lg:justify-end gap-4">
                                            {product.status !== "Cancelled" && (
                                                <button onClick={() => Cancelorder(product.orderId)} type="button" className="w-full rounded-lg border border-red-700 text-red-700 px-3 py-2 text-sm font-medium hover:bg-red-700 hover:text-white active:scale-90 focus:outline-none focus:ring-4">
                                                    Cancel order
                                                </button>
                                            )}
                                            <a href={`/orders/trackorder/${product.orderId}`} className="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100">
                                                Track Order
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Orders;
