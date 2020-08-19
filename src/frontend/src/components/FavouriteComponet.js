import React, { Component } from "react";

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
                      
                        <button className="dropdown-item" onClick={()=> this.handleFavouriteList(2)} >
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
                {/* {this.state.favourite === 1 ? (<h1></h1>):(<h1></h1>)} */}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default FavouriteComponet;
