import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import "./App.css" ;
import { ErrorPage } from "./pages/ErrorPage";
import { GetMoviesData } from "./api/GetApiData";
const App =()=>{

  const router = createBrowserRouter([
    
     {
      path:"/",
      element:<AppLayout/>,
      errorElement: <ErrorPage/>,
      children:[
          {
      path:"/",
      element:<Home/>
    },

     {
      path:"about",
      element:<About/>,
    },

     {
      path:"movie",
      element:<Movie/>,
      loader: GetMoviesData,
    },

     {
      path:"contact",
      element:<Contact/>,
    },

    // {
    //   path:"*",
    //   element:<ErrorPage/>
    // }
      ]
     }
  ]);
  return <RouterProvider router={router} /> ;
};
export default App;