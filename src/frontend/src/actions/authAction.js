import axios from "axios";
//import swal from 'sweetalert';
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
         console.log(response.data.status)
          // if(response.data.status === 404)
          // {
          //   swal({
          //     title: response.data.message,
          //     icon: "error",
          //     button: false
          //   });
          // }else{
            localStorage.setItem("token", response.data.token);
          // swal({
          //   title: "You are logged in successfully!",
          //   icon: "success",
          //   button: false,

          // });
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data.data.user_detail });
        dispatch({type:'FAVOURITE_COMICS', payload:response.data.data.favcomics});
        dispatch({type:'FAVOURITE_CHARECTERS', payload:response.data.data.favcharecters});

 //         }     
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
    // swal({
    //   title: "You are logged out succesfulley!",
    //   icon: "success",
    // });
    dispatch({ type: "LOGOUT" });
  };
};
