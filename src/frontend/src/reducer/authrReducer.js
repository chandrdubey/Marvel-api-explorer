const initState = {
    isLoggedIn : false,
    currentUser : {},
    favCharecters : []
}
const authReducer = (state = initState, action) =>{
    switch (action.type)  {
        case 'LOGIN_SUCCESS' : {
           return{
               ...state,
               currentUser : action.payload.user_detail,
               favCharecters :action.payload.favcharecters,
               isLoggedIn: true
           }
        }
        case 'LOGOUT' :{
            return{
                ...state,
                currentUser :{},
                isLoggedIn: false
            }
        }
        case 'ADD_FAVOURITE_CHARECTER' :{
            
            return{
                ...state,
              favCharecters : action.payload
            }
        }
        default : {
            return state
        }
    }
}
export default authReducer;
    