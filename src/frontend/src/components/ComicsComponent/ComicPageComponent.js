import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner";

import {
  getComicByIdAction,
  setErrorFalseAction,
  isLoadingAction,
  addComicToFavAction,
  removeComicToFavAction,
} from "../../actions/getDataAction";
import {Page404} from "..";

class ComicPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavourite: false,
    };
  }
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.props.Loading();
    this.props.getComicById(params.id);
    let user = this.props.currentUser;
    if (this.props.favComics) {
      if (
        this.props.favComics.length > 0 &&
        this.props.favComics.some(
          (comicMarvel) => comicMarvel.comic_id === params.id
        )
      ) {
        console.log("hello indaia");
        this.setState({
          isFavourite: true,
        });
      }
    }
  }
  componentWillUnmount() {
    this.props.setErrorFalse();
  }
  handleFavourite = () => {
    if (!this.props.isLoggedIn) {
      this.props.history.push("/login");
    } else {
      this.setState({
        isFavourite: true,
      });

      const userId = this.props.currentUser.id;
      const data = {
        comic_id: this.props.comic.id,
        title: this.props.comic.title,
        image:
          this.props.comic.thumbnail.path +
          "." +
          this.props.comic.thumbnail.extension,
      };
      this.props.addComicFav(userId, data);
    }
  };
  //this function used to handle the unfavourite button's functions
  handleUnFavourite = () => {
    const {
      match: { params },
    } = this.props;
    const userId = this.props.currentUser.id;
    console.log("hello");
    this.setState({
      isFavourite: false,
    });
    this.props.removeComicToFav(userId, params.id);
  };
  render() {
    if (this.props.pageNotFound) {
      return <Page404 />;
    }
    let image, knowMorUrl;
    let publish, price, creators;
    if (!isEmpty(this.props.comic)) {
    
      image =
        this.props.comic.thumbnail.path +
        "." +
        this.props.comic.thumbnail.extension;

      creators = unique(this.props.comic.creators.items);
      console.log(creators);
      knowMorUrl = this.props.comic.urls;
      if (creators.length === 0) creators = undefined;
      price = this.props.comic.prices[0].price;
      publish = this.props.comic.dates[0].date.substring(0, 10);
      console.log(publish);
    }
    return this.props.isLoading ? (
      <div className="margin-top">
        <Spinner />
      </div>
    ) : (
      <>
        <div id="header" className="container-fluid show-page">
          <div className="row set-row">
            <div className="col-10 mx-auto">
              <div className="row ">
                <div className="col-lg-5 col-md-12 charecter-image ">
                  <img
                    src={image}
                    className="img-fluid page-image"
                    alt="charecter"
                  />
                </div>
                <div className="col-lg-7 col-md-12 charecter-detail  ">
                  <div className="row">
                    <div className="col-md-10 col-sm-9 data-title">
                      <h3>{this.props.comic.title} </h3>
                    </div>
                    <div className="col-md-2  col-sm-2 ">
                      {this.state.isFavourite ? (
                        <button
                          className="btn  fav-btn"
                          onClick={this.handleUnFavourite}
                        >
                          UnFavourite
                        </button>
                      ) : (
                        <button
                          className="btn  fav-btn"
                          onClick={this.handleFavourite}
                        >
                          Favourite
                        </button>
                      )}
                    </div>
                  </div>
                  <hr />
                  <p>{this.props.comic.description}</p>
                  {this.props.comic.series && (
                    <>
                      <h3> Series</h3>
                      <hr />
                      <p>{this.props.comic.series.name}</p>
                    </>
                  )}

                  {creators && (
                    <>
                      <h3> Creators</h3>
                      <hr />
                    </>
                  )}
                  <div className="row">
                    {creators &&
                      creators.map((creator) => (
                        <div className="col-6 " key={creator.name}>
                          <h4 className="color-text"> {creator.role} </h4>
                          <p>{creator.name}</p>
                        </div>
                      ))}
                  </div>

                  {publish && (
                    <>
                      <h3> Published on </h3>
                      <hr />
                      <p>{publish}</p>
                    </>
                  )}

                  {price && (
                    <>
                      <h3> Price </h3>
                      <hr />
                      <p>${price}</p>
                    </>
                  )}

                  {knowMorUrl && (
                    <a href={knowMorUrl[0].url} className="btn btn-get-started">
                      Know more
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
//this function is used to check whther an object is empty or not
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

//This function used to filter the creators
function unique(arr) {
  let distinct = [];

  arr.forEach((x) => {
    if (!distinct.some((creator) => creator.role === x.role)) {
      distinct.push(x);
    }
  });
  return distinct;
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    comic: state.marvelData.comic,
    isLoading: state.marvelData.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
    favComics: state.marvelData.favComics,
    pageNotFound: state.marvelData.pageNotFound,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getComicById: (id) => dispatch(getComicByIdAction(id)),
    Loading: () => dispatch(isLoadingAction()),
    addComicFav: (userId, data) => dispatch(addComicToFavAction(userId, data)),
    removeComicToFav: (userId, comicId) =>
      dispatch(removeComicToFavAction(userId, comicId)),
    setErrorFalse: () => dispatch(setErrorFalseAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ComicPageComponent);
