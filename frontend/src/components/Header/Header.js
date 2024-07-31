import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand ps-2" to="/">
        Home
      </Link>
      <button
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className="navbar-toggler"
        data-target="#navbarNav"
        data-toggle="collapse"
        type="button"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/cart">
              Cart
              <span className="ps-1">
                <i className="fa fa-shopping-cart"></i>
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/account">
              Account
              <span className="ps-1">
                <i className="fa fa-user"></i>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
