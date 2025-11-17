// import { a} from "react-router-dom";
import React from "react";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <header className="section-navbar">
        <section className="top-txt">
          <div className="container  top-bar-grid">
            <div className="head_txt">
              <p>Get Thapa</p>
            </div>
            <div className="sign_in_up">
              <NavLink to="#">Sign IN</NavLink>
              <NavLink to="#">Sign Up</NavLink>
            </div>
          </div>
        </section>

        <div className="container navbar-grid">
          <div className="navbar_brand">
            <NavLink to="/">
              <p>Thapa flex</p>
            </NavLink>
          </div>

          <nav className="menu-web">
            <ul>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/movie" className="nav-link">
                  Movie
                </NavLink>
              </li>

               <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
