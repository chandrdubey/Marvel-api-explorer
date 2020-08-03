import React, { Component } from "react";
import { getCharecterByIdAction, isLoadingAction } from "../actions/getDataAction";
import {connect} from 'react-redux'
import Spinner from "./Spinner";
import MarvelPageItemComponent from "./marvelPageItemComponent";


class CharcterPageComponent extends Component {
constructor(props) {
  super(props);
  
}

    componentDidMount (){
        const { match: { params } } = this.props;
        this.props.Loading();
        this.props.getCharecterById(params.id);
     //   console.log(this.props.charecter);
      
    }
    
  render() {
    let url;
    let total_comics,comics;
      if(!isEmpty(this.props.charecter)){
        let x = this.props.charecter.thumbnail.path;
        url =this.props.charecter.thumbnail.path + '.' +  this.props.charecter.thumbnail.extension;
        let path = "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7.jpg";
        total_comics = this.props.charecter.comics.available;
        comics = this.props.charecter.comics.items;
        console.log(comics);
      }
    return (
      this.props.isLoading? (<Spinner />) : ( <>
        <div id="header" className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row ">
                <div className ="col-6 charecterPage ">
                  
                   <img src={url} className="img-fluid page-image" alt="cahrecter" />
                </div>
                <div className ="col-6">
                <h3>{this.props.charecter.name}</h3>
                <p>{this.props.charecter.description}</p> 
                 <div>
                   <h3>total comics : {total_comics}</h3>
                   <ul>
                  
                      <MarvelPageItemComponent comics = {comics}/>
                     
                
                   </ul>
                  
                 </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </>)

    );
  }
}
function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
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
