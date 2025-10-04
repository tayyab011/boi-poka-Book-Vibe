import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Book from "../pages/Book";


 const route = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
       { index:true,
        element:<Home/>

       },
       { 
        path:"book",
        element:<Book/>

       },
    ]
  },
]);

export default route;