import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../../views/Login/config";
import toast from 'react-hot-toast';
import axios from 'axios';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [state, setState] = useState(false);

    useGSAP(() => {
        // GSAP animation
        const tl = gsap.timeline();

        tl.from(".navbar-item", {
            duration: 1,
            opacity: 0,
            y: -100,
            stagger: 0.2,
            ease: "back.out",
        })
            .from(".navbar-logo", {
                duration: 1.7,
                opacity: 0,
                y: -100,
                stagger: 0.2,
                ease: "bounce.out",
            });
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        try {
            if (!user) {
                throw new Error("User not found");
            }
            const response = await axios.post(`http://localhost:5000/user/logout`, { email: user.email });
            toast.success(response.data.message);
            localStorage.clear();
            await auth.signOut();
            window.location.reload();
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    const navigation = [
        { title: "Home", path: "/" },
        { title: "Reviews", path: "/review" },
        { title: "Contact", path: "/contact" },
        { title: "Products", path: "/products" },
    ];

    return (
        // <nav className="bg-transparent bg-opacity-50  text-white w-full md:static md:text-sm shadow-lg z-50 navbar">
        //     <div className="flex justify-evenly  items-center px-4 max-w-screen-xl mx-auto md:flex md:justify-between  md:px-8">
        //         <div className="flex items-center justify-between  py-3 md:py-5 md:block">
        //             <Link to="/">
        //                 <h1 className='text-2xl font-bold navbar-logo'>NUTRIBITES</h1>
        //             </Link>
        //             <div className="md:hidden flex items-center">
        //                 <button className="text-gray-500 my hover:text-gray-800 navbar-item" onClick={() => setState(!state)}>
        //                     {state ? (
        //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
        //                             <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        //                         </svg>
        //                     ) : (
        //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        //                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        //                         </svg>
        //                     )}
        //                 </button>
        //             </div>
        //         </div>
        //         <div className={`flex justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
        //             <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
        //                 {navigation.map((item, idx) => (
        //                     <li key={idx} className="    font-semibold hover:text-slate-600 cursor-pointer navbar-item">
        //                         <Link to={item.path} className="block">
        //                             {item.title}
        //                         </Link>
        //                     </li>
        //                 ))}

        //             </ul>
        //         </div>
        //         <div className={`flex justify-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
        //             <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
        //                 <span className='hidden w-px h-6 bg-gray-300 md:block navbar-item'></span>
        //                 <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
        //                     {user ? (
        //                         <div className="flex items-center space-x-6">
        //                             <Link to="/" className='flex items-center navbar-item '>
        //                                 <img src={user.photoURL} alt="Profile" className="rounded-full w-8 h-8 mr-2" />
        //                                 <span className="text-green-600">{user.displayName}</span>
        //                             </Link>
        //                             <li>
        //                                 <Link onClick={handleLogout} className="block py-2 px-4 font-medium text-center text-white bg-green-600 hover:bg-green-500 active:bg-green-700 active:shadow-none rounded-lg shadow md:inline-block navbar-item">
        //                                     Log Out
        //                                 </Link>
        //                             </li>
        //                         </div>
        //                     ) : (
        //                         <li>
        //                             <Link to="/login" className="block py-2 px-4 font-medium text-center text-white bg-green-600 hover:bg-green-500 active:bg-green-700 active:shadow-none rounded-lg shadow md:inline-block navbar-item">
        //                                 Log in
        //                             </Link>
        //                         </li>
        //                     )}
        //                 </div>

        //             </ul>
        //         </div>
        //     </div>
        // </nav>


        <nav className="bg-transperent    text-white  w-full md:static md:text-sm shadow-lg z-50" id='navbar'    >
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to="/" className='font-hand'>
                        <h1 className='text-2xl  font-semibold navbar-logo'>NUTRIBITES</h1>
                    </Link>
                    <div className="md:hidden">
                        <button className="text-gray-500 hover:text-gray-800 navbar-item" onClick={() => setState(!state)}>
                            {state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-evenly items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        <div className=' justify-between items-center space-y-6 md:flex md:space-x-6 md:space-y-0 '>

                        {navigation.map((item, idx) => (
                            <li key={idx} className=" font-semibold hover:text-slate-600 cursor-pointer navbar-item">
                                <Link to={item.path} className="block">
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        </div>
                        

                    </ul>
                </div>

                <div className={`flex items-center justify-between py-3 md:py-5 md:block ${state ? 'block' : 'hidden'}`}>
               
                        <ul className='space-y-3 items-center gap-x-6 md:flex md:space-y-0 navbar-item  '>
                            {user ? (
                                <div className="flex items-center space-x-6">
                                    <Link to="/" className='flex items-center'>
                                        <img src={user.photoURL} alt="Profile" className="rounded-full w-8 h-8 mr-2" />
                                        <span className="text-green-600">{user.displayName}</span>
                                    </Link>
                                    <li>
                                        <Link onClick={handleLogout}  className="block py-2 px-4 font-medium text-center text-white bg-green-600 hover:bg-green-500 active:bg-green-700 active:shadow-none rounded-lg shadow md:inline-block">
                                            Log Out
                                        </Link>
                                    </li>
                                </div>
                            ) : (
                                <li>
                                    <Link to="/login" className="block py-2 px-4 font-medium text-center text-white bg-green-600 hover:bg-green-500 active:bg-green-700 active:shadow-none rounded-lg shadow md:inline-block">
                                        Log in
                                    </Link>
                                </li>
                            )}
                        </ul>
                </div>

            </div>
        </nav>



    );
};

export default Navbar;
