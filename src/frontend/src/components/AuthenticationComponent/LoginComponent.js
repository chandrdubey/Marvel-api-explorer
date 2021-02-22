import React, { Component } from "react";
import { connect} from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { loginUserAction, googleOAuthAction } from "../../actions/authAction";
const gClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
class LoginComponent extends Component {
  constructor() {
    super();
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
            <form className="form-style mx-auto auth1" onSubmit={this.handleOnSubmit}>
              <h3 className="text-center">Sign In</h3>
              <div className="form-group">
                {/* <label htmlFor="exampleInputEmail1">
                  <h4>Email: </h4>
                </label> */}
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
                {/* <label htmlFor="exampleInputPassword1">
                  <h4>Password:</h4>
                </label> */}
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
