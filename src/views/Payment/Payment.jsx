import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

const Payment = () => {
    return (
        <>
            <div className='
       md:bg-[url("https://dt-faryita.myshopify.com/cdn/shop/files/breadcrumb_bc57e145-dc2e-410c-9c11-4c22d1a357eb.png?v=1655187284")] 
      bg-inherit bg-no-repeat bg-cover  flex flex-col justify-between items-center
      '>

                <Navbar />

                <h1 className='font-hand text-5xl py-36 mt-2 text-orange-400'>Payment</h1>

                {/* <button className='text-white bg-transparent z-50 border py-2 px- w-32 focus:outline-none hover:bg-white hover:text-black active:scale-90 duration-200  rounded-full text-lg mb-10 -translate-y-20'>Shop Now</button> */}

            </div>



            <section className="bg-white py-8 antialiased light:bg-gray-900 md:py-16">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mx-auto max-w-5xl">
                        <h2 className="text-xl font-semibold text-gray-900 light:text-white sm:text-2xl">Payment</h2>

                        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
                            <form action="#" className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm light:border-gray-700 light:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8">
                                <div className="mb-6 grid grid-cols-2 gap-4">
                                    <div className="col-span-2 sm:col-span-1">
                                        <label for="full_name" className="mb-2 block text-sm font-medium text-gray-900 light:text-white"> Full name (as displayed on card)* </label>
                                        <input type="text" id="full_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder:text-gray-400 light:focus:border-green-500 light:focus:ring-green-500" placeholder="Bonnie Green" required />
                                    </div>

                                    <div className="col-span-2 sm:col-span-1">
                                        <label for="card-number-input" className="mb-2 block text-sm font-medium text-gray-900 light:text-white"> Card number* </label>
                                        <input type="text" id="card-number-input" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500  light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder:text-gray-400 light:focus:border-green-500 light:focus:ring-green-500" placeholder="xxxx-xxxx-xxxx-xxxx" 
                                        // pattern="^4[0-9]{12}(?:[0-9]{3})?$" required 
                                        />
                                    </div>

                                    <div>
                                        <label for="card-expiration-input" className="mb-2 block text-sm font-medium text-gray-900 light:text-white">Card expiration* </label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                                                <svg className="h-4 w-4 text-gray-500 light:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <input datepicker datepicker-format="mm/yy" id="card-expiration-input" type="text" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder:text-gray-400 light:focus:border-blue-500 light:focus:ring-blue-500" placeholder="12/23" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="cvv-input" className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 light:text-white">
                                            CVV*
                                            <button data-tooltip-target="cvv-desc" data-tooltip-trigger="hover" className="text-gray-400 hover:text-gray-900 light:text-gray-500 light:hover:text-white">
                                                <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                            <div id="cvv-desc" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 light:bg-gray-700">
                                                The last 3 digits on back of card
                                                <div className="tooltip-arrow" data-popper-arrow></div>
                                            </div>
                                        </label>
                                        <input type="number" id="cvv-input" aria-describedby="helper-text-explanation" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 light:border-gray-600 light:bg-gray-700 light:text-white light:placeholder:text-gray-400 light:focus:border-green-500 light:focus:ring-green-500" placeholder="•••" required />
                                    </div>
                                </div>
                                <Link to="confirmation">
                                <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4  focus:ring-green-300 light:bg-green-600 light:hover:bg-green-700 light:focus:ring-green-800">Pay now</button>
                                </Link>
                            </form>

                            <div className="mt-6 grow sm:mt-8 lg:mt-0">
                                <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 light:border-gray-700 light:bg-gray-800">
                                    <div className="space-y-2">
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 light:text-gray-400">Original price</dt>
                                            <dd className="text-base font-medium text-gray-900 light:text-white">$6,592.00</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 light:text-gray-400">Savings</dt>
                                            <dd className="text-base font-medium text-green-500">-$299.00</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 light:text-gray-400">Store Pickup</dt>
                                            <dd className="text-base font-medium text-gray-900 light:text-white">$99</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-base font-normal text-gray-500 light:text-gray-400">Tax</dt>
                                            <dd className="text-base font-medium text-gray-900 light:text-white">$799</dd>
                                        </dl>
                                    </div>

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 light:border-gray-700">
                                        <dt className="text-base font-bold text-gray-900 light:text-white">Total</dt>
                                        <dd className="text-base font-bold text-gray-900 light:text-white">$7,191.00</dd>
                                    </dl>
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
                        </div>

                        <p className="mt-6 text-center text-gray-500 light:text-gray-400 sm:mt-8 lg:text-left">
                            Payment processed by <a href="#" title="" className="font-medium text-green-700 underline hover:no-underline light:text-green-500">Paddle</a> for <a href="#" title="" className="font-medium text-green-700 underline hover:no-underline light:text-green-500">Flowbite LLC</a>
                            - United States Of America
                        </p>
                    </div>
                </div>
            </section>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>



            <Footer/>

        </>
    )
}

export default Payment