import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook, getStoredWish } from "../utility/AddtoDb";
import Book from "./Book";

const ReadlList = () => {
    const [sort,setSort]=useState("")
const [readList,setReadList]=useState([])
const [wishList, setWishList] = useState([]);
    const data=useLoaderData();
    
useEffect(()=>{
  const readLocalData = getStoredBook();
  const wishLocalData = getStoredWish();
  const localReadData = readLocalData.map((e) => Number(e));
  const localwishData = wishLocalData.map((e) => Number(e));
   const allReadData = data.filter((book) =>
     localReadData.includes(book.bookId)
   );

   const allwishData = data.filter((book) =>
     localwishData.includes(book.bookId)
   );
setReadList(allReadData);
setWishList(allwishData);

 
},[])
    
const handleSort=(type)=>{
setSort(type)

if (type === "pages") {
  const sortedPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
  setReadList(sortedPage);
}
if (type === "ratings") {
  const sortedRating = [...readList].sort((a, b) => a.rating - b.rating);
  setReadList(sortedRating);
}
}


  return (
    <div>
      <div className="dropdown my-5">
        <div tabIndex={0} role="button" className="btn m-1">
          sort by : {sort && sort}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a onClick={() => handleSort("pages")}>pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>ratings</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>ReadList</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <h2>ReadBook List: {readList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-7 mx-4 my-5 py-5">
            {readList.map((e) => (
              <Book key={e.bookId} bookdetail={e} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My WishList: {wishList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-7 mx-4 my-5 py-5">
            {wishList.map((e) => (
              <Book key={e.bookId} bookdetail={e} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadlList;
