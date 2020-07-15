import './App.css';
import Navbar from './components/Navbar';
import {Switch , Route, Redirect} from 'react-router-dom'
import Charecters from './components/CharectersComponet.js'; 
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';
import React, { Component } from 'react'
//import api from 'marvel-api'
import CryptoJS from 'crypto-js'

// var marvel = new Marvel({ publicKey: "ee182f248ccfa43f509148540e539433", privateKey: "2dafafc5122792c3486bddeb1fe227aab1dd0def"})
//var api = require('marvel-api');
 
// var marvel = api.createClient({
//   publicKey: 'ee182f248ccfa43f509148540e539433',
//   privateKey: '2dafafc5122792c3486bddeb1fe227aab1dd0def'
// });
 
// let ts = new Date().getTime();
// let hash = CryptoJS.MD5(ts + '2dafafc5122792c3486bddeb1fe227aab1dd0def' + 'ee182f248ccfa43f509148540e539433').toString();
// let url = `?ts=${ts}&apikey=ee182f248ccfa43f509148540e539433&hash=${hash}`

 class App extends Component {
  constructor(props) {
    super(props);
    this.state={
       url : "",
       currName: ""
    }
  } 
  componentDidMount(){ 
    // marvel.characters.findAll()
    // .then( (res) => {
    //     let x =  res.data[0].resourceURI;
    //     console.log(res);
    //    this.setState({
    //      currName : res.data[0].name,
    //      url : x
    //    });
    //    console.log(this.state.currName);
    // })
    // .fail(console.error)
    // .done();
    }
   render() {
    
    return (
      <div className="App">
      <Navbar />
      <Switch>
        <Route  path ='/' exact  component={Charecters} />
        <Route  path ='/about'  component={About} />
        <Route  path ='/contact'  component={Contact} />
        <Route  path ='/service'  component={Service} />
        <Redirect to='/' />
      </Switch>
      
    </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Switch>
//         <Route  path ='/' exact  component={Home} />
//         <Route  path ='/about' exact component={About} />
//         <Route  path ='/contact' exact component={Contact} />
//         <Route  path ='/service' exact component={Service} />
//         <Redirect to='/' />
//       </Switch>
      
//     </div>
//   );
// }

export default App;
