import axios from 'axios'
import CryptoJS from 'crypto-js'
 
let ts = new Date().getTime();
let hash = CryptoJS.MD5(ts + '2dafafc5122792c3486bddeb1fe227aab1dd0def' + 'ee182f248ccfa43f509148540e539433').toString();
let url = `ts=${ts}&apikey=ee182f248ccfa43f509148540e539433&hash=${hash}`

export const getCharectersAction = () => {
    return (dispatch) =>{
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?${url}`)
        .then( (response) => {
            dispatch({type:'ALL_CHARECTERS', payload:response.data.data.results});
        // handle success
  //      console.log(`https://gateway.marvel.com:443/v1/public/characters?${url}`)
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
      axios.get(`https://gateway.marvel.com:443/v1/public/comics?orderBy=title&${url}`)
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
        axios.get(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${query}&${url}`)
        .then( (response) => {
            dispatch({type:'SEARCH_COMICS', payload:response.data.data.results});
        // handle success
  //      console.log('hi');
  //     console.log(response);
      })
      .catch(function (error) {
     // handle error
     console.log(error);
     });
}
}

export const getCharectersSearchAction = (query) =>{ 
    return  (dispatch) =>{
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&${url}`)
        .then( (response) => {
            dispatch({type:'SEARCH_CHARECTERS', payload:response.data.data.results});
        // handle success
      //  console.log('hi');
     //  console.log(response);
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


