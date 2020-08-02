import React, { Component } from "react";
import { registerUserAction } from "../actions/authAction";
import { connect } from "react-redux";
import { Redirect} from 'react-router-dom';
import jwtDecode from 'jwt-decode'

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
    // console.log(this.props.history);
    // //histry in props is used to redirect
    // alert(data);
    // axios.post('http://localhost:5000/signup', data)
    // .then(response => {
    //   console.log(response);
    //   localStorage.setItem("token", data.data.token);
    // }
    // )
    // .catch(function (error) {
    //   console.log(error);
    // });
  //  this.props.history.push('/comics');
   this.props.dispatch(registerUserAction(data));
 }
  
  render() {
    let token = localStorage.getItem('token');
    console.log(token);
    if(token )
    {
       localStorage.removeItem('token');
      const user = jwtDecode(token);
      console.log(user);
      return <Redirect to='/' />
    }
      
    return (
      <div className="container-fluid na v_bg ">
        <div className="row">
          <div className="col-10 mx-auto">
            <form  onSubmit ={this.handleOnSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputName">Name:</label>
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
                <label htmlFor="exampleInputEmail1">Email address:</label>
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
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputConfirm1">Confirm password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirm_password"
                  value={this.state.confirm_password}
                  id="exampleInputConfirm1"
                  onChange = {this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
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