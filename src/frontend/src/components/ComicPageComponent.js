import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import MarvelPageItemComponent from "./MarvelPageItemComponent";
import { getComicByIdAction, isLoadingAction } from "../actions/getDataAction";

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
    console.log(user);
    console.log(`is ${this.props.isLoggedIn}`);

    // if(this.props.favCharecters){

    //    if(this.props.favCharecters.length > 0 && this.props.favCharecters.some(charecterMarvel=>charecterMarvel.charecter_id === params.id))
    //     {
    //       console.log("hello indaia");
    //           this.setState({
    //             isFavourite:true
    //           });
    //    }
    // }
  }

  render() {
    let image, knowMorUrl;
    let total_creators, creators, writer, penciler, publish, price, charecters;
    if (!isEmpty(this.props.comic)) {
      image =
        this.props.comic.thumbnail.path +
        "." +
        this.props.comic.thumbnail.extension;

      total_creators = this.props.comic.creators.available;
      //const creators = this.props.comic.creators.items;
      // creators = creators.map(item => item.role).filter((value, index, self) => self.indexOf(value) === index)

      creators = unique(this.props.comic.creators.items);
      console.log(creators);
      knowMorUrl = this.props.comic.urls;
      // writer = creators.find((creator) => creator.role ==="writer");
      // penciler = creators.find(
      //   (creator) =>
      //     (creator.role === "penciller" ||
      //     creator.role === "inker" ||
      //     creator.role ==="penciller (cover)")
      // );
      if (creators.length === 0) creators = undefined;
      price = this.props.comic.prices[0].price;
      publish = this.props.comic.dates[0].date.substring(0, 10);
      console.log(publish);

      //  console.log(knowMorUrl);
    }
    return this.props.isLoading ? (
      <Spinner />
    ) : (
      <>
        <div id="header" className="container-fluid show-page">
          <div className="row set-row">
            <div className="col-10 mx-auto">
              <div className="row ">
                <div className="col-5 charecter-image ">
                  <img
                    src={image}
                    className="img-fluid page-image"
                    alt="charecter"
                  />
                </div>
                <div className="col-7 charecter-detail ">
                  <div className="row">
                    <div className="col-10">
                      <h3>{this.props.comic.title} </h3>
                    </div>
                    <div className="col-2">
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

                  {creators && (
                    <>
                      <h3> Creators</h3>
                      <hr />
                    </>
                  )}
                  <div className="row">
                    {creators &&
                      creators.map((creator) => (
                        <div className="col-6" key={creator.name}>
                          <h4> {creator.role} </h4>
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
                  {this.props.comic.series && (
                    <>
                      <h3> Series</h3>
                      <hr />
                      <p>{this.props.comic.series.name}</p>
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
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
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
    //   favCharecters:state.auth.favCharecters
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getComicById: (id) => dispatch(getComicByIdAction(id)),
    Loading: () => dispatch(isLoadingAction()),
    // addCharecterFav : (userId,data)=> dispatch(addCharecterToFavAction(userId,data)),
    // removeCharecterToFav: (userId, charecterId) => dispatch(removeCharecterToFavAction(userId, charecterId))
    //    getFavCharecters : (userId) => dispatch(getFavCharectersAction(userId))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ComicPageComponent);
