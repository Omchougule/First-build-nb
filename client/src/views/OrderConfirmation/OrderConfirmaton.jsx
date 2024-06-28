import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useUserContext } from '../../context/Authcontext';

const OrderConfirmation = () => {
    const {address} = useUserContext()
    const {id} = useParams()
    const [paymentMethod, setPaymentMethod] = useState('Online');
    const [selectedAddress, setSelectedAddress] = useState({
        name: '',
        address: '',
        phone: ''
    });

    useEffect(() => {
        setSelectedAddress(address);
    }, []);



    // const getPaymentMethodDescription = useMemo(() => {
    //     return (method) => {
    //         switch (method) {
    //             case 'credit-card':
    //                 return 'Credit Card';
    //             case 'pay-on-delivery':
    //                 return 'Payment on Delivery';
    //             default:
    //                 return 'No payment method selected';
    //         }
    //     };
    // }, []);


    const randomId = Math.random().toString(16).substring(2, 8) + Math.random().toString(16).substring(2, 8);
    localStorage.setItem('randomId', randomId);
    const storedRandomId = localStorage.getItem('randomId') || randomId;




    const today = new Date();
    const todayDate = today.toISOString().slice(0, 10);

    localStorage.setItem('todayDate', todayDate);


    const add = selectedAddress.gym_name 
    // + ', ' + selectedAddress.city + ', ' + selectedAddress.country;

    return (
        <>
            <section className="bg-white py-8 antialiased light:bg-gray-900 md:py-16">
                <div className="mx-auto max-w-2xl px-4 2xl:px-0">
                    <h2 className="text-xl font-semibold text-gray-900 light:text-white sm:text-2xl mb-2">Thanks for your order!</h2>
                    <p className="text-gray-500 light:text-gray-400 mb-6 md:mb-8">
                        Your order <a href="#" className="font-medium text-gray-900 light:text-white hover:underline">#{id}</a> will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.
                    </p>
                    <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 light:border-gray-700 light:bg-gray-800 mb-6 md:mb-8">
                        <dl className="sm:flex items-center justify-between gap-4">
                            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 light:text-gray-400">Date</dt>
                            <dd className="font-medium text-gray-900 light:text-white sm:text-end">{todayDate}</dd>
                        </dl>
                        <dl className="sm:flex items-center justify-between gap-4">
                            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 light:text-gray-400">Payment Method</dt>
                            <dd className="font-medium text-gray-900 light:text-white sm:text-end">{paymentMethod}</dd>
                        </dl>
                        <dl className="sm:flex items-center justify-between gap-4">
                            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 light:text-gray-400">Name</dt>
                            <dd className="font-medium text-gray-900 light:text-white sm:text-end">{selectedAddress.your_name}</dd>
                        </dl>
                        <dl className="sm:flex items-center justify-between gap-4">
                            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 light:text-gray-400">Address</dt>
                            <dd className="font-medium text-gray-900 light:text-white sm:text-end">{add}</dd>
                        </dl>
                        <dl className="sm:flex items-center justify-between gap-4">
                            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 light:text-gray-400">Phone</dt>
                            <dd className="font-medium text-gray-900 light:text-white sm:text-end">{selectedAddress.phone}</dd>
                        </dl>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to={`/orders/trackorder/${id}`} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 light:bg-green-600 light:hover:bg-green-700 focus:outline-none light:focus:ring-green-800">Track your order</Link>
                        <a href="/products" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-100 light:focus:ring-gray-700 light:bg-gray-800 light:text-gray-400 light:border-gray-600 light:hover:text-white light:hover:bg-gray-700">Return to shopping</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default OrderConfirmation;
