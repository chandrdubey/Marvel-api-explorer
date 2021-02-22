import React, { Component } from "react";
import { registerUserAction, googleOAuthAction } from "../../actions/authAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
const gClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
      confirm_password: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      confirm_password: this.state.confirm_password,
    };
    console.log(data);
    this.props.dispatch(registerUserAction(data));
  };
  //Google Auth
  onSuccess = (res) => {
    console.log(res.profileObj);
    const data = { name: res.profileObj.name, email: res.profileObj.email };
    console.log(data);
    this.props.dispatch(googleOAuthAction(data));
  };
  onFailure = (error, details) => {
    console.log(error, details);
    return;
  };
  render() {
    let token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      return <Redirect to="/" />;
    }

    return (
      <div id="header" className="container-fluid na v_bg ">
        <div className="row">
          <div className="col-10 mx-auto d-flex justify-content-center">
            <form className="form-style auth1" onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                <h3 className="text-center">Sign Up</h3>

                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  name="name"
                  value={this.state.name}
                  placeholder="Name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={this.state.email}
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  placeholder="Password"
                  id="exampleInputPassword1"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="confirm_password"
                  value={this.state.confirm_password}
                  id="exampleInputConfirm1"
                  placeholder="Confirm password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="">
                <button type="submit" className="btn btn-get-started ">
                  Submit
                </button>
              </div>
              <p> or connect with</p>
              <GoogleLogin
                clientId={gClientId}
                render={(renderProps) => (
                  <button
                    className=""
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <img
                      src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png"
                      className="g-image"
                      alt="google icon"
                    ></img>
                  </button>
                )}
                buttonText=""
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}
                cookiePolicy={"single_host_origin"}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};
export default connect(mapStateToProps)(RegisterComponent);
