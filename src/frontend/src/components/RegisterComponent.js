import React, { Component } from "react";

export default class RegisterComponent extends Component {
  render() {
    return (
      <div className="container-fluid nav_bg ">
        <div className="row">
          <div className="col-10 mx-auto">
            <form>
              <div class="form-group">
                <label for="exampleInputName">Name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address:</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password:</label>
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Confirm password:</label>
                <input
                  type="password"
                  class="form-control"
                  name="confirm_password"
                  id="exampleInputPassword1"
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
