import React from "react";
import { NavLink } from "react-router-dom";
import { connect} from "react-redux";
import { logOutUserAction} from "../actions/authAction"          

function Navbar(props) {
  let handleLogOut = () =>{
     props.dispatch(logOutUserAction());
     
  }
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row navrow">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-dark navbar-default navbar-fixed-top">
              <NavLink className="navbar-brand" exact to="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSs9gnknrxWOf5heO6HSKt15W5gRzXGhjqkXg&usqp=CAU" alt="marvel logo"></img>
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

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      exact
                      to="/charecters"
                    >
                      characters
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      exact
                      to="/comics"
                    >
                      Comics
                    </NavLink>
                  </li>
                  {props.auth.isLoggedIn ? (
                    <>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact
                          to={`/users/${props.auth.currentUser.id}/favourites`}
                        >
                          Favourites
                        </NavLink>
                      </li>
                      <li className="nav-item"  onClick = {handleLogOut}>
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact
                          to="/login"
                         
                        >
                          Log Out
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                     
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact
                          to="/login"
                        >
                          log in
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          exact
                          to="/signup"
                        >
                          sign up
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
//const mapDispatchToProps = ()
const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
export default connect(mapStateToProps)(Navbar);
