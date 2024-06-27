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
        if (order.length == 0) {
            navigate('/cart')
        }



    }, []);
    const handleorder = async () => {
        const randomId = Math.random().toString(16).substring(2, 8) + Math.random().toString(16).substring(2, 8);
        const address = selectedAddress.gym_name + ', ' + selectedAddress.city + ', ' + selectedAddress.country;

        order.forEach((item) => {
            products.forEach((product) => {
                if (item.proId == product._id) {
                    arr.push({
                        productId: product._id,
                        productName: product.title,
                        productPrice: product.price,
                        quantity: item.quantity,
                        image: product.imageUrl
                        // total : product.price * item.quantity,
                    })
                }
            })
        })

        const res = await axios.post('http://localhost:5000/addorder', {
            userId: user.id,
            orderId: randomId,
            userName: selectedAddress.your_name,
            address: address,
            phoneNumber: selectedAddress.phone,
            paymentMethod: paymentMethod,
            date: new Date(),
            paymentAmmount: summary.finalTotal,
            order: arr,
            summary: orderSummary,
            status: 'Processing'
        })
        if (res.data.success) {
            toast.success("Success !")
            navigate(`/cart/checkout/payment/confirmation/${randomId}`)
        }
        else {
            toast.error("Something went wrong !")
        }
    }

    const updateOrderSummary = () => {

    }

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handlePayment = async () => {
        try {
            const randomId = Math.random().toString(16).substring(2, 8) + Math.random().toString(16).substring(2, 8);
            const address = selectedAddress.gym_name + ', ' + selectedAddress.city + ', ' + selectedAddress.country;

            order.forEach((item) => {
                products.forEach((product) => {
                    if (item.proId == product._id) {
                        arr.push({
                            productId: product._id,
                            productName: product.title,
                            productPrice: product.price,
                            quantity: item.quantity,
                            image: product.imageUrl
                            // total : product.price * item.quantity,
                        })
                    }
                })
            })
            const { data } = await axios.post('http://localhost:5000/paymentorder', {
                amount: summary.finalTotal,
                currency: 'INR',
                receipt: 'receipt#1',
                notes: {
                    key1: 'value3',
                    key2: 'value2'
                }
            });
            console.log(data);

            if (!data || !data.id) {
                throw new Error('Failed to create Razorpay order');
            }

            const options = {
                key: 'rzp_test_lq1pO46Zam0Zpz', // Enter the Key ID generated from the Dashboard
                amount: data.amount,
                currency: data.currency,
                name: 'Your Company Name',
                description: 'Test Transaction',
                order_id: data.id,
                handler: async function (response) {
                    console.log(response);
                    const res = await axios.post('http://localhost:5000/authpayment', {
                        ...response,
                        order_id: data.id,
                        amount: data.amount,
                        userId: user.id,
                        userName: selectedAddress.your_name,
                        address: address,
                        phoneNumber: selectedAddress.phone,
                        paymentMethod: paymentMethod,
                        order: arr,
                        summary: orderSummary,
                    })
                    if (res.data.success) {
                        toast.success("Success !")
                        navigate(`/cart/checkout/payment/confirmation/${res.data.orderId}`)
                    }
                    else {
                        toast.error("Something went wrong !")
                    }
                },
                prefill: {
                    name: 'Gaurav Kumar',
                    email: 'gaurav.kumar@example.com',
                    contact: '9999999999'
                },
                notes: {
                    address: 'Razorpay Corporate Office'
                },
                theme: {
                    color: '#F37254'
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error('Error opening Razorpay checkout:', error);
            alert('Oops! Something went wrong while opening Razorpay checkout.');
        }
    };

    return (
        <>
            <div className='
                md:bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/breadcrumb_bc57e145-dc2e-410c-9c11-4c22d1a357eb.png?v=1655187284")] 
                bg-inherit bg-no-repeat bg-cover flex flex-col justify-between items-center
            '>
                <Navbar />
                <h1 className='font-hand text-5xl py-32 mt-2 text-orange-400'>Payment</h1>
            </div>

            <div className='mx-auto max-w-screen-xl px-4 2xl:px-0 pb-20'>
                <div className="mx-auto max-w-5xl">
                    <h3 className="text-3xl  font-hand text-gray-900 light:text-white my-5">Pay To Proceed</h3>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="hidden rounded-lg border shadow-md border-gray-200 bg-gray-50 p-4 ps-4 light:border-gray-700 light:bg-gray-800">
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
                        {/* <div className="rounded-lg border shadow-md border-gray-200 bg-gray-50 p-4 ps-4 light:border-gray-700 light:bg-gray-800">
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
                                        onClick={() => setPaymentMethod('pay-on-delivery')}
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
                        </div> */}
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-4 justify-center items-center md:grid-cols-2">




                        <div className="mt-6 grow sm:mt-8 p-6 lg:mt-0 shadow-md rounded-lg border">
                            <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50  light:border-gray-700 light:bg-gray-800 ">
                                {orderSummary && (
                                    <>
                                        <div className="space-y-2">
                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 light:text-gray-400">Original price</dt>
                                                <dd className="text-base font-medium text-gray-900 light:text-white"> &#8377; {orderSummary.originalPrice.toFixed(2)}</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 light:text-gray-400">Savings</dt>
                                                <dd className="text-base font-medium text-green-500">- &#8377; {orderSummary.discountedAmmount}</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 light:text-gray-400">Store Pickup</dt>
                                                <dd className="text-base font-medium text-gray-900 light:text-white">&#8377; {orderSummary.storePickup.toFixed(2)}</dd>
                                            </dl>

                                            <dl className="flex items-center justify-between gap-4">
                                                <dt className="text-base font-normal text-gray-500 light:text-gray-400">Tax</dt>
                                                <dd className="text-base font-medium text-gray-900 light:text-white">&#8377; {orderSummary.tax.toFixed(2)}</dd>
                                            </dl>
                                        </div>

                                        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 light:border-gray-700">
                                            <dt className="text-base font-bold text-gray-900 light:text-white">Total</dt>
                                            <dd className="text-base font-bold text-gray-900 light:text-white">&#8377; {orderSummary.finalTotal.toFixed(2)}</dd>
                                        </dl>
                                    </>
                                )}
                            </div>

                            <div className="mt-6 flex items-center justify-center  gap-8">
                                <img className="h-6 w-auto light:hidden" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1280px-UPI-Logo-vector.svg.png" alt="" />
                                <img className="h-7 w-auto " src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="" />
                                <img className="hidden h-8 w-auto light:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-light.svg" alt="" />
                                <img className="h-8 w-auto light:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="" />
                                <img className="hidden h-8 w-auto light:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-light.svg" alt="" />
                                <img className="h-8 w-auto light:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="" />
                                <img className="hidden h-8 w-auto light:flex" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-light.svg" alt="" />
                            </div>

                        </div>


                        {paymentMethod === 'credit-card' && (
                            <button className='p-2 h-10 rounded-lg text-white bg-green-500 hover:bg-green-600 active:scale-95 ' onClick={handlePayment}  >Pay Now</button>
                        )}
                        {paymentMethod === 'pay-on-delivery' && (
                            <button onClick={handlePayment}></button>
                        )}

                        {paymentMethod == 'pay-on-delivery' && <div className="flex justify-center mt-6">
                            <button onClick={handleorder} className="w-full rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 light:bg-green-600 light:hover:bg-green-700 light:focus:ring-green-800 sm:w-auto">
                                Place Your Order
                            </button>
                        </div>}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Payment;
