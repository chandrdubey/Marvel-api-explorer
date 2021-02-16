import axios from "axios";
import swal from 'sweetalert';
const API = process.env.REACT_APP_API;
export const registerUserAction = (data) => {
  return (dispatch) => {
    
    axios.post(`${API}/signup`, data).then((response) => {
      console.log(response);
      if(response.data.status === 404)
      {
        swal({
          title: response.data.message,
          icon: "error",
          button: false
        });
      }else{
        localStorage.setItem("token", response.data.token);
     
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data.user_detail,
      });
      // dispatch({type:'FAVOURITE_COMICS', payload:response.data.data.favcomics});
      // dispatch({type:'FAVOURITE_CHARECTERS', payload:response.data.data.favcharecters});
      }
      

    });
  };
};

export const loginUserAction = (data) => {
  return (dispatch) => {
    console.log(API);
    axios
      .post(`${API}/login`, data)
      .then((response) => {
        console.log(response);
         console.log(response.data.status)
          if(response.data.status === 404)
          {
            swal({
              title: response.data.message,
              icon: "error",
              button: false
            });
          }else{
            localStorage.setItem("token", response.data.token);
        
        dispatch({ type: "LOGIN_SUCCESS", payload: response.data.data.user_detail });
        dispatch({type:'FAVOURITE_COMICS', payload:response.data.data.favcomics});
        dispatch({type:'FAVOURITE_CHARECTERS', payload:response.data.data.favcharecters});

         }     
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

export const googleOAuthAction = (data) =>{
  return (dispatch) =>{
    axios.post(`${API}/googleOAuth`, data)
    .then((res)=> {
      console.log(res.data.user_detail);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user_detail});
      dispatch({type:'FAVOURITE_COMICS', payload:res.data.favcomics});
      dispatch({type:'FAVOURITE_CHARECTERS', payload:res.data.favcharecters});
    });
  }
}