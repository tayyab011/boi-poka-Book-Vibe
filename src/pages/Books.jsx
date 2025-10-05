import React, { Suspense } from 'react';
import Book from './Book';

const Books = ({ bookData }) => {
 
  return (
    <div>
      <Suspense fallback={<h1>loading...</h1>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-7 mx-4 my-5 py-5">
          {bookData?.map((bookdetail) => {
            return <Book key={bookdetail.bookId} bookdetail={bookdetail} />;
          })}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;