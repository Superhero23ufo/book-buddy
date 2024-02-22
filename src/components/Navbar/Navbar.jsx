import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import Button from "@mui/material/Button";
// import axios from "axios";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/" className="navbar-brand flex">
            <img
              src="https://s3.us-east-2.amazonaws.com/poetry-tpf-production/uploads/contentImages/_1200x630_crop_center-center_82_none/Harriet-Books-SEO.png?mtime=1619639579"
              alt="books"
            />
            <p className="text-uppercase fw-7 fs-24 ls-1">B</p>
            <p>ook</p>
            {/* <span className="text-uppercase fw-7 fs-24 ls-1">B</span> */}
            <p className="text-uppercase fw-7 fs-24 ls-1">B</p>
            <p>uddy</p>
          </Link>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="recommendations"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                // onClick={getOrderBhai}
              >
                Recommend
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="book"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                // onClick={getOrderBhai}
              >
                Books
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="readlist"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                Readlist
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="ratedlist"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                Ratedlist
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="contact"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                Contact
              </Link>
            </li> */}
            <li className="nav-item">
              {/* <button className="nav-item text-uppercase">Login</button> */}
              <a href="/login">
                <button className="nav-item text-uppercase">Login</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
