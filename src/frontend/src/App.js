import './App.css';
import Navbar from './components/Navbar';
import {Switch , Route, Redirect} from 'react-router-dom'
import Charecters from './components/CharectersComponet.js'; 
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';
import React, { Component } from 'react'
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';

 

class App extends Component {
  
   render() {
    return (
      <div className="App">
      <Navbar />
       {/* Switch matches the route one by one until it  matches the a route */}
      <Switch>               
       {/*Route provides the history in props so we  can redirect using props.history.push */}
        <Route  path ='/' exact  component={ Charecters} />
        <Route  path= '/signup' component = {RegisterComponent} />
        <Route  path ='/about'  component={About} />
        <Route  path ='/login'  component={LoginComponent} />
        <Route  path ='/comics'  component={Service} />
        <Redirect to='/' />
      </Switch>
      
    </div>
    )
  }
}


export default App;
