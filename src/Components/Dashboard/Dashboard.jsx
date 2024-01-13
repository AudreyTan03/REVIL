// Dashboard.jsx

import React from 'react';
import Sidebar from './SideBarSection/Sidebar';  // Corrected import path
import Body from './Body Section/Body';   
import '../../App.css';   // Corrected import path

const Dashboard = () => {
  return (
    <div className='dashboard flex'>
      <div className='container dashboardContainerflex'>
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};

export default Dashboard;
