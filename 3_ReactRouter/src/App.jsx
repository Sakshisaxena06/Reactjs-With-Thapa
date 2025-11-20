import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Home } from "./pages/Home";
import { Contact, contactData } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { GetMoviesData } from "./api/GetApiData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMoviesDetails } from "./api/GetMovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "movie", element: <Movie />, loader: GetMoviesData },
        {
          path: "movie/:movieID",
          element: <MovieDetails />,
          loader: getMoviesDetails,
        },
        { path: "contact", element: <Contact /> , action: contactData },
      ],
    },
  ]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
