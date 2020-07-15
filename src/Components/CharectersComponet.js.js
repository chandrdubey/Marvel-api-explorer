import {NavLink} from 'react-router-dom'
import React, { Component } from 'react'
import CryptoJS from 'crypto-js'
import axios from 'axios'
import DisplayContent from './DisplayContent';
import {connect} from 'react-redux'
 
let ts = new Date().getTime();
let hash = CryptoJS.MD5(ts + '2dafafc5122792c3486bddeb1fe227aab1dd0def' + 'ee182f248ccfa43f509148540e539433').toString();
let url = `?ts=${ts}&apikey=ee182f248ccfa43f509148540e539433&hash=${hash}`

 class CharecterComponent extends Component {
   constructor(props) {
     super(props);
     this.state={
       charecters: []
     }
   }
 componentDidMount(){
        axios.get(`https://gateway.marvel.com:443/v1/public/characters${url}`)
       .then( (response) => {
         this.setState({
           charecters : response.data.data.results
         });
       // handle success
      console.log(response.data.data.results);
     })
     .catch(function (error) {
    // handle error
    console.log(error);
    });

   }
   
  render() {
    console.log(this.props);
    return (
      <>
        <section id="header" className=" d-flex align-items-center">
          <div className="container-fluid nav_bg ">
            <div className="row">
              <div className="col-10 mx-auto">
                <h1>Marvel Charecters</h1> 
                <div className="row ">
                 {
                    this.state.charecters.map(charecter => (
                  
                        <div key={charecter.id} className = "col-4">
                        <DisplayContent charecter = {charecter}  />
                        </div>
                    ))       
                 }
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
const mapStateToProps = (state) =>{
    return {
        charecters : state.charecters
    }
}

export default connect(mapStateToProps)(CharecterComponent)