import React, { useState } from 'react';
import { LandingPage } from '../Pages/LandingPage';
import { DashboardMenu } from '../Pages/DashboardMenu';

export const Home = () => {
  const [showDashboardMenu, setShowDashboardMenu] = useState(false);

  const handleclick = () => {
    setShowDashboardMenu(!showDashboardMenu);
  };

  return (
    <>
      {/* <button
        onClick={handleclick}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Dashboard
        </span>
      </button>

      {showDashboardMenu && <DashboardMenu />}

      <button
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Landing
        </span>
      </button> */}
      <DashboardMenu/>
      {/* <LandingPage/> */}
    </>
  );
};

