import React, { Component } from "react";

export default class RegisterComponent extends Component {
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
 handleOnSubmit = () =>{
   const data = { 
     name : this.state.name,
     password:this.state.password,
     email:this.state.email,
     confirm_password: this.state.confirm_password
   }
   alert(`name = ${data.name} , password=${data.password}`); 
 }
  
  render() {
    return (
      <div className="container-fluid nav_bg ">
        <div className="row">
          <div className="col-10 mx-auto">
            <form  onSubmit ={this.handleOnSubmit}>
              <div class="form-group">
                <label for="exampleInputName">Name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                 name="name"
                 value={this.state.name}
                  placeholder="Name"
                  onChange = {this.handleChange}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address:</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                 name= "email"
                 value={this.state.email}
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange = {this.handleChange}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password:</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  value={this.state.password}
                  id="exampleInputPassword1"
                  onChange = {this.handleChange}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Confirm password:</label>
                <input
                  type="password"
                  class="form-control"
                  name="confirm_password"
                  value={this.state.confirm_password}
                  id="exampleInputPassword1"
                  onChange = {this.handleChange}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
