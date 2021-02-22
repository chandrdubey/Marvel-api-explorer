import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getComicsAction,
  getComicsSearchAction,
  isLoadingAction,
} from "../../actions/getDataAction";
import DisplayData from "../DisplayData";
import Spinner from "../Spinner";
import Pagination from "react-js-pagination";
class ComicsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      activePage: 1,
      dataPerPage: 12,
    };
  }

  componentDidMount() {
    this.props.getComics();
    this.props.loading();
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loading();
    this.props.getComicsSearch(this.state.query);
  };
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }
  render() {
    window.scrollTo(0, 0);
    const title = "Marvel Comics List";
    let total_page = Math.ceil(
      this.props.comics.length / this.state.dataPerPage
    );
    let indexLast = this.state.dataPerPage * this.state.activePage;
    let indexFirst = indexLast - this.state.dataPerPage;
    let pageComic = this.props.comics.slice(indexFirst, indexLast);
    return (
      <>
        <section id="header" className=" d-flex align-items-center">
          <div className="container-fluid nav_bg container-page ">
            <div className="mx-auto  marginPage">
              <h1>{title}</h1>

              {/* <!-- Actual search  box --> */}

              <form
                className="form-group has-search"
                onSubmit={this.handleSubmit}
              >
                <span className="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  className="form-control shadow "
                  placeholder="Search"
                  onChange={this.handleChange}
                />
              </form>

              {this.props.isLoading ? (
                <Spinner />
              ) : this.props.comics.length > 0 ? (
                <>
                  <DisplayData allData={pageComic} reqParams="comics" />
                  {total_page !== 1 && (
                    <Pagination
                      hideDisabled
                      activePage={this.state.activePage}
                      itemsCountPerPage={this.state.dataPerPage}
                      totalItemsCount={this.props.comics.length}
                      pageRangeDisplayed={4}
                      hideFirstLastPages={true}
                      onChange={this.handlePageChange.bind(this)}
                    />
                  )}
                </>
              ) : (
                <h1 className="text-center">No result found</h1>
              )}
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
