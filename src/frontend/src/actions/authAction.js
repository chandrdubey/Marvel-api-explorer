import axios from "axios";

export const registerUserAction = (data) => {
  return (dispatch) => {
    axios.post("http://localhost:5000/signup", data).then((response) => {
      console.log(response);
      localStorage.setItem("token", response.data.token);
     
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data.user_detail,
      });

    });
  };
};

export const loginUserAction = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/login", data)
      .then((response) => {
        console.log(response);
        console.log(response.data.data.user_detail);
        if (response.status === 200)
          localStorage.setItem("token", response.data.token);

        dispatch({ type: "LOGIN_SUCCESS", payload: response.data.data.user_detail });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
export const authenticateUserAction = (user) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
  };
};

export const logOutUserAction = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };
};
