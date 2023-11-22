// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/articles" className="nav-link">Articles</Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/articles/:articleId" className="nav-link">Article</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
