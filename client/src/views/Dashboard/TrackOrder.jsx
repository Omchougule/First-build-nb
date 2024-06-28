import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { auth } from '../../views/Login/config'
import toast from 'react-hot-toast'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useUserContext } from '../../context/Authcontext';


const OrderTracking = ({ status }) => {

    const statusSteps = [
        { title: 'Processing', description: 'Your order is being processed.', iconPath: 'M5 12l5 5L20 7', status: 'Processing' },
        { title: 'Shipped', description: 'Your order has been shipped.', iconPath: 'M5 12l5 5L20 7', status: 'Shipped' },
        { title: 'In Transit', description: 'Your order is on its way.', iconPath: 'M5 12l5 5L20 7', status: 'In Transit' },
        { title: 'Delivered', description: 'Your order has been delivered.', iconPath: 'M5 12l5 5L20 7', status: 'Delivered' }
    ];
    const currentStatusIndex = statusSteps.findIndex(step => step.status === status);
    return (
        <div>
            <h2 className='text-2xl '>Order Tracking</h2>
            <ol className="relative ms-3 border-s mt-5 border-gray-200 light:border-gray-700">
                {statusSteps.map((step, index) => (
                    <li key={index} className={`mb-10 ms-6 ${index <= currentStatusIndex ? 'text-green-700 light:text-green-500' : ''}`}>
                        <span className={`absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ${index <= currentStatusIndex ? 'bg-green-100 light:bg-green-900' : 'bg-gray-100 light:bg-gray-700'} ring-8 ring-white light:ring-gray-800`}>
                            <svg className={`h-4 w-4 ${index <= currentStatusIndex ? 'text-green-500' : 'text-gray-500 light:text-gray-400'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={step.iconPath} />
                            </svg>
                        </span>
                        <h4 className={`mb-0.5 text-base font-semibold ${index <= currentStatusIndex ? 'text-gray-900 light:text-white' : ''}`}>{step.title}</h4>
                        <p className="text-sm font-normal text-gray-500 light:text-gray-400">{step.description}</p>
                    </li>
                ))}
                {status == 'Cancelled' &&
                    <li className={`mb-10 ms-6 text-red-700 light:text-green-500`}>
                    <span className={`absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full  ring-8 ring-white light:ring-gray-800`}>
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d='M6 18L18 6M6 6l12 12' />
                        </svg>
                    </span>
                    <h4 className={`mb-0.5 text-base font-semibold`}>Cancelled</h4>
                    <p className="text-sm font-normal text-gray-500 light:text-gray-400">Your order has been Cancelled.</p>
                </li>}
            </ol>
        </div>
    );
};





const TrackOrder = () => {
    const [orderSummary, setOrderSummary] = useState(null);
    const [reviews, setReviews] = useState({});
    const { id } = useParams()
    const { user } = useUserContext()

    const getorder = async () => {
        const res = await axios.post('http://localhost:5000/getorder', { orderId: id })
        if (res.data.success) {
            setOrderSummary(res.data.data)
            // console.log(res.data.data);
        }
    }

    useEffect(() => {
        getorder()
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

    const handleReviewChange = (productId, value) => {
        setReviews((prevReviews) => ({
            ...prevReviews,
            [productId]: value,
        }));
    };

    const addReview = async (productId) => {
        const review = reviews[productId];
        if (!review || review == '') {
            toast.error('Please enter a review!')
            return;
        }
        const res = await axios.post('http://localhost:5000/addreview', { productId: productId, review: review, userName: user?.userName, userId: user?.id })
        if (res.data.success) {
            toast.success('Review added successfully!')
            handleReviewChange(productId, '')
        } else {
            toast.error('Failed to add review!')
        }
    }

    if (!orderSummary) {
        return (
            <>
                <div className='md:bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/breadcrumb_bc57e145-dc2e-410c-9c11-4c22d1a357eb.png?v=1655187284")] bg-inherit bg-no-repeat bg-cover  flex flex-col justify-between items-center'>
                    <Navbar />
                    <h1 className='font-hand text-5xl py-10 mt-2 text-orange-400'>Track Your Order</h1>
                </div>
                <section className="bg-white py-8 antialiased light:bg-gray-900 md:py-16">
                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        <h2 className="text-xl font-semibold text-gray-900 light:text-white sm:text-2xl">Track the delivery of order #{id}</h2>
                        <p className="mt-4 text-lg font-medium text-gray-900 light:text-white">No order details found!</p>
                    </div>
                </section>
            </>
        );
    }

    // const { cartItems, originalPrice, storePickup, tax, finalTotal } = orderSummary;

    return (
        <>
            <>
                <div className='
       md:bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/breadcrumb_bc57e145-dc2e-410c-9c11-4c22d1a357eb.png?v=1655187284")] 
      bg-inherit bg-no-repeat bg-cover  flex flex-col justify-between items-center pt-20
      '>

                    <Navbar />

                    <h1 className='font-hand text-5xl py-10 mt-2 text-orange-400'>Track Your Order</h1>

                    {/* <button className='text-white bg-transparent z-50 border py-2 px- w-32 focus:outline-none hover:bg-white hover:text-black active:scale-90 duration-200  rounded-full text-lg mb-10 -translate-y-20'>Shop Now</button> */}

                </div>

                {/* <div className='font-hand'>TrackOrder</div> */}

                <section className="bg-white py-8 antialiased light:bg-gray-900 md:py-16">
                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        <h2 className="text-xl font-semibold text-gray-900 light:text-white sm:text-2xl">Track the delivery of order #{id}</h2>

                        <div className="mt-6 sm:mt-8 lg:flex lg:gap-8">

                            {/* order summary */}

                            <div className="w-full divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 light:divide-gray-700 light:border-gray-700 lg:max-w-xl xl:max-w-2xl">
                                {orderSummary.order && orderSummary.order.map((product, index) => (
                                    <div key={index}>

                                        <div className="space-y-4 p-6 ">
                                            <div className="flex items-center gap-6">
                                                <Link to={`/product/${product.productId}`} className="h-14 w-14 shrink-0">
                                                    <img className="h-full w-full light:hidden" src={product.image} alt="imac image" />
                                                </Link>

                                                <Link to={`/product/${product.productId}`} className="min-w-0 flex-1 font-medium text-gray-900 hover:underline light:text-white"> {product.productName} </Link>
                                            </div>

                                            <div className="flex items-center justify-between gap-4">
                                                <p className="text-sm font-normal text-gray-500 light:text-gray-400"><span className="font-medium text-gray-900 light:text-white">Product ID:</span> {product.productId}</p>

                                                <div className="flex items-center justify-end gap-4">
                                                    <p className="text-base font-normal text-gray-900 light:text-white">x{product.quantity}</p>

                                                    <p className="text-xl font-bold leading-tight text-gray-900 light:text-white">&#8377; {product.productPrice * product.quantity}</p>
                                                </div>
                                            </div>
                                            {orderSummary.status === "Delivered" && <div className="flex items-center justify-between gap-4">
                                                <div >
                                                    <label className='mr-6' htmlFor={`review-${product.productId}`}>Review :</label>
                                                    <input
                                                        value={reviews[product.productId] || ''}
                                                        onChange={(e) => handleReviewChange(product.productId, e.target.value)}
                                                        className='border-2 border-black p-2 rounded-lg'
                                                        type="text"
                                                        placeholder='Enter Review'
                                                        id={`review-${product.productId}`}
                                                    />
                                                </div>
                                                <button onClick={() => addReview(product.productId)} className='border-[1px] border-black rounded-lg p-1 cursor-pointer bg-green-600 text-white font-semibold'>
                                                    Add Review
                                                </button>
                                            </div>}
                                        </div>
                                    </div>
                                ))}



                                {/* Price summary */}

                                <div className="space-y-4 bg-gray-50 p-6 light:bg-gray-800">
                                    <div className="space-y-2">
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="font-normal text-gray-500 light:text-gray-400">Original price</dt>
                                            <dd className="font-medium text-gray-900 light:text-white"> &#8377; {orderSummary.summary.originalPrice}</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="font-normal text-gray-500 light:text-gray-400">Savings</dt>
                                            <dd className="text-base font-medium text-green-500">- &#8377;{orderSummary.summary.discountedAmmount}</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="font-normal text-gray-500 light:text-gray-400">Store Pickup</dt>
                                            <dd className="font-medium text-gray-900 light:text-white">&#8377;{orderSummary.summary.storePickup}</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="font-normal text-gray-500 light:text-gray-400">Tax</dt>
                                            <dd className="font-medium text-gray-900 light:text-white">&#8377;{orderSummary.summary.tax}</dd>
                                        </dl>
                                    </div>

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 light:border-gray-700">
                                        <dt className="text-lg font-bold text-gray-900 light:text-white">Total</dt>
                                        <dd className="text-lg font-bold text-gray-900 light:text-white">&#8377;    {orderSummary.summary.finalTotal}</dd>
                                    </dl>
                                </div>
                            </div>

                            {/* Tracking logic */}
                            <OrderTracking status={orderSummary.status} />

                        </div>
                    </div>
                </section>
            </>

        </>
    );
};

export default TrackOrder;
