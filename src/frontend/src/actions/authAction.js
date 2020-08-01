import axios from "axios";

export const registerUserAction = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/signup", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        dispatch({type:'LOGIN_SUCCESS', payload:response.data.user});
      })
  };
};

export const loginUserAction = (data) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/login", data)
      .then((response) => {
          console.log(response);
          localStorage.setItem("token", response.data.token);
          dispatch({type:'LOGIN_SUCCESS', payload:response.data.user});
        })
      .catch(function (error) {
        console.log(error);
      });
  };
}


