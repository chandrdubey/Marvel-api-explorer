import axios from 'axios'

export const registerUserAction = (data, history) =>{
    return(dispatch) =>{
        axios.post('http://localhost:5000/signup', data)
    .then(response => console.log(response));
    dispatch()
    this.props.history.push('/');
    }

}