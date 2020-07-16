const initState = {
    charecters: [],
    comics: [],
    stories: [],
    isLoding : false
}
const rootReducer = (state = initState, action) =>{
     switch (action.type)  {
         case 'ALL_CHARECTERS' : {
            return{
                ...state,
                charecters : action.payload
            }
         }
         default : {
             return state
         }
     }
     
}

export default rootReducer