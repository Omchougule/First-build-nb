import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import {auth} from '../../views/Login/config';

const Profile = () => {
    const [userName, setUserName] = useState(localStorage.getItem('userName') );
    const [userPhoto, setUserPhoto] = useState(localStorage.getItem('userPhoto'));
    const [userEmail, setUserEmail] = useState(localStorage.getItem('email'));
    const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phoneNumber') || '');
    const [address, setAddress] = useState(localStorage.getItem('address') || '');

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleUpdateProfile = () => {
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem('address', address);
        toast.success('Profile updated!');
        // alert('Profile updated!');

    };

    if(!auth.currentUser){
        return <div className="text-center text-5xl font-hand md:-translate-x-28 items-center text-gray-500">User information is not available.</div>;
    }

    return (
        <div className="bg-white overflow-hidden shadow rounded-lg border max-w-2xl mx-auto my-5">
            <div className='flex items-center p-4'>
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        User Profile
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        This is some information about the user.
                    </p>
                </div>
                <img src={userPhoto} alt="User" className="h-20 w-20 rounded-full ml-auto" />
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {userName}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {userEmail}
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Phone number
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <input
                                type="text"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Enter phone number"
                            />
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <textarea
                                value={address}
                                onChange={handleAddressChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Enter address"
                            />
                        </dd>
                    </div>
                </dl>
            </div>
            <div className="px-4 py-4 sm:px-6">
                <button
                    onClick={handleUpdateProfile}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default Profile;
