import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useUserContext } from '../../context/Authcontext';
import axios from 'axios';

const addToFavorites = (product) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const isProductInFavorites = favorites.some(item => item.imageUrl === product.imageUrl);

    if (isProductInFavorites) {
        toast.error("Product is already in Favorites!");
    } else {
        favorites.push(product);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        toast.success("Product added to Favorites!");
    }
};

const ProductCartItem = ({ imageUrl, initialQuantity, price, description, onQuantityChange, removeFromCart }) => {
    const [quantity, setQuantity] = useState(parseInt(initialQuantity));
    const [isLiked, setIsLiked] = useState(false);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            onQuantityChange(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
            onQuantityChange(quantity + 1);
        }
    };

    const handleAddToFavorites = () => {
        addToFavorites({ imageUrl, initialQuantity, price, description });
        setIsLiked(!isLiked);
    };

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm light:border-gray-700 light:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <a href="#" className="shrink-0 md:order-1">
                    <img src={imageUrl} alt='' className='h-20 w-20' />
                </a>
                <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                        <button type="button" onClick={decreaseQuantity} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 light:border-gray-600 light:bg-gray-700 light:hover:bg-gray-600 light:focus:ring-gray-700">
                            <svg className="h-2.5 w-2.5 text-gray-900 light:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                            </svg>
                        </button>
                        <p className="w-10 text-center text-sm font-medium text-gray-900 light:text-white">{quantity}</p>
                        <button type="button" onClick={increaseQuantity} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 light:border-gray-600 light:bg-gray-700 light:hover:bg-gray-600 light:focus:ring-gray-700">
                            <svg className="h-2.5 w-2.5 text-gray-900 light:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                            </svg>
                        </button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 light:text-white">${price * quantity}</p>
                    </div>
                </div>
                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a href="#" className="text-base font-medium text-gray-900 hover:underline light:text-white">{description}</a>
                    <div className="flex items-center gap-4">
                        <button type="button" onClick={handleAddToFavorites} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline light:text-gray-400 light:hover:text-white">
                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={isLiked ? 'red' : 'none'} viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                            </svg>
                            Add to Favorites
                        </button>
                        <button type="button" onClick={removeFromCart} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline light:text-red-500">
                            <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Cart = () => {
    const { user, setOrder, setSummary, summary } = useUserContext()
    const [cart, setCart] = useState([]);
    const [isloading, setIsloading] = useState(true)
    const [originalPrice, setOriginalPrice] = useState(0);
    const [finalTotal, setFinalTotal] = useState(0);
    const [discountcode, setDiscountcode] = useState('')
    const [discount, setDiscount] = useState(0)

    async function fetch_cart() {
        const res = await axios.get('http://localhost:5000/getcart')
        const Newcart = res.data.filter(cart => cart.userId == user?.id)
        setCart(Newcart);
        updateOrderSummary(Newcart);
        setIsloading(false)
    }

    const updateOrderSummary = (Newcart) => {
        const totalPrice = Newcart.reduce((acc, item) => acc + item.quantity * item.price, 0); 
        const storePickup = 99;
        const tax = 799;
        const discountedAmmount = ((discount / 100) * totalPrice).toFixed(2);
        const total = totalPrice - discountedAmmount + storePickup + tax;
        setOriginalPrice(totalPrice);
        setFinalTotal(total);

        const orderSummary = {
            // cartItems, // Include cart items in the order summary
            originalPrice: totalPrice,
            storePickup,
            discountedAmmount,
            tax,
            finalTotal: total,
        };
        setSummary(orderSummary)
        // localStorage.setItem('orderSummary', JSON.stringify(orderSummary));
    };

    useEffect(() => {
        if (user?.id) {
            fetch_cart()
            // updateOrderSummary()
        }
    }, [user]);

    useEffect(() => {
        updateOrderSummary(cart)
    },[discount])
    
    const updateCart = async (index) => {
        const res = await axios.post('http://localhost:5000/removecart', { userId: user?.id, proId: index })
        if (res.data.success) {
            fetch_cart()
            toast.success("Product removed!")
        }
        else {
            toast.error("Something went wrong!")
        }
    };

    const removeFromCart = (index) => {
        const isConfirmed = window.confirm('Are you sure you want to remove this item from the cart?');
        if (isConfirmed) {
            const updatedCart = cart.filter(item => item.proId != index)
            updateCart(index);
        }
    };
    

    // const updateItemQuantity = (itemId, newQuantity) => {
        //     setCart(prevCart =>
    //       prevCart.map(item =>
    //         item._id === itemId ? { ...item, quantity: newQuantity } : item
    //       )
    //     );
    //   };

    const updateItemQuantity = async (itemId, newQuantity) => {
        const newcart = cart.filter(item => item.proId === itemId)
        const updatedCart = { ...newcart[0], quantity: newQuantity }
        const res = await axios.post('http://localhost:5000/addcart', updatedCart)
        if (res.data.success == true) {
            toast.success(+1)
        }
        fetch_cart()
    }

    const handlecheckout = () => {
        // set order
        const order = cart.map((item) => {
            return {
                proId: item.proId,
                quantity: item.quantity
            }
        })
        setOrder(order)
        updateOrderSummary(cart)
    }

    const handleCode = async (code) => {
        const res = await axios.post('http://localhost:5000/getcode', {code : discountcode})

        if(res.data.success)
        {
            setDiscount(res.data.data.discountPercentage)
            toast.success("Code applied successfully!")
        }
        else
        {
            toast.error('Invalid code!')
        }
    }
    

    if (isloading) {
        return (<h1>Loading</h1>)
    }

    return (
        <>
            <div className="md:bg-[url('https://dt-faryita.myshopify.com/cdn/shop/files/breadcrumb_bc57e145-dc2e-410c-9c11-4c22d1a357eb.png?v=1655187284')] bg-inherit bg-no-repeat bg-cover  flex flex-col justify-between items-center">
                <Navbar />
                <h1 className="font-hand text-5xl py-36 mt-2 text-orange-400">Shopping Cart</h1>
            </div>

            <section className="bg-white py-8 antialiased light:bg-gray-900 md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <h2 className="text-xl font-semibold text-gray-900 light:text-white sm:text-2xl">Shopping Cart</h2>
                    <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div className="space-y-6">
                                {cart.map((product, index) => (
                                    <ProductCartItem
                                        key={product.proId}
                                        imageUrl={product.imageUrl}
                                        initialQuantity={product.quantity}
                                        price={product.price}
                                        description={product.description}
                                        onQuantityChange={(newQuantity) => updateItemQuantity(product.proId, newQuantity)}
                                        removeFromCart={() => removeFromCart(product.proId)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm light:border-gray-700 light:bg-gray-800 sm:p-6">
                                <p className="text-xl font-semibold text-gray-900 light:text-white">Order summary</p>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 light:text-gray-400">Original price</dt>
                                            <dd className="text-base font-medium text-gray-900 light:text-white"> ${originalPrice.toFixed(2)}</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 light:text-gray-400">Savings</dt>
                                            <dd className="text-base font-medium text-green-600">-${summary?.discountedAmmount}</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 light:text-gray-400">Store Pickup</dt>
                                            <dd className="text-base font-medium text-gray-900 light:text-white">${summary?.storePickup}</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 light:text-gray-400">Tax</dt>
                                            <dd className="text-base font-medium text-gray-900 light:text-white">${summary?.tax}</dd>
                                        </dl>
                                    </div>

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 light:border-gray-700">
                                        <dt className="text-base font-bold text-gray-900 light:text-white">Total</dt>
                                        <dd className="text-base font-bold text-gray-900 light:text-white">$ {finalTotal.toFixed(2)} </dd>
                                    </dl>
                                </div>
                                <Link
                                    to="/cart/checkout"
                                    className="flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 light:bg-green-600 light:hover:bg-green-700 light:focus:ring-green-800"
                                    onClick={handlecheckout} // Ensure the order summary is updated before navigating
                                >
                                    Proceed to Checkout
                                </Link>

                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-normal text-gray-500 light:text-gray-400"> or </span>
                                    <Link to="/products" title="" className="inline-flex items-center gap-2 text-sm font-medium text-green-700 underline hover:no-underline light:text-green-500">
                                        Continue Shopping
                                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm light:border-gray-700 light:bg-gray-800 sm:p-6">
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 light:text-white"> Do you have a voucher or gift card? </label>
                                            <input maxLength={6} value={discountcode} onChange={(e)=>setDiscountcode(e.target.value.toUpperCase())} type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder-gray-400 light:focus:border-green-500 light:focus:ring-green-500 font-bold" placeholder="" required />
                                        </div>
                                        <button onClick={(e) => handleCode(discountcode)}className="flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 light:bg-green-600 light:hover:bg-green-700 light:focus:ring-green-800">Apply Code</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;
