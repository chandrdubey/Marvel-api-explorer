import axios from 'axios'
import marvel from '../api-config/apiConfig'
const API = process.env.REACT_APP_API;
export const getCharectersAction = () => {
    return (dispatch) =>{
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=100&${marvel.marvelKey}`)
        .then( (response) => {
            dispatch({type:'ALL_CHARECTERS', payload:response.data.data.results});
        // handle success

      console.log(response.data.data.results);
      })
      .catch(function (error) {
     // handle error
     console.log(error);
     });
    }
}

export const getComicsAction = () => {
  return (dispatch) =>{
      axios.get(`https://gateway.marvel.com:443/v1/public/comics?orderBy=title&limit=100&${marvel.marvelKey}`)
      .then( (response) => {
          dispatch({type:'ALL_COMICS', payload:response.data.data.results});
      // handle success
     console.log(response.data.data.results);
    })
    .catch(function (error) {
   // handle error
   console.log(error);
   });
  }
}

export const getComicsSearchAction = (query) =>{
    return  (dispatch) =>{
        axios.get(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${query}&limit=100&${marvel.marvelKey}`)
        .then( (response) => {
            dispatch({type:'SEARCH_COMICS', payload:response.data.data.results});
        // handle success
 
      })
      .catch(function (error) {
     // handle error
     console.log(error);
     });
}
}

export const getCharectersSearchAction = (query) =>{ 
    return  (dispatch) =>{
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&limit=100&${marvel.marvelKey}`)
        .then( (response) => {
            console.log(response)
            dispatch({type:'SEARCH_CHARECTERS', payload:response.data.data.results});
        // handle success
    
      })
      .catch(function (error) {
     // handle error
     console.log(error);
     });
}
}
export const isLoadingAction = () =>{
    return (dispatch) => {
        dispatch({type : 'LOADING'})
    }
}

export const setErrorFalseAction = () =>{
    return (dispatch) => {
        dispatch({type : 'SET_ERROR_FALSE'})
    }
}
// Getting  charecter information from the marvel-api  by using this action
export const getCharecterByIdAction = (id)=>{
    return (dispatch)=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?${marvel.marvelKey}`)
        .then(response =>{
            console.log(response);
            console.log(`https://gateway.marvel.com:443/v1/public/characters/${id}?${marvel.marvelKey}`);
           
                console.log(response.data.data.results[0]);
                dispatch({type:'ONE_CHARECTER', payload:response.data.data.results[0]});
          
            
        })
        .catch(error=>{
            console.log(error.response);
            dispatch({type:'PAGE_NOT_FOUND'});
            dispatch({type : 'UNLOADING'});
           
        })

    }
  
}
// Getting favourite charecters of user by this action
export const getComicByIdAction = (id)=>{
    return (dispatch)=>{
        axios.get(`https://gateway.marvel.com:443/v1/public/comics/${id}?${marvel.marvelKey}`)
        .then(response =>{
             console.log(response.data.data.results[0]);
             dispatch({type:'ONE_COMIC', payload:response.data.data.results[0]});
        })
        .catch(error=>{
            console.log(error.response);
            dispatch({type:'PAGE_NOT_FOUND'});
            dispatch({type : 'UNLOADING'});
           
        })
    }
  
}

//Adding charecter to the favorite list of charcters
export const addCharecterToFavAction = (userId,data)=>{
  
     return (dispatch)=>{   
        const token = localStorage.getItem('token');
         const  jwttoken = "Bearer " + token;
         console.log(jwttoken);
         const config ={ headers: {
            'Content-Type': 'application/json',
            'Authorization': jwttoken 
          }}
         axios.post(`${API}/users/${userId}/charecters/favourite/add`,data, config )
         .then(response=> {
             console.log(response);
            dispatch({type:'FAVOURITE_CHARECTERS', payload:response.data.data.favcharecters});
         })
         .catch(error=>{
            console.log(error);
        })
     }

}

// removing charecter from the user's favorite list of charecters
export const removeCharecterToFavAction = (userId,charecterId)=>{
  
    return (dispatch)=>{   
       const token = localStorage.getItem('token');
        const  jwttoken = "Bearer " + token;
        console.log(jwttoken);
        const config ={ headers: {
           'Content-Type': 'application/json',
           'Authorization': jwttoken 
         }}
         const data = {
             charecterId: charecterId
         }
        axios.post(`${API}/users/${userId}/charecters/favourite/delete`, data, config )
        .then(response=> {
            console.log(response);
           dispatch({type:'FAVOURITE_CHARECTERS', payload:response.data.data.favcharecters});
        })
        .catch(error=>{
            console.log(error);
        })
    }

}
// Getting favourite charecters of user
export const getFavCharectersAction =(userId) =>{
  return (dispatch) =>{
    const token = localStorage.getItem('token');
    const  jwttoken = "Bearer " + token;
    console.log(jwttoken);
    const config ={ headers: {
       'Content-Type': 'application/json',
       'Authorization': jwttoken 
     }}
    axios.get(`${API}/users/${userId}/charecters/favourite`, config )
    .then(response=> {
        console.log(response);
       dispatch({type:'FAVOURITE_CHARECTERS', payload:response.data.data.favcharecters});
    })
    .catch(error=>{
        console.log(error);
    })
       
  }
}

//Getting favourite  Comics of user 
export const getFavComicsAction =(userId) =>{
    return (dispatch) =>{
      const token = localStorage.getItem('token');
      const  jwttoken = "Bearer " + token;
      console.log(jwttoken);
      const config ={ headers: {
         'Content-Type': 'application/json',
         'Authorization': jwttoken 
       }}
      axios.get(`${API}/users/${userId}/comics/favourite`, config )
      .then(response=> {
          console.log(response);
         dispatch({type:'FAVOURITE_COMICS', payload:response.data.data.favcomics});
      })
      .catch(error=>{
          console.log(error);
      })
         
    }
  }

//Adding comic to the favorite list of comics of user
export const addComicToFavAction = (userId,data)=>{
  
    return (dispatch)=>{   
       const token = localStorage.getItem('token');
        const  jwttoken = "Bearer " + token;
        console.log(jwttoken);
        const config ={ headers: {
           'Content-Type': 'application/json',
           'Authorization': jwttoken 
         }}
        axios.post(`${API}/users/${userId}/comics/favourite/add`,data, config)
        .then(response=> {
            console.log(response);
           dispatch({type:'FAVOURITE_COMICS', payload:response.data.data.favcomics});
        })
        .catch(error=>{
           console.log(error);
       })
    }

}
// removing comic from the user's favorite list of comics
export const removeComicToFavAction = (userId,comicId)=>{
  
    return (dispatch)=>{   
       const token = localStorage.getItem('token');
        const  jwttoken = "Bearer " + token;
        console.log(jwttoken);
        const config ={ headers: {
           'Content-Type': 'application/json',
           'Authorization': jwttoken 
         }}
         const data = {
             comicId:comicId
         }
        axios.post(`${API}/users/${userId}/comics/favourite/delete`, data, config )
        .then(response=> {
            console.log(response);
           dispatch({type:'FAVOURITE_COMICS', payload:response.data.data.favcomics});
        })
        .catch(error=>{
            console.log(error);
        })
    }

}