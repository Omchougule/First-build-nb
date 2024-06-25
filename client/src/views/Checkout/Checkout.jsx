import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/Authcontext';
import axios from 'axios';


const Checkout = () => {
    const {user, summary, order} = useUserContext()
    const [orderSummary, setOrderSummary] = useState(null);
    const [addresses, setAddresses] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        // const storedOrderSummary = JSON.parse(localStorage.getItem('orderSummary')) || null;
        setOrderSummary(summary);
        if(order.length == 0 )
        {
            navigate('/cart')
        }
    }, []);

    const [formData, setFormData] = useState({
        your_name: '',
        your_email: '',
        country: 'United States',
        city: 'San Francisco',
        gym_name: '',
        phone: ''
    });

    const getAdd = async () =>{
        const res = await axios.post('http://localhost:5000/getadd', {userId : user?.id})
        if(res.data.success)
        {
            const storedAddresses = JSON.parse(res.data.data?.address)
            setAddresses(storedAddresses);
        }
    }
    useEffect(() => {
       if(user?.id) 
       {
            getAdd()
       }
       localStorage.removeItem('selectedAddress')

        // Load selected address from local storage
        // const selectedAddress = JSON.parse(localStorage.getItem('selectedAddress')) || null;
        // if (selectedAddress) {
        //     setFormData(selectedAddress);
        // }
    }, [user?.id]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleAddressSelect = (index) => {
        // const address = JSON.parse(selectedAddress);
        if(index == "select")
            return
        setFormData(addresses[index]);
        localStorage.setItem('selectedAddress', JSON.stringify(addresses[index]));
    };

    const handleAddressSubmit = async (e) => {
        e.preventDefault();
        // const addressString = JSON.stringify(formData);
        if (addresses.includes(formData)) {
            toast.error('Address already exists');
        } else {
            const updatedAddresses = [...addresses, formData];
            // localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
            toast.success('Address added successfully');
            const res = await axios.post('http://localhost:5000/address', {userId : user.id, addresses : updatedAddresses})
            if(res.data.success)
            {
                getAdd()
            }
        }
    };

    const updateOrderSummary = () => {
        
    }

    return (
        <>
            <div className='md:bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/breadcrumb_bc57e145-dc2e-410c-9c11-4c22d1a357eb.png?v=1655187284")] 
            bg-inherit bg-no-repeat bg-cover  flex flex-col justify-between items-center'>
                <Navbar />
                <h1 className='font-hand text-5xl py-36 mt-2 text-orange-400'>Checkout</h1>
            </div>

            <section className="bg-white py-8 antialiased light:bg-gray-900 md:py-16">
                <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 light:text-gray-400 sm:text-base">
                        <li className="after:border-1 flex items-center text-green-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 light:text-green-500 light:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] light:after:text-gray-500 sm:after:hidden">
                                <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Cart
                            </span>
                        </li>

                        <li className="after:border-1 flex items-center text-green-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 light:text-green-500 light:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] light:after:text-gray-500 sm:after:hidden">
                                <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Checkout
                            </span>
                        </li>

                        <li className="flex shrink-0 items-center">
                            <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Order summary
                        </li>
                    </ol>

                    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                        <div className="min-w-0 flex-1 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-gray-900 light:text-white">Delivery Details</h2>
                                <div className="space-y-4">

                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            {/* Display all addresses as options */}
                                            <div>
                                                <label htmlFor="addressSelect" className="mb-2 block text-sm font-medium text-gray-900 light:text-white">Select Address</label>
                                                <select
                                                    id="addressSelect"
                                                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder:text-gray-400 light:focus:border-green-500 light:focus:ring-green-500"
                                                    onChange={(e) => handleAddressSelect(e.target.value)}
                                                >
                                                    <option value="select" >Select an address</option>
                                                    {addresses.map((address, index) => (
                                                        <option key={index} value={index}>{address.your_name}</option>
                                                    ))}
                                                    {/* <option value="" >{user?.address}</option> */}
                                                </select>
                                            </div>
                                        </div>
                                        {/* Add new address form */}
                                        <form onSubmit={handleAddressSubmit} className="space-y-4">
                                            {/* Form fields */}

                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">



                                                <div>
                                                    <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 light:text-white">Your name</label>
                                                    <input
                                                        type="text"
                                                        id="your_name"
                                                        value={formData.your_name}
                                                        onChange={handleChange}
                                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder:text-gray-400 light:focus:border-green-500 light:focus:ring-green-500"
                                                        placeholder="Bonnie Green"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 light:text-white">Your email*</label>
                                                    <input
                                                        type="email"
                                                        id="your_email"
                                                        value={formData.your_email}
                                                        onChange={handleChange}
                                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder:text-gray-400 light:focus:border-green-500 light:focus:ring-green-500"
                                                        placeholder="name@flowbite.com"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <div className="mb-2 flex items-center gap-2">
                                                        <label htmlFor="country" className="block text-sm font-medium text-gray-900 light:text-white">Country*</label>
                                                    </div>
                                                    <select
                                                        id="country"
                                                        value={formData.country}
                                                        onChange={handleChange}
                                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder:text-gray-400 light:focus:border-green-500 light:focus:ring-green-500"
                                                    >
                                                        <option value="United States">United States</option>
                                                        <option value="Australia">Australia</option>
                                                        <option value="France">France</option>
                                                        <option value="Spain">Spain</option>
                                                        <option value="United Kingdom">United Kingdom</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <div className="mb-2 flex items-center gap-2">
                                                        <label htmlFor="city" className="block text-sm font-medium text-gray-900 light:text-white">City*</label>
                                                    </div>
                                                    <select
                                                        id="city"
                                                        value={formData.city}
                                                        onChange={handleChange}
                                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder:text-gray-400 light:focus:border-green-500 light:focus:ring-green-500"
                                                    >
                                                        <option value="San Francisco">San Francisco</option>
                                                        <option value="Sydney">Sydney</option>
                                                        <option value="Nice">Nice</option>
                                                        <option value="Madrid">Madrid</option>
                                                        <option value="London">London</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label htmlFor="gym_name" className="mb-2 block text-sm font-medium text-gray-900 light:text-white">Gym name</label>
                                                    <input
                                                        type="text"
                                                        id="gym_name"
                                                        value={formData.gym_name}
                                                        onChange={handleChange}
                                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder:text-gray-400 light:focus:border-green-500 light:focus:ring-green-500"
                                                        placeholder="Flowbite Fitness"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900 light:text-white">Phone number</label>
                                                    <input
                                                        type="number"
                                                        id="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder:text-gray-400 light:focus:border-green-500 light:focus:ring-green-500"
                                                        placeholder="+1 234 567 890"
                                                        required
                                                    />
                                                </div>





                                            </div>
                                            <button type="submit" onClick={handleAddressSubmit} className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 light:border-gray-600 light:bg-gray-800 light:text-gray-400 light:hover:bg-gray-700 light:hover:text-white light:focus:ring-gray-700">
                                                <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                                                </svg>
                                                Add new address
                                            </button>

                                        </form>

                                        </div>




                                    </div>
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                                <div className="flow-root">
                                    <div className="-my-3 divide-y divide-gray-200 light:divide-gray-800">
                                        {orderSummary && (
                                            <>
                                                <dl className="flex items-center justify-between gap-4 py-3">
                                                    <dt className="text-base font-normal text-gray-500 light:text-gray-400">Subtotal</dt>
                                                    <dd className="text-base font-medium text-gray-900 light:text-white">${orderSummary.originalPrice.toFixed(2)}</dd>
                                                </dl>

                                                <dl className="flex items-center justify-between gap-4 py-3">
                                                    <dt className="text-base font-normal text-gray-500 light:text-gray-400">Savings</dt>
                                                    <dd className="text-base font-medium text-green-500">0</dd>
                                                </dl>

                                                <dl className="flex items-center justify-between gap-4 py-3">
                                                    <dt className="text-base font-normal text-gray-500 light:text-gray-400">Store Pickup</dt>
                                                    <dd className="text-base font-medium text-gray-900 light:text-white">${orderSummary.storePickup.toFixed(2)}</dd>
                                                </dl>

                                                <dl className="flex items-center justify-between gap-4 py-3">
                                                    <dt className="text-base font-normal text-gray-500 light:text-gray-400">Tax</dt>
                                                    <dd className="text-base font-medium text-gray-900 light:text-white">${orderSummary.tax.toFixed(2)}</dd>
                                                </dl>

                                                <dl className="flex items-center justify-between gap-4 py-3">
                                                    <dt className="text-base font-bold text-gray-900 light:text-white">Total</dt>
                                                    <dd className="text-base font-bold text-gray-900 light:text-white">${orderSummary.finalTotal.toFixed(2)}</dd>
                                                </dl>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Link to="payment">
                                        <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4  focus:ring-green-300 light:bg-green-600 light:hover:bg-green-700 light:focus:ring-green-800">Proceed to Payment</button>
                                    </Link>

                                    <p className="text-sm font-normal text-gray-500 light:text-gray-400">One or more items in your cart require an account. <a href="#" title="" className="font-medium text-green-700 underline hover:no-underline light:text-green-500">Sign in or create an account now.</a>.</p>
                                </div>
                            </div>
                        </div>
                </form>
            </section>

            <Footer />
        </>
    );
}

export default Checkout;

