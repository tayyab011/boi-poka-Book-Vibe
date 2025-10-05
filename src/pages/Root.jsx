import React, { createContext, useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { getStoredBook, getStoredWish } from '../utility/AddtoDb';
export const ReadContext =createContext();

const Root = () => {
const [readCount,setReadCount]=useState([])
const [wishCount,setWishCount]=useState([])

/* const readdata = { readCount, setReadCount };
const wishdata = { wishCount, setWishCount }; */
 useEffect(() => {
   const readLocalData = getStoredBook() || [];
   const wishLocalData = getStoredWish() || [];

   // You can store IDs or books depending on how AddtoDb works
   setReadCount(readLocalData );
   setWishCount(wishLocalData );
 }, []);
    return (
      <div className="w-11/12 mx-auto">
        <ReadContext.Provider
          value={{ readCount, setReadCount, wishCount, setWishCount }}
        >
          <Navbar />

          <Outlet />
          <Footer />
        </ReadContext.Provider>
      </div>
    );
};

export default Root;