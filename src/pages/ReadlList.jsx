import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook, getStoredWish } from "../utility/AddtoDb";
import Book from "./Book"
import { ReadContext } from "./Root";

const ReadlList = () => {
  const { readCount, setReadCount, wishCount, setWishCount } = useContext(ReadContext);

  const [sort, setSort] = useState("");
  /* const [readList,setReadList]=useState([]) */
 /*  const [wishList, setWishList] = useState([]); */
  const data = useLoaderData();

  useEffect(() => {
    const readLocalData = getStoredBook();
    const wishLocalData = getStoredWish();

    const localReadData = readLocalData?.map((e) => Number(e));
    const localwishData = wishLocalData?.map((e) => Number(e));

    const allReadData = data?.filter((book) =>
      localReadData.includes(book.bookId)
    );

    const allwishData = data?.filter((book) =>
      localwishData.includes(book.bookId)
    );
    setReadCount(allReadData);
    setWishCount(allwishData);

    /* setReadCount(readList); */
  }, []);

  const handleSort=(type)=>{
setSort(type)

if (type === "pages") {
  const sortedPage = [...readCount]?.sort((a, b) => a.totalPages - b.totalPages);
  setReadCount(sortedPage);
}
if (type === "ratings") {
  const sortedRating = [...readCount]?.sort((a, b) => b.rating - a.rating);
  setReadCount(sortedRating);
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
      {/* <Tabs>
        <TabList>
          <Tab>
            {" "}
            <span className="font-bold">ReadList</span>{" "}
          </Tab>
          <Tab>
            {" "}
            <span className="font-bold">WishList</span>{" "}
          </Tab>
        </TabList>

        <TabPanel>
          <h2 className="font-bold">ReadBook List: {readCount?.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-7 mx-4 my-5 py-5">
            {readCount?.map((e) => (
              <Book key={e.bookId} bookdetail={e} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="font-bold">My WishList: {wishCount?.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-7 mx-4 my-5 py-5">
            {wishCount?.map((e) => (
              <Book key={e.bookId} bookdetail={e} />
            ))}
          </div>
        </TabPanel>
      </Tabs> */}
      <h2 className="font-bold">ReadBook List: {readCount?.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-7 mx-4 my-5 py-5">
        {readCount?.map((e) => (
          <Book key={e.bookId} bookdetail={e} />
        ))}
      </div>
    </div>
  );
};

export default ReadlList;
