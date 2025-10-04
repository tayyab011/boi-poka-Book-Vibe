import React from 'react';
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Book = ({ bookdetail }) => {
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
    } = bookdetail;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 shadow-sm p-5">
        <figure className="px-4 py-4 bg-gray-100 w-2/3 mx-auto">
          <img src={image} className="h-40 w-40 rounded-full" alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-3">
            {tags.map((e) => {
              return (
                <button className="btn btn-secondary hover:btn-ghost">
                  {e}
                </button>
              );
            })}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p className="text-base">Book By : {author}</p>
          <span className="my-3 border-1 border-dashed"></span>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              <span>
                <IoMdStar />
              </span>
              {rating}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;