import React, { Component } from "react";
import { getCharecterByIdAction, isLoadingAction } from "../actions/getDataAction";
import {connect} from 'react-redux'
import Spinner from "./Spinner";
import MarvelPageItemComponent from "./marvelPageItemComponent";


class CharcterPageComponent extends Component {

    componentDidMount (){
        const { match: { params } } = this.props;
        this.props.Loading();
        this.props.getCharecterById(params.id);
     //   console.log(this.props.charecter);     
    }
    handleFavourite =() =>{
      let token = localStorage.getItem('token');
      if(!token)
      {
        this.props.history.push('/login');
      }else{
        console.log("lo");
      }
     
    }
    
  render() {
    let image,knowMorUrl;
    let total_comics,comics;
      if(!isEmpty(this.props.charecter)){
    
        image=this.props.charecter.thumbnail.path + '.' +  this.props.charecter.thumbnail.extension;

        total_comics = this.props.charecter.comics.available;
        comics = this.props.charecter.comics.items;
        knowMorUrl=this.props.charecter.urls;

        console.log(knowMorUrl);
      }
    return (
      this.props.isLoading? (<Spinner />) : ( <>
        <div id="header" className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row ">
                <div className ="col-6 charecterPage ">
                  
                   <img src={image} className="img-fluid page-image" alt="cahrecter" />
                </div>
                <div className ="col-6">
                <h3>{this.props.charecter.name}
                <span className="float-right" onClick={this.handleFavourite  }> <button className="btn btn-primary" >Favourite</button></span>
                </h3>
                <hr/>
                <p>{this.props.charecter.description}</p> 
                 <div>
                   <h3>{this.props.charecter.name} : comics ({total_comics})</h3>
                   <hr/>
                   <ul>                
                      <MarvelPageItemComponent comics = {comics}/>
                   </ul>      
                 </div>
                 {
                   knowMorUrl &&  <a href={knowMorUrl[0].url} className="btn btn-get-started">Know more</a>
                 }
                
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
