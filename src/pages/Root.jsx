import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
      <div className="w-11/12 mx-auto">
      
          <Navbar />

          <Outlet />
          <Footer />
    
      </div>
    );
};

export default Root;