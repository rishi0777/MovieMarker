import React from "react";
import { BiCameraMovie, BiMoviePlay } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { BsBookmarkHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import port_icon from "../assets/port2.svg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <img className="brand-img" src={port_icon} />
        <div className="headerLeftHeading">&nbsp;Movie-Marker</div>
      </div>
      <div className="headerRight">
        <Link to="/" className="headerRightLinks">
          <GoHome />
          <div>&nbsp;Home</div>
        </Link>
        <Link to="/bookmarked" className="headerRightLinks">
          <BsBookmarkHeart />
          <div>&nbsp;Bookmark</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
