
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
      {/* <LandingPage/> */}
      <DashboardMenu/>
    </>
  );
};

