import './App.css';
import Navbar from './components/Navbar';
import {Switch , Route, Redirect} from 'react-router-dom'
import { connect } from "react-redux";
import Charecters from './components/CharectersComponet.js'; 
import Contact from './components/Contact';
import About from './components/About';
import Comics from './components/ComicsComponent';
//import ComicPage from './components/ComicPageComponet'
import React, { Component } from 'react'
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';
import Home from './components/HomeComponent'
import CharecterPage from './components/CharcterPageComponent'
import ComicPage from './components/ComicPageComponent'
import * as jwtDecode from "jwt-decode";
import { authenticateUserAction } from './actions/authAction';
import { getFavCharectersAction, getFavComicsAction } from './actions/getDataAction';
 

class App extends Component {
  componentDidMount(){
    const token = localStorage.getItem('token');
    if(token){
        const user = jwtDecode(token);
        this.props.authenticateUser(user);
        this.props.getFavCharecters(user.id);
        this.props.getFavComics(user.id)
    }

  }
  
   render() {
    return (
      <div className="App">
      <Navbar />
       {/* Switch matches the route one by one until it  matches the a route */}
      <Switch>               
       {/*Route provides the history in props so we  can redirect using props.history.push */}
        <Route  path ='/' exact  component={Home} /> 
        <Route  path ='/charecters' exact component={Charecters} />
        <Route  path ='/charecters/:id' component={CharecterPage} />
        <Route  path= '/signup' component = {RegisterComponent} />
        <Route  path ='/about'  component={About} />
        <Route path='/comics/:id' component={ComicPage} />
        <Route  path ='/login'  component={LoginComponent} />
        <Route  path ='/comics'  component={Comics} />
        {/* <Route  path ='/comics/:id'  component={ComicPage} /> */}
        <Redirect to='/' />
      </Switch>
      
    </div>
    )
  }
  }

const mapDispatchToProps = (dispatch) =>{
  return{
    authenticateUser : (user) => dispatch(authenticateUserAction(user)),
    getFavCharecters : (userId) => dispatch(getFavCharectersAction(userId)),
    getFavComics  : (userId) => dispatch(getFavComicsAction(userId))
    
  }
}

export default connect(null,mapDispatchToProps)(App);
