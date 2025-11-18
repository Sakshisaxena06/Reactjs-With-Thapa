import React from "react";
import { useLoaderData, NavLink } from "react-router-dom";

export const MovieDetails = () => {
  const movieData = useLoaderData();
  console.log(movieData);

  const { Actor, Poster, Title, Type, Year, Plot, BoxOffice, imdbID } = movieData;

  return (
    <li className="hero-container hero-movie-container">
      <div className="main-container">
        
        <div className="poster-container">
          <NavLink to="#">
            <img src={Poster} className="poster" alt={Title} />
          </NavLink>
        </div>

        <div className="ticket-container">
          <div className="ticket__content">
            <h4 className="ticket__movie-title">{Title}</h4>

            <p className="ticket__current-price">Type: {Type}</p>
            <p className="ticket__current-price">Year: {Year}</p>
            <p className="ticket__current-price">Actors: {Actor}</p>
            <p className="ticket__current-price">Box Office: {BoxOffice}</p>
            <p className="ticket__current-price">Plot: {Plot}</p>

            <button className="ticket__buy-btn">Watch Now</button>
          </div>
        </div>

      </div>
    </li>
  );
};
