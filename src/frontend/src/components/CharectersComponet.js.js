import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getCharectersAction, getCharectersSearchAction, isLoadingAction} from '../actions/getDataAction';
import DisplayData from './DisplayData';
import Spinner from './Spinner';
 
// let ts = new Date().getTime();
// let hash = CryptoJS.MD5(ts + '2dafafc5122792c3486bddeb1fe227aab1dd0def' + 'ee182f248ccfa43f509148540e539433').toString();
// let url = `?ts=${ts}&apikey=ee182f248ccfa43f509148540e539433&hash=${hash}`

 class CharecterComponent extends Component {
   constructor(props) {
     super(props);
     this.state = {
       query: ""
     }
   }
   
 componentDidMount(){
     //   console.log(this.props);
        this.props.Loading();
        this.props.getAllCharecters();
   }
   handleChange = (e) =>{
    this.setState({
        query : e.target.value
    });
   
}
handleSubmit = (e) =>{
   e.preventDefault();
   //this.props.getComicsSearch(this.state.query);
   this.props.Loading();
   this.props.getCharectersSearch(this.state.query);
   
}
  render() {
    console.log(this.props.isLoading);
  
    let  title = 'Marvel Charecters'; 
    return (
      <>
      <section id="header" className=" d-flex align-items-center">
        <div className="container-fluid nav_bg ">
          <div className="row">
            <div className="col-10 mx-auto">
              <h1>{title}</h1> 
              <form className="form-inline my-2 my-lg-0"  onSubmit ={this.handleSubmit}>
                     <input  type="search"  onChange = {this.handleChange} placeholder="Search" aria-label="Search" />
                     {/* <button className="btn btn-outline-success my-2 my-sm-0"  type="submit">Search</button> */}
               </form>
               {this.props.isLoading ? <Spinner /> : <DisplayData allData={this.props.charecters} />}

            </div>
          </div>
        </div>
      </section>
    </>
      
    );
  }
}
const mapStateToProps = (state) =>{
    return { 
         charecters : state.marvelData.charecters,
          isLoading :  state.marvelData.isLoading
    };
}
const mapDispatchToProps = (dispatch) =>{
  return{
    getAllCharecters : () => dispatch(getCharectersAction()),
    getCharectersSearch : (query) => dispatch(getCharectersSearchAction(query)),
    Loading : () => dispatch(isLoadingAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharecterComponent)