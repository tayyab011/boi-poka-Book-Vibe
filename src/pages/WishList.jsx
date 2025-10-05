import React, { useContext, useEffect, useState } from 'react';
import { ReadContext } from './Root';
import { useLoaderData } from 'react-router-dom';
import { getStoredWish } from '../utility/AddtoDb';
import Book from './Book';

const WishList = () => {
      const {  wishCount, setWishCount } = useContext(ReadContext);

        const [sort, setSort] = useState("");

  const data = useLoaderData();

  useEffect(() => {
    const wishLocalData = getStoredWish();

    const localwishData = wishLocalData?.map((e) => Number(e));

  

    const allwishData = data?.filter((book) =>
      localwishData?.includes(book?.bookId)
    );

    setWishCount(allwishData);

    
  }, []);

/*   const handleSort=(type)=>{
setSort(type)

if (type === "pages") {
  const sortedPage = [...readCount]?.sort((a, b) => a.totalPages - b.totalPages);
  setReadCount(sortedPage);
}
if (type === "ratings") {
  const sortedRating = [...readCount]?.sort((a, b) => b.rating - a.rating);
  setReadCount(sortedRating);
}
} */
    return (
      <div>
        <h2 className="font-bold">My Wish List: {wishCount?.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-7 mx-4 my-5 py-5">
          {wishCount?.map((e) => (
            <Book key={e.bookId} bookdetail={e} />
          ))}
        </div>
      </div>
    );
};

export default WishList;