import React, { Component } from "react";
import { registerUserAction } from "../actions/authAction";
import { connect } from "react-redux";
import { Redirect} from 'react-router-dom';


 class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state= {
      name : "",
      password: "",
      email :"",
      confirm_password:""
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
     name : this.state.name,
     password:this.state.password,  
     email:this.state.email,
     confirm_password: this.state.confirm_password
   }
  
   this.props.dispatch(registerUserAction(data));
 }
  
  render() {
    let token = localStorage.getItem('token');
    console.log(token);
    if(token )
    {
      //  localStorage.removeItem('token');
      // const user = jwtDecode(token);
      // console.log(user);
      return <Redirect to='/' />
    }
      
    return (
      <div id ="header" className="container-fluid na v_bg ">
        <div className="row">
          <div className="col-10 mx-auto d-flex justify-content-center">
            <form className="form-style" onSubmit ={this.handleOnSubmit}>
              <div className="form-group">
              <h1>Sign Up</h1>
                <label htmlFor="exampleInputName"><h4>Name:</h4></label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                 name="name"
                 value={this.state.name}
                  placeholder="Name"
                  onChange = {this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1"><h4>Email :</h4></label>
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
                <label htmlFor="exampleInputPassword1"><h4>Password:</h4></label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  id="exampleInputPassword1"
                  onChange = {this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputConfirm1"><h4>Confirm password:</h4></label>
                <input
                  type="password"
                  className="form-control"
                  name="confirm_password"
                  value={this.state.confirm_password}
                  id="exampleInputConfirm1"
                  placeholder="Confirm password"
                  onChange = {this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-get-started">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  } 
}
const mapStateToProps = ({auth}) =>{
  return{
    auth
  }
}
export default  connect(mapStateToProps)(RegisterComponent)