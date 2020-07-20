import './App.css';
import Navbar from './components/Navbar';
import {Switch , Route, Redirect} from 'react-router-dom'
import Charecters from './components/CharectersComponet.js'; 
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';
import React, { Component } from 'react'

 

class App extends Component {
  
   render() {
    return (
      <div className="App">
      <Navbar />
      <Switch>
        <Route  path ='/' exact  component={Charecters} />
        <Route  path ='/about'  component={About} />
        <Route  path ='/series'  component={Contact} />
        <Route  path ='/comics'  component={Service} />
        <Redirect to='/' />
      </Switch>
      
    </div>
    )
  }
}


export default App;
