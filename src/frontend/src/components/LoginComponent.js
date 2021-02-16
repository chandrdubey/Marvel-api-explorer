import React, { Component } from "react";
import { connect} from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { loginUserAction, googleOAuthAction } from "../actions/authAction";
import { GoogleLogin } from "react-google-login";
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
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
      password: this.state.password,
      email: this.state.email,
    };

    this.props.loginUser(data);

  };
  onSuccess = (res) => {
    console.log(res.profileObj);
    const data = {name:res.profileObj.name, email:res.profileObj.email};
    console.log(data);
    this.props.gOAuth(data);
  };
  onFailure = (error, details) => {
    console.log(error, details);
        return;
  };
  render() {
    console.log(this.props.auth.isLoggedIn);
    if (this.props.auth.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div id="header" className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto  ">
            <form className="form-style mx-auto" onSubmit={this.handleOnSubmit}>
              <h1>Sign In</h1>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">
                  <h4>Email: </h4>
                </label>
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
                <label htmlFor="exampleInputPassword1">
                  <h4>Password:</h4>
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  id="exampleInputPassword1"
                  onChange={this.handleChange}
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-get-started">
                Submit
              </button>
              <div className="auth">
              <p> or connect with</p>
                <GoogleLogin
                  clientId="437137936745-l6vq72pl39q4f401tsuu3vb4ksrkibjo.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      className="btn btn-sm"
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
                <p>
                  create account ? <Link to="/signup">Sign up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(loginUserAction(data)),
    gOAuth : (data) => dispatch(googleOAuthAction(data))
  };
};
const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
