import CryptoJS from 'crypto-js'



let ts = new Date().getTime();
let hash = CryptoJS.MD5(ts + process.env.REACT_APP_MARVEL_API_PRIVATE_KEY+ process.env.REACT_APP_MARVEL_API_PUBLIC_KEY).toString();
let marvelKey = `ts=${ts}&apikey=${process.env.REACT_APP_MARVEL_API_PUBLIC_KEY}&hash=${hash}`

export default {
    marvelKey
}