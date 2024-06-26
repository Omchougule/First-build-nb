import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { auth } from '../../views/Login/config';
import { useUserContext } from '../../context/Authcontext';
import axios from 'axios';

const Profile = () => {
    const { user, setUser } = useUserContext()
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [userPhoto, setUserPhoto] = useState("")

    useEffect(() => {
        if (user?.id) {
            setUserName(user.userName);
            setUserEmail(user.email);
            setPhoneNumber(user.phoneNumber);
            setAddress(user.address);
            // setUserPhoto(user.photoURL);
        }
    }, [user?.id])


    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleUpdateProfile = async () => {
        // localStorage.setItem('phoneNumber', phoneNumber);
        // localStorage.setItem('address', address);
        const res = await axios.post('http://localhost:5000/updateuser', {
            email: user?.email,
            updatedemail: userEmail,
            userName: userName,
            phoneNumber: phoneNumber,
            address: address,
            userPhoto : userPhoto
        })

        if (res.data.success) {
            if (res.data.message == "User updated successfully") {
                setUser({
                    id: res.data.data._id,
                    email: res.data.data.email,
                    sessionId: res.data.data.sessionId,
                    userName: res.data.data.userName,
                    phoneNumber: res.data.data.phoneNumber,
                    address: res.data.data.address,
                    userPhoto : res.data.data.userPhoto
                })
                toast.success('Profile updated!');
            }
            else if (res.data.message == "User not found!") {
                toast.error('User not found!')
            }
        }
        else {
            toast.error('Something went wrong!')
        }

    };

    const selectimg = (e)=>{
        // console.log(e.target.src);
        setUserPhoto(e.target.src)
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
                {/* <img src={userPhoto} alt="User" className="h-20 w-20 rounded-full ml-auto" /> */}
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
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-between">

                            <img onClick={selectimg} className='h-20 w-20 rounded-full object-cover cursor-pointer border-black ' src="https://i.pinimg.com/564x/13/ac/c5/13acc5169bb5040b48a38168be255cde.jpg" alt="" />
                            <img onClick={selectimg} className='h-20 w-20 rounded-full object-cover cursor-pointer' src="https://i.pinimg.com/564x/3d/d5/5c/3dd55c1301ff9bf6ace8d7760625c07c.jpg" alt="" />
                            <img onClick={selectimg}  className='h-20 w-20 rounded-full object-cover cursor-pointer' src="https://i.pinimg.com/564x/6b/6e/f3/6b6ef332144043c71979051af05a842e.jpg" alt="" />
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
