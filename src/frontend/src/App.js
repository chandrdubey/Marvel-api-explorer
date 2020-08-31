import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route} from "react-router-dom";
import { connect } from "react-redux";
import Charecters from "./components/CharectersComponet.js";
import Comics from "./components/ComicsComponent";
import React, { Component } from "react";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import Home from "./components/HomeComponent";
import CharecterPage from "./components/CharcterPageComponent";
import ComicPage from "./components/ComicPageComponent";
import * as jwtDecode from "jwt-decode";
import { authenticateUserAction } from "./actions/authAction";
import {
  getFavCharectersAction,
  getFavComicsAction,
} from "./actions/getDataAction";
import FavouriteComponet from "./components/FavouriteComponet";
import Page404 from "./components/Page404Component"

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      this.props.authenticateUser(user);
      this.props.getFavCharecters(user.id);
      this.props.getFavComics(user.id);
    }
   
  }

  render() {
    
    return (
      <div className="App">
        <Navbar />
        {/* Switch matches the route one by one until it  matches a route */}
        <Switch>
          {/*Route provides the history in props so we  can redirect using props.history.push */}
          <Route path="/" exact component={Home} />
          <Route path="/charecters" exact component={Charecters} />
         
          <Route path="/charecters/:id" component={CharecterPage} />
          <Route path="/signup" component={RegisterComponent} />
          <Route path="/users/:id/favourites" component={FavouriteComponet} />
          <Route path="/comics/:id" component={ComicPage} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/comics" component={Comics} />

          {/* <Route  path ='/comics/:id'  component={ComicPage} /> */}
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (user) => dispatch(authenticateUserAction(user)),
    getFavCharecters: (userId) => dispatch(getFavCharectersAction(userId)),
    getFavComics: (userId) => dispatch(getFavComicsAction(userId)),
  };
};

export default connect(null, mapDispatchToProps)(App);
