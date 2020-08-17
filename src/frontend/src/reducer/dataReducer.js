const initState = {
    charecters: [],
    comics: [],
    isLoading : false,
    charecter : {},
    comic : {},
    favCharecters :[],
    favComics : []
}
const dataReducer = (state = initState, action) =>{
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
        case 'FAVOURITE_CHARECTERS' :{
            
            return{
                ...state,
              favCharecters : action.payload
              
            }
        }
        case 'FAVOURITE_COMICS' :{
            
            return{
                ...state,
              favComics : action.payload
              
            }
        }
        case 'ONE_CHARECTER' : {
            return{
                ...state,
                charecter:action.payload,
                isLoading: false
            }
        }
        case 'ONE_COMIC':{
            return{
                ...state,
                comic:action.payload,
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

export default dataReducer