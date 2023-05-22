import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NewsDaILY
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/helth">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className={`form-check form-switch text-${mode === "light" ? "dark" : "light"}`}>
              <input
                className="form-check-input"
                onClick={this.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable Dark Mode
              </label>
            </div> */}
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
