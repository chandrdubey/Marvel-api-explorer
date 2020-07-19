const initState = {
    charecters: [],
    comics: [],
    stories: [],
    isLoading : false
}
const rootReducer = (state = initState, action) =>{
     switch (action.type)  {
         case 'ALL_CHARECTERS' : {
            return{
                ...state,
                charecters : action.payload,
                isLoading: false
            }
         }
         case 'ALL_COMICS' :{
             return{
                 ...state,
                 comics: action.payload,
                 isLoading: false
             }
         }
         case 'SEARCH_COMICS' : {
             return {
                 ...state,
                 comics: action.payload,
                 isLoading: false
           
             }
         }
         case 'SEARCH_CHARECTERS' :{
             return{
                ...state,
                charecters:action.payload,
                isLoading: false

             }
         }
         case 'LOADING' : {
            return{
                ...state,
                isLoading : true
          
            } 
          
         }
         default : {
             return state
         }
     }
     
}

export default rootReducer