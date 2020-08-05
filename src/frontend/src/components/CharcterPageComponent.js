import React, { Component } from "react";
import { getCharecterByIdAction, isLoadingAction , addCharecterToFavAction} from "../actions/getDataAction";
import {connect} from 'react-redux'
import Spinner from "./Spinner";
import MarvelPageItemComponent from "./marvelPageItemComponent";


class CharcterPageComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isFavourite:false
      }
    }
    
    componentDidMount (){
        const { match: { params } } = this.props;
        this.props.Loading();
        this.props.getCharecterById(params.id);
        let user =this.props.currentUser;
        console.log(user);
        if(this.props.isLoggedIn){
           let isPresent = user.favcharecter.includes(params.id);
          if(isPresent){
                  this.setState({
                    isFavourite:true
                  });
          }
        }   
    }
    handleFavourite =() =>{
      let token = localStorage.getItem('token');
      console.log(`he ${ token}`)
      if(!token)
      {
        this.props.history.push('/login');
      }else{
        console.log("lo");
        this.setState({
          isFavourite:true
        });
        const { match: { params } } = this.props;
        console.log(`hello ${ this.props.currentUser.id}`)
        const data ={
          userId: this.props.currentUser.id,
          charecterId: params.id
        }
        this.props.addCharecterFav(data);
      }
     
    }
    handleUnFavourite =() =>{
      console.log("hello")
      this.setState({
        isFavourite:false
      });
    }
  render() {
    let image,knowMorUrl;
    let total_comics,comics;
      if(!isEmpty(this.props.charecter)){
    
        image=this.props.charecter.thumbnail.path + '.' +  this.props.charecter.thumbnail.extension;

        total_comics = this.props.charecter.comics.available;
        comics = this.props.charecter.comics.items;
        knowMorUrl=this.props.charecter.urls;

      //  console.log(knowMorUrl);
      }
    return (
      this.props.isLoading? (<Spinner />) : ( <>
        <div id="header" className="container-fluid show-page">
          <div className="row set-row">
            <div className="col-10 mx-auto">
            <div className="row ">
                <div className ="col-5 charecter-image ">
                  
                   <img src={image} className="img-fluid page-image" alt="cahrecter" />
                </div>
                <div className ="col-7 charecter-detail ">
                <div className="">  
                <h3>{this.props.charecter.name}
                <span className="float-right" > 
                {
                  this.state.isFavourite ? 
                   <button className="btn  fav-btn" onClick={this.handleUnFavourite  }>UnFavourite</button> 
                   : <button className="btn  fav-btn" onClick={this.handleFavourite  }>Favourite</button>
                }
               
                </span>
                </h3>
                <hr/>
                <p>{this.props.charecter.description}</p> 
                 <div>
                   <h3>{this.props.charecter.name} : Comics ({total_comics})</h3>
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
         currentUser :state.auth.currentUser,
         charecter : state.marvelData.charecter,
          isLoading :  state.marvelData.isLoading,
          isLoggedIn: state.auth.isLoggedIn
    };
}
const mapDispatchToProps = (dispatch) =>{
  return{
    getCharecterById : (id) => dispatch(getCharecterByIdAction(id)),
    Loading : () => dispatch(isLoadingAction()),
    addCharecterFav : (data)=> dispatch(addCharecterToFavAction(data))
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(CharcterPageComponent);
