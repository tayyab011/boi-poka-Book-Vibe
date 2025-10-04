import React from 'react';
import book from "../assets/books.jpg"
const Banner = () => {
    return (
      <div className="hero  py-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="w-full md:w-[40%] rounded-md" src={book} />
          <div className="w-full md:w-[50%] text-black">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;