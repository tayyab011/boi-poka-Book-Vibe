import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../pages/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import BookDetails from "../pages/BookDetails";
/* import Book from "../pages/Book"; */
import ReadlList from './../pages/ReadlList';
import WishList from './../pages/WishList';


 const route = createBrowserRouter([
   {
     path: "/",
     element: <Root />,
     children: [
       {
         index: true,
         loader: () => fetch("/booksData.json"),
         element: <Home />,
       },
       {
         path: "/about",
         element: <About />,
       },
       {
         path: "/bookDetails/:id",
         loader: () => fetch("/booksData.json"),
         element: <BookDetails />,
       },
       {
         path: "/readList",
         loader: () => fetch("/booksData.json"),
         element: <ReadlList />,
       },
       {
         path: "/wishList",
         loader: () => fetch("/booksData.json"),
         element: <WishList/>,
       },
     ],
   },
 ]);

export default route;