// Dashboard.js

import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { auth } from "../Login/config";

const Dashboard = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className="flex h-screen">
        
      {/* Sidebar */}
      <aside className="bg-blue-800 text-white w-1/4 p-4">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li>Overview</li>
          <li>Chat</li>
          <li>Team</li>
          <li>Tasks</li>
          {/* Add more menu items here */}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4">
        {/* Avatar */}
        <div className="flex items-center space-x-2 mb-4">
          <img
            src={auth.currentUser.photoURL}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-green-600">{auth.currentUser.displayName}</span>
        </div>

        {/* Orders */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-semibold mb-2">Orders</h3>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <span className="bg-green-500 text-white px-2 py-1 rounded">
                Ordered
              </span>
            </div>
            <div className="flex items-center">
              <span className="bg-blue-500 text-white px-2 py-1 rounded">
                Delivered
              </span>
            </div>
            {/* Add more order statuses */}
          </div>
        </div>

        {/* Signout */}
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Sign Out
        </button>
      </main>
    </div>
    </>
  );
};

export default Dashboard;
