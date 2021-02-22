import "./App.css";
import React, { Component } from "react";
//import Navbar from "./components/Navbar";
import { Switch, Route} from "react-router-dom";
import { connect } from "react-redux";
// import Charecters from "./components/CharectersComponet";
// import Comics from "./components/ComicsComponent";
// 
// import RegisterComponent from "./components/Register";
// import LoginComponent from "./components/Login";
// import Home from "./components/Home";
//import CharecterPage from "./components/CharcterPage";
//import ComicPage from "./components/ComicPage";
//import jwt from "jsonwebtoken"
import jwt from "jwt-decode"
import { authenticateUserAction } from "./actions/authAction";
import {
  getFavCharectersAction,
  getFavComicsAction,
  isLoadingAction,
} from "./actions/getDataAction";
//import FavouriteComponet from "./components/FavouriteComponet";
//import Page404 from "./components/Page404Component"
import { CharcterPage, Charecters, ComicPage, Comics, Favourite, Home, Login, Navbar, Page404, Register } from "./components";

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    console.log(token);
    console.log(process.env.REACT_APP_MARVEL_API_PUBLIC_KEY);
    if (token) {
        const decoded = jwt(token);
        let ts = new Date().getTime();
        // console.log(ts < decoded.exp * 1000);
        if (ts < decoded.exp * 1000) {
          this.props.Loading();
          this.props.authenticateUser(decoded);
          this.props.getFavCharecters(decoded.id);
          this.props.getFavComics(decoded.id);
        }else{
          localStorage.removeItem("token");
        }
    
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
          <Route path="/charecters/:id" exact component={CharcterPage} />
          <Route path="/signup" component={Register} />
          <Route path="/users/:id/favourites" exact component={Favourite} />
          <Route path="/comics/:id" exact component={ComicPage} />
          <Route path="/login" component={Login} />
          <Route path="/comics" exact component={Comics} />
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
    Loading: ()=> dispatch(isLoadingAction())
  };
};

export default connect(null, mapDispatchToProps)(App);
