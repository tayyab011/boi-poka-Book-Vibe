import React from 'react';
import Banner from '../components/Banner';

import { useLoaderData } from 'react-router-dom';
import Books from './Books';

const Home = () => {
    const bookData=useLoaderData()
 
    return (
      <div className="bg-gray-200">
        <Banner />
        <Books bookData={bookData} />
      </div>
    );
};

export default Home;