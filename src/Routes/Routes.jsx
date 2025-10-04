import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../pages/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import BookDetails from "../pages/BookDetails";
/* import Book from "../pages/Book"; */


 const route = createBrowserRouter([
   {
     path: "/",
     element: <Root />,
     children: [
       {
         index: true,
         loader: () => fetch("/public/booksData.json"),
         element: <Home />,
       },
       {
         path: "/about",
         element: <About />,
       },
       {
         path: "/bookDetails/:id",
         loader: () => fetch("/public/booksData.json"),
         element: <BookDetails />,
       },
     ],
   },
 ]);

export default route;