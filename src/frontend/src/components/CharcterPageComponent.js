import React, { Component } from "react";
import { getCharecterByIdAction, isLoadingAction } from "../actions/getDataAction";
import {connect} from 'react-redux'
import Spinner from "./Spinner";


class CharcterPageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charecter : {}
        }
    }
    componentDidMount (){
        const { match: { params } } = this.props;
        this.props.Loading();
        this.props.getCharecterById(params.id);
        console.log(this.props.charecter);
        console.log(this.props.is)
      
    }
    
  render() {
    return (
      this.props.isLoading? (<Spinner />) : ( <>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row ">
                <div className ="col-6 charecterPage">
                   <h1>{this.props.charecter.name}</h1> 
                </div>
                <div className ="col-6">
                   <h1>{this.props.charecter.id}</h1> 
                </div>
            </div>
            </div>
          </div>
        </div>
      </>)

    );
  }
}

const mapStateToProps = (state) =>{
    return { 
         charecter : state.marvelData.charecter,
          isLoading :  state.marvelData.isLoading
    };
}
const mapDispatchToProps = (dispatch) =>{
  return{
    getCharecterById : (id) => dispatch(getCharecterByIdAction(id)),
    Loading : () => dispatch(isLoadingAction())
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(CharcterPageComponent);
