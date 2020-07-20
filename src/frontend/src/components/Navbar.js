import React from "react";
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row navrow">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-dark bg-light">
              <NavLink className="navbar-brand" exact  to="/">
                MARVEL
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink activeClassName='menu_active' className="nav-link" exact  to="/">
                      characters
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName='menu_active' className="nav-link" exact  to="/comics">
                     Comics
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName='menu_active' className="nav-link" exact  to="/series">
                      Series
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName='menu_active' className="nav-link" exact  to="/about">
                      About
                    </NavLink>
                  </li>
                  </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
