import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getComicsAction } from '../actions/getDataAction'
import DisplayData from './DisplayData';
class ComicsComponent extends Component {
    componentDidMount(){
        this.props.getComics();
    //    console.log(this.props.comics);
    }
    render() {
       const title = 'Marvel Comics';
        return (
            <>
               <DisplayData allData={this.props.comics} title ={title} /> 
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        comics : state.comics
    }

}
const mapDispatchToProps = (dispatch) =>{
    return{
        getComics :() => dispatch(getComicsAction())
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(ComicsComponent)
