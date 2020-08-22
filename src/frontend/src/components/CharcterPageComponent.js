import React, { Component } from "react";
import {
  getCharecterByIdAction,
  isLoadingAction,
  addCharecterToFavAction,
  removeCharecterToFavAction,
} from "../actions/getDataAction";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import MarvelPageItemComponent from "./MarvelPageItemComponent";

class CharcterPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavourite: false,
    };
  }

  componentDidMount() {
    console.log(process.env.MARVEL_API_PUBLIC_KEY,"hell");
    const {
      match: { params },
    } = this.props;
    this.props.Loading();
    this.props.getCharecterById(params.id);
    let user = this.props.currentUser;
    console.log(this.props.favCharecters);
    console.log(user);
    console.log(`is ${this.props.isLoggedIn}`);

    if (this.props.favCharecters) {
      if (
        this.props.favCharecters.length > 0 &&
        this.props.favCharecters.some(
          (charecterMarvel) => charecterMarvel.charecter_id === params.id
        )
      ) {
        console.log("hello indaia");
        this.setState({
          isFavourite: true,
        });
      }
    }
  }
  handleFavourite = () => {
    if (!this.props.isLoggedIn) {
      this.props.history.push("/login");
    } else {
    //  console.log("lo");
      this.setState({
        isFavourite: true,
      });
      const {
        match: { params },
      } = this.props;
      const userId = this.props.currentUser.id;
      const data = {
        charecter_id: params.id,
        name: this.props.charecter.name,
        image:
          this.props.charecter.thumbnail.path +
          "." +
          this.props.charecter.thumbnail.extension,
      };
      this.props.addCharecterFav(userId, data);
    }
  };
  handleUnFavourite = () => {
    const {
      match: { params },
    } = this.props;
    const userId = this.props.currentUser.id;
    console.log("hello");
    this.setState({
      isFavourite: false,
    });
    this.props.removeCharecterToFav(userId, params.id);
  };
  render() {
    
    let image, knowMorUrl;
    let total_comics, comics, series,series_avai;
    if (!isEmpty(this.props.charecter)) {
    
  
    
      image =
        this.props.charecter.thumbnail.path +
        "." +
        this.props.charecter.thumbnail.extension;
        let image_not ="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
         if ( image === image_not) {
        image = "https://image.flaticon.com/icons/png/512/21/21104.png";
      }
      total_comics = this.props.charecter.comics.available;
      comics = this.props.charecter.comics.items;
      series = this.props.charecter.series;
      knowMorUrl = this.props.charecter.urls;
       series_avai= series.available;
      //  console.log(knowMorUrl);
    }
    return this.props.isLoading ? (
      <div className="margin-top"><Spinner /></div> 
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
                  <div className="">
                    <h3>
                      {this.props.charecter.name}
                      <span className="float-right">
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
                      </span>
                    </h3>
                    <hr />
                    <p>{this.props.charecter.description}</p>
                    {total_comics && ( <div>
                      <h3>
                        {this.props.charecter.name} featured in  comics ({total_comics})
                      </h3>
                      <hr />
                      <ul>
                        <MarvelPageItemComponent act ={1} comics={comics} />
                      </ul>
                    </div>)}
                   
                   {series_avai > 0 && (<div>
                      <h3>
                        {this.props.charecter.name} featured in series ({series.available})
                      </h3>
                      <hr />
                      <ul>
                        <MarvelPageItemComponent comics={series.items} />
                      </ul>
                    </div>) }
                    {knowMorUrl && (
                      <a
                        href={knowMorUrl[0].url}
                        className="btn btn-get-started"
                      >
                        Know more
                      </a>
                    )}
                  </div>
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
const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    charecter: state.marvelData.charecter,
    isLoading: state.marvelData.isLoading,
    isLoggedIn: state.auth.isLoggedIn,
    favCharecters: state.marvelData.favCharecters,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCharecterById: (id) => dispatch(getCharecterByIdAction(id)),
    Loading: () => dispatch(isLoadingAction()),
    addCharecterFav: (userId, data) =>
      dispatch(addCharecterToFavAction(userId, data)),
    removeCharecterToFav: (userId, charecterId) =>
      dispatch(removeCharecterToFavAction(userId, charecterId)),
    
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharcterPageComponent);
