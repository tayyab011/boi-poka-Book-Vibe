import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredBook } from '../utility/AddtoDb';

const BookDetails = () => {
    const boobsData=useLoaderData()
    const {id}=useParams()
    const booksNumberId =Number(id)
  const matchedData = boobsData.find((book) => book.bookId === booksNumberId);
  const {
    bookId,
    bookName,
    author,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = matchedData;

  const handleMarkAsRead =id=>{
console.log(id)
 addToStoredBook(id)
  }
 
    return (
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <figure className="w-full md:w-[40%]  px-4 py-4 bg-gray-100 rounded-lg mx-auto">
            <img src={image} className="  md:w-92 w-40  mx-auto" />
          </figure>
          <div className="w-full md:w-[50%] space-y-5">
            <h1 className="text-3xl font-bold">{bookName}</h1>
            <p className="text-base py-6">Book By : {author}</p>
            <div className="my-3 border-1 border-dashed"></div>
            <p>
              {" "}
              <span className="font-bold">review</span> {review}
            </p>
            <p className="flex gap-4 items-center">
              <span className="font-bold">Tag</span>
              {tags.map((e) => {
                return (
                  <button className="btn btn-secondary hover:btn-ghost">
                    {e}
                  </button>
                );
              })}
            </p>
            <div className="my-3 border-1 border-dashed"></div>

            <div className="space-y-2">
              <p>
                number of pages :{" "}
                <span className="font-bold">{totalPages}</span>
              </p>
              <p>
                publisher : <span className="font-bold">{publisher}</span>
              </p>
              <p>
                Year of publishing :{" "}
                <span className="font-bold">{yearOfPublishing}</span>
              </p>
              <p>
                Rating: <span className="font-bold">{rating}</span>
              </p>
            </div>
            <div className="flex gap-2 ">
              <button onClick={()=>handleMarkAsRead(id)} className="btn btn-outline">
                Rate
              </button>
              <button className="btn btn-primary">WishList</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;