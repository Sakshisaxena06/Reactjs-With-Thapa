import React from "react";
import { NavLink } from "react-router-dom";

export const Footers = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 ThapaTechnical. All Rights Reserved.</p>

        <ul className="footer-links">
          {/* <li>
            <NavLink to="/">Home</NavLink>
          </li> */}
          {/* <li>
            <a href="https://www.instagram.com/thapatechnical/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li> */}
          {/* <li>
            <a href="https://thapatechnical.shop/source-code" target="_blank" rel="noopener noreferrer">
              Source Code
            </a>
          </li> */}
          {/* <li>
            <NavLink to="/contact">Contact</NavLink>
          </li> */}
        </ul>
      </div>
    </footer>
  );
};
