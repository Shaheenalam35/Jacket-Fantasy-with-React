import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <CustomLink className="navbar" to="/">
        Home
      </CustomLink>
      <CustomLink className="navbar" to="/reviews">
        Reviews
      </CustomLink>
      <CustomLink className="navbar" to="/Dashboard">
        Dashboard
      </CustomLink>
      <CustomLink className="navbar" to="/blogs">
        Blogs
      </CustomLink>
      <CustomLink className="navbar" to="/about">
        About
      </CustomLink>
    </nav>
  );
};

export default Header;
