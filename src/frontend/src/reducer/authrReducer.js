const initState = {
    isLoggedIn : false,
    currentUser : {}
}
const authReducer = (state = initState, action) =>{
    switch (action.type)  {
        case 'LOGIN_SUCCESS' : {
           return{
               ...state,
               currentUser : action.payload,
               isLoggedIn: true
           }
        }
        default : {
            return state
        }
    }
}
export default authReducer;
    