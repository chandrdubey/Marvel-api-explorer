import { combineReducers } from "redux";
import authReducer from './authrReducer'
import dataReducer from './dataReducer'

const rootReducer = combineReducers({
    auth :authReducer,
    marvelData :dataReducer
});
// const rootReducer = (state = initState, action) =>{
//      switch (action.type)  {
//          case 'ALL_CHARECTERS' : {
//             return{
//                 ...state,
//                 charecters : action.payload,
//                 isLoading: false
//             }
//          }
//          case 'ALL_COMICS' :{
//              return{
//                  ...state,
//                  comics: action.payload,
//                  isLoading: false
//              }
//          }
//          case 'SEARCH_COMICS' : {
//              return {
//                  ...state,
//                  comics: action.payload,
//                  isLoading: false
           
//              }
//          }
//          case 'SEARCH_CHARECTERS' :{
//              return{
//                 ...state,
//                 charecters:action.payload,
//                 isLoading: false

//              }
//          }
//          case 'LOADING' : {
//             return{
//                 ...state,
//                 isLoading : true
          
//             } 
          
//          }
//          default : {
//              return state
//          }
//      }
     
// }

export default rootReducer