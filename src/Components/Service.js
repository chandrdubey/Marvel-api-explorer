import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getComicsAction, getComicsSearchAction } from '../actions/getDataAction'
import DisplayData from './DisplayData';
class ComicsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
    }
    
    componentDidMount(){
        this.props.getComics();
    //    console.log(this.props.comics);
    }

    handleChange = (e) =>{
         this.setState({
             query : e.target.value
         });
         console.log(this.state.query);
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.getComicsSearch(this.state.query);
    }
    render() {
       const title = 'Marvel Comics';
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
                <DisplayData allData={this.props.comics} />
            </div>
          </div>
        </div>
      </section>
    </>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        comics : state.comics
    }

}
const mapDispatchToProps = ( dispatch ) =>{
    return{
        getComics :() => dispatch(getComicsAction()),
        getComicsSearch : (query) => dispatch(getComicsSearchAction(query))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(ComicsComponent)
