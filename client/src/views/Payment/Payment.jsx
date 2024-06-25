import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUserContext } from '../../context/Authcontext';
import toast from 'react-hot-toast';


const Payment = () => {
    const { user, products, order, summary, address } = useUserContext()
    const [orderSummary, setOrderSummary] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    const [selectedAddress, setSelectedAddress] = useState({
        name: '',
        address: '',
        phone: ''
    });
    
    let arr = []
    const navigate = useNavigate()
    
    useEffect(() => {
        // const storedOrderSummary = JSON.parse(localStorage.getItem('orderSummary')) || null;
        // const storedSelectedAddress = JSON.parse(localStorage.getItem('selectedAddress')) || {};
        setSelectedAddress(address);

        setOrderSummary(summary);
        if(order.length == 0 )
        {
            navigate('/cart')
        }

        

    }, []);
    console.log(address);
    const handleorder = async () => {
        const randomId = Math.random().toString(16).substring(2, 8) + Math.random().toString(16).substring(2, 8);
        const address = selectedAddress.gym_name + ', ' + selectedAddress.city + ', ' + selectedAddress.country;

        order.forEach((item)=>{
            products.forEach((product)=>{
                if(item.proId == product._id)
                {
                    arr.push({
                        productId : product._id,
                        productName : product.title,
                        productPrice : product.price,
                        quantity : item.quantity,
                        image : product.imageUrl
                        // total : product.price * item.quantity,
                    })
                }
            })
        })

        const res = await axios.post('http://localhost:5000/addorder',{
            userId : user.id,
            orderId : randomId,
            userName : selectedAddress.your_name,
            address : address,
            phoneNumber : selectedAddress.phone,
            paymentMethod : paymentMethod,
            date : new Date(),
            paymentAmmount : summary.finalTotal,
            order : arr,
            summary : orderSummary,
            status : 'Processing'
        })
        if(res.data.success)
        {
            toast.success("Success !")    
            navigate(`/cart/checkout/payment/confirmation/${randomId}`)
        }
        else
        {
            toast.error("Something went wrong !")
        }
    }
    
    const updateOrderSummary = () => {

    }

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('paymentMethod', paymentMethod);
    };

    return (
        <>
            <div className='
                md:bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/breadcrumb_bc57e145-dc2e-410c-9c11-4c22d1a357eb.png?v=1655187284")] 
                bg-inherit bg-no-repeat bg-cover flex flex-col justify-between items-center
            '>
                <Navbar />
                <h1 className='font-hand text-5xl py-36 mt-2 text-orange-400'>Payment</h1>
            </div>

            <div className='mx-auto max-w-screen-xl px-4 2xl:px-0 pb-20'>
                <div className="mx-auto max-w-5xl">
                    <h3 className="text-xl font-semibold text-gray-900 light:text-white my-5">Payment</h3>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="rounded-lg border shadow-md border-gray-200 bg-gray-50 p-4 ps-4 light:border-gray-700 light:bg-gray-800">
                            <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                    <input
                                        id="credit-card"
                                        aria-describedby="credit-card-text"
                                        type="radio"
                                        name="payment-method"
                                        value="credit-card"
                                        className="h-4 w-4 border-gray-300 bg-white text-green-600 focus:ring-2 focus:ring-green-600 light:border-gray-600 light:bg-gray-700 light:ring-offset-gray-800 light:focus:ring-green-600"
                                        checked={paymentMethod === 'credit-card'}
                                        onChange={handlePaymentMethodChange}
                                    />
                                </div>
                                <div className="ms-4 text-sm">
                                    <label
                                        htmlFor="credit-card"
                                        className="font-medium leading-none text-gray-900 light:text-white"
                                    >
                                        Credit Card
                                    </label>
                                    <p
                                        id="credit-card-text"
                                        className="mt-1 text-xs font-normal text-gray-500 light:text-gray-400"
                                    >
                                        Pay with your credit card
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg border shadow-md border-gray-200 bg-gray-50 p-4 ps-4 light:border-gray-700 light:bg-gray-800">
                            <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                    <input
                                        id="pay-on-delivery"
                                        aria-describedby="pay-on-delivery-text"
                                        type="radio"
                                        name="payment-method"
                                        value="pay-on-delivery"
                                        className="h-4 w-4 border-gray-300 bg-white text-green-600 focus:ring-2 focus:ring-green-600 light:border-gray-600 light:bg-gray-700 light:ring-offset-gray-800 light:focus:ring-green-600"
                                        checked={paymentMethod === 'pay-on-delivery'}
                                        onChange={handlePaymentMethodChange}
                                    />
                                </div>
                                <div className="ms-4 text-sm">
                                    <label
                                        htmlFor="pay-on-delivery"
                                        className="font-medium leading-none text-gray-900 light:text-white"
                                    >
                                        Payment on delivery
                                    </label>
                                    <p
                                        id="pay-on-delivery-text"
                                        className="mt-1 text-xs font-normal text-gray-500 light:text-gray-400"
                                    >
                                        +$15 payment processing fee
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {paymentMethod === 'credit-card' && (
                            <form onSubmit={handleSubmit} action="#" className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-md light:border-gray-700 light:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8">
                                <div className="mb-6 grid grid-cols-2 gap-4">
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="full_name" className="mb-2 block text-sm font-medium text-gray-900 light:text-white"> Full name (as displayed on card)* </label>
                                        <input type="text" id="full_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder-gray-400 light:focus:border-green-500 light:focus:ring-green-500" placeholder="Bonnie Green" required />
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="card-number-input" className="mb-2 block text-sm font-medium text-gray-900 light:text-white"> Card number* </label>
                                        <input type="text" id="card-number-input" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder-gray-400 light:focus:border-green-500 light:focus:ring-green-500" placeholder="xxxx-xxxx-xxxx-xxxx" required />
                                    </div>
                                    <div>
                                        <label htmlFor="card-expiration-input" className="mb-2 block text-sm font-medium text-gray-900 light:text-white">Card expiration* </label>
                                        <div className="relative">
                                            <input type="text" id="card-expiration-input" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder-gray-400 light:focus:border-green-500 light:focus:ring-green-500" placeholder="12/23" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="cvv-input" className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 light:text-white">
                                            CVV*
                                            <button data-tooltip-target="cvv-desc" data-tooltip-trigger="hover" className="text-gray-400 hover:text-gray-900 light:text-gray-500 light:hover:text-white">
                                                <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                            <div id="cvv-desc" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 light:bg-gray-700">
                                                The last 3 digits on back of card
                                                <div className="tooltip-arrow" data-popper-arrow></div>
                                            </div>
                                        </label>
                                        <input type="password" id="cvv-input" aria-describedby="helper-text-explanation" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder-gray-400 light:focus:border-green-500 light:focus:ring-green-500" placeholder="•••" required />
                                    </div>
                                </div>
                                <button type="submit" className="w-full rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 light:bg-green-600 light:hover:bg-green-700 light:focus:ring-green-800 sm:w-auto">
                                    Confirm Your Payment Method
                                </button>
                            </form>
                        )}

                        {paymentMethod === 'pay-on-delivery' && (
                            <div className="flex justify-center items-center mt-6">

                                <button onClick={handleSubmit} className="w-full h-10 rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 light:bg-green-600 light:hover:bg-green-700 light:focus:ring-green-800 sm:w-auto">
                                    Confirm Your Payment Method
                                </button>

                            </div>
                        )}



                        <div className="mt-6 grow sm:mt-8 lg:mt-0 shadow-md rounded-lg border">
                            <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 light:border-gray-700 light:bg-gray-800 ">
                                {orderSummary && (
                                    <>
                                        <div className="space-y-2">
                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 light:text-gray-400">Original price</dt>
                                                <dd className="text-base font-medium text-gray-900 light:text-white">${orderSummary.originalPrice.toFixed(2)}</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 light:text-gray-400">Savings</dt>
                                                <dd className="text-base font-medium text-green-500">{orderSummary.discountedAmmount}</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 light:text-gray-400">Store Pickup</dt>
                                                <dd className="text-base font-medium text-gray-900 light:text-white">${orderSummary.storePickup.toFixed(2)}</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 light:text-gray-400">Tax</dt>
                                                <dd className="text-base font-medium text-gray-900 light:text-white">${orderSummary.tax.toFixed(2)}</dd>
                                            </dl>
                                        </div>

                                        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 light:border-gray-700">
                                            <dt className="text-base font-bold text-gray-900 light:text-white">Total</dt>
                                            <dd className="text-base font-bold text-gray-900 light:text-white">${orderSummary.finalTotal.toFixed(2)}</dd>
                                        </dl>
                                    </>
                                )}
                            </div>

                            <div className="mt-6 flex items-center justify-center gap-8">
                                <img className="h-8 w-auto light:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg" alt="" />
                                <img className="hidden h-8 w-auto light:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-light.svg" alt="" />
                                <img className="h-8 w-auto light:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="" />
                                <img className="hidden h-8 w-auto light:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-light.svg" alt="" />
                                <img className="h-8 w-auto light:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="" />
                                <img className="hidden h-8 w-auto light:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-light.svg" alt="" />
                            </div>

                        </div>

                        <div className="flex justify-center mt-6">
                                <button onClick={handleorder} className="w-full rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 light:bg-green-600 light:hover:bg-green-700 light:focus:ring-green-800 sm:w-auto">
                                    Place Your Order
                                </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Payment;
