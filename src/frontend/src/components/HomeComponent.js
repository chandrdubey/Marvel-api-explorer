import React, { Component } from "react";
import marvel from "../uploads/homeData";
import DisplayHomeData from "./DisplayHomeData";

class HomeComponent extends Component {
  
  render() {
    console.log(marvel.marvelCharecters);
    return (
      <>
        <section id="header" className=" d-flex align-items-center">
          <div className="container-fluid nav_bg container-page">
           
              <div className="mx-auto marginPage">
                <div>
                  <h1>Marvel Charecters</h1>
                  <DisplayHomeData
                    allData={marvel.marvelCharecters}
                    reqParams="charecters"
                  />
                </div>
                <hr />
                <div>
                  <h1>Marvel Comics</h1>
                  <DisplayHomeData
                    allData={marvel.marvelComics}
                    reqParams="comics"
                  />
                </div>
              </div>
            </div>
         
        </section>
      </>
    );
  }
}

export default HomeComponent;
