import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { loginUserAction } from '../actions/authAction';

 class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state= {
          password: "",
          email :"" 
        }
      }
      handleChange = (event) =>{
        const {name , value} = event.target;
        this.setState({
          [name] : value
        })
      }
     handleOnSubmit = (event) =>{
       event.preventDefault();

       const data = { 
         password: this.state.password,
         email: this.state.email
       }
       this.props.loginUser(data);
      //   console.log(this.props.history);
      //   //histry in props is used to redirect
             
      //   // axios.post('http://localhost:5000/login', data)
      //   // .then(response => console.log(response))
      //   // .catch(function (error) {
      //   //   console.log(error);
      //   // });
      // //  this.props.history.push('/comics');
    
     }
      
    render() {
        return (
            <div className="container-fluid nav_bg ">
        <div className="row">
          <div className="col-10 mx-auto">
            <form  onSubmit ={this.handleOnSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email :</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                 name= "email"
                 value={this.state.email}
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange = {this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  id="exampleInputPassword1"
                  onChange = {this.handleChange}
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
        )
    }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    loginUser : (data) => dispatch(loginUserAction(data))
  }
}
const mapStateToProps = ({auth}) =>{
  return{
     auth
  }
}
  


export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);