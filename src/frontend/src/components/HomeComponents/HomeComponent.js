import React, { Component } from "react";
import marvel from "../../uploads/homeData";
import DisplayHomeData from "./DisplayHomeData";
import { connect } from "react-redux";
import Spinner from "../Spinner";

class HomeComponent extends Component {
  render() {
    return this.props.isLoading ? (
      <div className="margin-top">
        <Spinner />
      </div>
    ) : (
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
const mapStateToProps = ({ marvelData }) => {
  return {
    isLoading: marvelData.isLoading,
  };
};
export default connect(mapStateToProps)(HomeComponent);
