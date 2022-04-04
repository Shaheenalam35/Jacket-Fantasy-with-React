import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <Link className="navbar" to="/">
        Home
      </Link>
      <Link className="navbar" to="/reviews">
        Reviews
      </Link>
      <Link className="navbar" to="/Dashboard">
        Dashboard
      </Link>
      <Link className="navbar" to="/blogs">
        Blogs
      </Link>
      <Link className="navbar" to="/about">
        About
      </Link>
    </nav>
  );
};

export default Header;
