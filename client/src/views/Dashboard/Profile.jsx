import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { auth } from '../../views/Login/config';
import { useUserContext } from '../../context/Authcontext';
import axios from 'axios';

const Profile = () => {
    const { user, setUser } = useUserContext();
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [userPhoto, setUserPhoto] = useState("");
    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(() => {
        if (user?.id) {
            setUserName(user.userName);
            setUserEmail(user.email);
            setPhoneNumber(user.phoneNumber);
            setAddress(user.address);
            setUserPhoto(user.userPhoto);
        }
    }, [user?.id]);

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleUpdateProfile = async () => {
        const res = await axios.post('http://localhost:5000/updateuser', {
            email: user?.email,
            updatedemail: userEmail,
            userName: userName,
            phoneNumber: phoneNumber,
            address: address,
            userPhoto: userPhoto
        });

        if (res.data.success) {
            if (res.data.message === "User updated successfully") {
                setUser({
                    id: res.data.data._id,
                    email: res.data.data.email,
                    sessionId: res.data.data.sessionId,
                    userName: res.data.data.userName,
                    phoneNumber: res.data.data.phoneNumber,
                    address: res.data.data.address,
                    userPhoto: res.data.data.userPhoto
                });
                toast.success('Profile updated!');
            } else if (res.data.message === "User not found!") {
                toast.error('User not found!');
            }
        } else {
            toast.error('Something went wrong!');
        }
    };

    const selectImg = (index, src) => {
        setSelectedImg(index);
        setUserPhoto(src);
    };

    const images = [
        
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?ga=GA1.1.784385548.1718181495",
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.784385548.1718181495&semt=ais_user",
        // "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?size=626&ext=jpg&ga=GA1.1.784385548.1718181495&semt=ais_user",
        "https://img.freepik.com/free-vector/gradient-avatar-illustration_23-2150891933.jpg?ga=GA1.1.784385548.1718181495",
        // "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671138.jpg?ga=GA1.1.784385548.1718181495",
        "https://img.freepik.com/free-vector/gradient-avatar-illustration_23-2150891915.jpg?ga=GA1.1.784385548.1718181495",

    ];

    return (
        <div className="bg-white overflow-hidden shadow rounded-lg border max-w-2xl mx-auto my-5">
            <div className='flex items-center p-4'>
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-4xl leading-6 font-hand  text-gray-900">
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
                            <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Enter Your Username"
                            />
                        </dd>
                    </div>
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">
                            Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <input
                                type="text"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Enter Your Email"
                            />
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
                            Avatar
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between overflow-auto">
                            {images.map((src, index) => (
                                <img
                                    key={index}
                                    onClick={() => selectImg(index, src)}
                                    className={`h-20 w-20 rounded-full object-cover cursor-pointer ${selectedImg === index ? 'border-4 border-green-500' : ''}`}
                                    src={src}
                                    alt={`image-${index}`}
                                />
                            ))}
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
