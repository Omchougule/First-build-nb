import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../HomeComp/Products/productsConfig';

export default function Receipt() {
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));

    if (!product) {
        return <div className="text-center mt-10 text-gray-800">Product not found</div>;
    }

    function generateRandomTax() {
        // Generate a random decimal between 0 and 1
        const randomDecimal = Math.random();

        // Calculate the tax amount by multiplying the random decimal by the range and adding the minimum value
        const taxAmount = Math.floor(randomDecimal * (50 - 10 + 1) + 10);

        return taxAmount;
    }

    // Example usage
    const randomTax = generateRandomTax();
    // console.log(`Random tax amount: Rs ${randomTax}`);

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const finalPrice = product.price + randomTax;




    return (
        <>




            <div id="hs-ai-modal" className="  size-full   pointer-events-none">
                <div className=" sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div className="relative flex flex-col bg-white shadow-lg rounded-xl pointer-events-auto">
                        <div className="relative overflow-hidden min-h-32 bg-gray-900 text-center rounded-t-xl">
                            <div className="absolute top-2 end-2">
                                <button type="button" className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all text-sm" data-="#hs-bg-gray-on-hover-cards" data-hs-remove-element="#hs-ai-modal">
                                    <span className="sr-only">Close</span>
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                </button>
                            </div>

                            <figure className="absolute inset-x-0 bottom-0 -mb-px">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                                    <path fill="currentColor" className="fill-white" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                                </svg>
                            </figure>

                        </div>

                        <div className="relative z-10 -mt-12">

                            <span className="mx-auto flex justify-center items-center size-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm">
                                <svg className="flex-shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                    <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </span>

                        </div>


                        <div className="p-4 sm:p-7 overflow-y-auto">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Invoice from NUTIBITES
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Invoice #3682303
                                </p>
                            </div>


                            <div className="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
                                <div>
                                    <span className="block text-xs uppercase text-gray-500">Amount paid:</span>
                                    <span className="block text-sm font-medium text-gray-800">${finalPrice}</span>
                                </div>


                                <div>
                                    <span className="block text-xs uppercase text-gray-500">Date paid:</span>
                                    <span className="block text-sm font-medium text-gray-800">{currentDate}</span>
                                </div>


                                <div>
                                    <span className="block text-xs uppercase text-gray-500">Payment method:</span>
                                    <div className="flex items-center gap-x-2">
                                        <svg className="size-5" width="400" height="248" viewBox="0 0 400 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0)">
                                                <path d="M254 220.8H146V26.4H254V220.8Z" fill="#FF5F00" />
                                                <path d="M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z" fill="#EB001B" />
                                                <path d="M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z" fill="#F79E1B" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="400" height="247.2" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span className="block text-sm font-medium text-gray-800">•••• 4242</span>
                                    </div>
                                </div>

                            </div>


                            <div className="mt-5 sm:mt-10">
                                <h4 className="text-xs font-semibold uppercase text-gray-800">Summary</h4>

                                <ul className="mt-3 flex flex-col">
                                    <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                                        <div className="flex items-center justify-between w-full">
                                            <span>{product.title}</span>
                                            <span>$264.00</span>
                                        </div>
                                    </li>
                                    <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                                        <div className="flex items-center justify-between w-full">
                                            <span>Product Price</span>
                                            <span>${product.price}</span>
                                        </div>
                                    </li>
                                    <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                                        <div className="flex items-center justify-between w-full">
                                            <span>Tax fee</span>
                                            <span>${randomTax}</span>
                                        </div>
                                    </li>
                                    <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                                        <div className="flex items-center justify-between w-full">
                                            <span>Amount paid</span>
                                            <span>${finalPrice}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>


                            <div className="mt-5 flex justify-end gap-x-2">
                                <Link
                                    type="button"
                                    onClick={() => {
                                        const currentUrl = window.location.href; // Get the current page URL
                                        const link = document.createElement('a');
                                        link.href = currentUrl;
                                        link.download = 'invoice.pdf'; // Set the file name for download
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                                >
                                    <svg
                                        className="flex-shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" x2="12" y1="15" y2="3" />
                                    </svg>
                                    Invoice PDF
                                </Link>

                                <Link onClick={() => window.print()} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect width="12" height="8" x="6" y="14" /></svg>
                                    Print
                                </Link>
                            </div>


                            <div className="mt-5 sm:mt-10">
                                <p className="text-sm text-gray-500">If you have any questions, please contact us at <a className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="#">example@site.com</a> or call at <a className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="tel:+1898345492">+1 898-34-5492</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}
