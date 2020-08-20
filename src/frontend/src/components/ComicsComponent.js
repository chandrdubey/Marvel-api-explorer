import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getComicsAction,
  getComicsSearchAction,
  isLoadingAction,
} from "../actions/getDataAction";
import DisplayData from "./DisplayData";
import Spinner from "./Spinner";
import Pagination from "react-js-pagination";
class ComicsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      activePage: 1,
      dataPerPage: 12
    };
  }

  componentDidMount() {
    this.props.getComics();
    //    console.log(this.props.comics);
    this.props.loading();
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });

  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getComicsSearch(this.state.query);
    this.setState({
      activePage : 1
    });
    this.props.loading();
  };
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }
  render() {
    const title = "Marvel Comics List";
    let indexLast = this.state.dataPerPage * this.state.activePage;
    let indexFirst = indexLast - this.state.dataPerPage;
     let pageComic = this.props.comics.slice(indexFirst, indexLast);
    return (
      <>
        <section id="header" className=" d-flex align-items-center">
          <div className="container-fluid nav_bg ">
            <div className="row">
              <div className="col-10 mx-auto  marginPage">
                <h1>{title}</h1>
                <form
                  className="form-inline my-2 my-lg-0"
                  onSubmit={this.handleSubmit}
                >
                  <input
                    className="search-data"
                    type="search"
                    onChange={this.handleChange}
                    placeholder="Search"
                    aria-label="Search"
                  />
                  {/* <button className="btn btn-outline-success my-2 my-sm-0"  type="submit">Search</button> */}
                </form>
                {this.props.isLoading ? (
                  <Spinner />
                ) : this.props.comics ? (
                  <>
                  <DisplayData allData={pageComic} reqParams="comics" />
                  <Pagination
                      hideDisabled
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.dataPerPage}
                      totalItemsCount={this.props.comics.length}
                      pageRangeDisplayed={5}
                      onChange={this.handlePageChange.bind(this)}
                    />
                  </>
                ) : (
                  <h1 className="text-center">No result found</h1>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comics: state.marvelData.comics,
    isLoading: state.marvelData.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getComics: () => dispatch(getComicsAction()),
    getComicsSearch: (query) => dispatch(getComicsSearchAction(query)),
    loading: () => dispatch(isLoadingAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComicsComponent);
