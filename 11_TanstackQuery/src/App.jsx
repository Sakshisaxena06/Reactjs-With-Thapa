import React, { Children } from 'react'
import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import { MainLayout } from './components/Layout/MainLayout';
import { Home } from './Pages/Home';
import { FetchRQ } from './Pages/FetchRQ';
import { FetchOld } from './Pages/FetchOld';
import { FetchIndv } from './components/UI/FetchIndv';
import {QueryClientProvider} from "@tanstack/react-query"
import {QueryClient} from "@tanstack/react-query" ;
import "./App.css"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout/>,
    children:[
     { 
      path:"/",
      element:<Home/>,
    },
     { 
      path:"/trad",      
      element:<FetchOld/>,  
    },
     { 
      path:"/rq",
      element:<FetchRQ/>,  
    },
     { 
      path:"/trad/:id",      
      element:<FetchIndv/>,  
    },

    ]
  } 

])
const App = () => {

  const queryClient = new QueryClient();
 return <QueryClientProvider client={queryClient}>
<RouterProvider router={router}> </RouterProvider>
<ReactQueryDevtools initialIsOpen={false} />
 </QueryClientProvider>
  
  
}

export default App