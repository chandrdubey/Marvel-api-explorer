import CryptoJS from 'crypto-js'

const  privateKey = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY ;
const publicKey =  process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;


let ts = new Date().getTime();
let hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
let marvelKey = `ts=${ts}&apikey=${publicKey}&hash=${hash}`

export default {
    marvelKey
}