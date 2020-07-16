import {NavLink} from 'react-router-dom'
import React, { Component } from 'react'
// import CryptoJS from 'crypto-js'
// import axios from 'axios'
import DisplayContent from './DisplayContent';
import {connect} from 'react-redux'
import {getDataAction} from '../actions/getDataAction';
 
// let ts = new Date().getTime();
// let hash = CryptoJS.MD5(ts + '2dafafc5122792c3486bddeb1fe227aab1dd0def' + 'ee182f248ccfa43f509148540e539433').toString();
// let url = `?ts=${ts}&apikey=ee182f248ccfa43f509148540e539433&hash=${hash}`

 class CharecterComponent extends Component {
  
 componentDidMount(){
        console.log(this.props);
        this.props.getAllCharecters();
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
                    this.props.charecters.map(charecter => (
                  
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
const mapDispatchToProps = (dispatch) =>{
  return{
    getAllCharecters : () => dispatch(getDataAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharecterComponent)