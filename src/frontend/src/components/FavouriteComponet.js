import React, { Component } from "react";
import { connect } from "react-redux";
import DisplayContent from "./DisplayContent";
class FavouriteComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourite:1
        }
       
    }
    
    handleDropdown = () =>{
       const dropdown = document.getElementById("dropdownMenuButton");
       dropdown.style.background= "#a80b0b";
    }
    handleFavouriteList =(num)=>{
       
        this.setState({
            favourite: num
        });
      console.log(num)
    }
  render() {
    console.log(this.props.marvelData.favCharecters);
    return (
      <>
        <section id="header" className=" d-flex align-items-center">
          <div className="container-fluid nav_bg ">
            <div className="row">
              <div className="col-10 mx-auto  marginPage">
                <div className="row">
                  <div className="col-6">
                    <h1>My Favourite List</h1>
                    {/* <DisplayHomeData
                    allData={marvel.marvelCharecters}
                    reqParams="charecters"
                  /> */}
                  </div>
                  <div className="col-6 text-center">
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle btn-dropdown"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={this.handleDropdown}
                      >
                        Favourite
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <button className="dropdown-item" onClick={()=> this.handleFavouriteList(1)}>
                          Charecters
                        </button>
                      
                        <button className="dropdown-item" onClick={()=> this.handleFavouriteList(0)} >
                         Comics
                        </button>
                      </div>
                    </div>
                    {/* <DisplayHomeData
                    allData={marvel.marvelComics}
                    reqParams="comics"
                  /> */}
                  </div>
                </div>
                <hr />
               
                {this.state.favourite ? 
                  this.props.marvelData.favCharecters.length>0 ? (<>
                  <h3>My Favourite charecters</h3>
                  <div className="row"> 
                  {this.props.marvelData.favCharecters.map((char) => <DisplayContent data={char} key={char.charecter_id} reqParams="charecters" />)}
                  </div>
                    
                  
                  </>):(<>
                   
                    <h4>Empty Charecters Favourite list</h4>
                    <h3>You have no items in your favourite list. Start adding!</h3>
                  </>): this.props.marvelData.favComics.length>0 ? (<>
                  <h3>My Favourite comics</h3>
                  <div className="row"> 
                  {this.props.marvelData.favComics.map((comic) => <DisplayContent data={comic} key={comic.comic_id} reqParams="comics" />)}
                  </div>
                    
                  
                  </>):(<>
                    <div className="text-center">
                    <h3>Empty Comics Favourite list</h3>
                    <h4>You have no items in your favourite list. Start adding!</h4>
                    </div>
                    
                  </>) }
                
              </div>
            </div>
          </div>
        </section>
      </> 
    );
  }
}
const mapStateToProps = ({ marvelData }) => {
  return {
    marvelData,
  };
};
export default connect(mapStateToProps)(FavouriteComponet);