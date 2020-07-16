import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getCharectersAction} from '../actions/getDataAction';
import DisplayData from './DisplayData';
 
// let ts = new Date().getTime();
// let hash = CryptoJS.MD5(ts + '2dafafc5122792c3486bddeb1fe227aab1dd0def' + 'ee182f248ccfa43f509148540e539433').toString();
// let url = `?ts=${ts}&apikey=ee182f248ccfa43f509148540e539433&hash=${hash}`

 class CharecterComponent extends Component {
 componentDidMount(){
        console.log(this.props);
        this.props.getAllCharecters();
   }
   
  render() {
    console.log(this.props);
    let  title = 'Marvel Charecters'; 
    return (
      <>
        <DisplayData title={title} allData={this.props.charecters} />
      </>
    );
  }
}
const mapStateToProps = (state) =>{
    return {
        charecters : state.charecters
    }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    getAllCharecters : () => dispatch(getCharectersAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharecterComponent)