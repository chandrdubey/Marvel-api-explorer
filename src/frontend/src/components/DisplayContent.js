import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addCharecterToFavAction, addComicToFavAction, removeCharecterToFavAction, removeComicToFavAction } from "../actions/getDataAction";


class DisplayContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFav: false,
    };
  }
  componentDidMount = () => {
    // console.log(this.props.reqParams);
    //console.log(this.state.isFav);
    let id = this.props.data.id;
    console.log(this.props.data);
    if (this.props.reqParams === "comics") {
      if (this.props.data.comic_id) {
        id = this.props.data.comic_id;
      }
      if (this.props.marvelData.favComics) {
        if (
          this.props.marvelData.favComics.length > 0 &&
          this.props.marvelData.favComics.some(
            (comicMarvel) => comicMarvel.comic_id === id.toString()
          )
        ) {
          console.log("hello indaia");
          this.setState({
            isFav: true,
          });
        }
      }
    } else {
      if (this.props.data.charecter_id) {
        id = this.props.data.charecter_id;
      }
      if (this.props.marvelData.favCharecters) {
        if (
          this.props.marvelData.favCharecters.length > 0 &&
          this.props.marvelData.favCharecters.some(
            (charecterMarvel) => charecterMarvel.charecter_id === id.toString()
          )
        ) {
          console.log("hello indaia");
          this.setState({
            isFav: true,
          });
          console.log(this.state.isFav);
        }
      }
    }
  };

  // Favourite button
  handleFavourite = () => {
    if (!this.props.auth.isLoggedIn) {
      this.props.history.push("/login");
    } else {
      this.setState({
        isFav: true,
      });
      if (this.props.reqParams === "charecters") {
        const id = this.props.data.id ? this.props.data.id: this.props.data.charecter_id;
        let image_src = this.props.data.image;
        if (!this.props.data.image) {
          
           image_src =
            this.props.data.thumbnail.path +
            "." +
            this.props.data.thumbnail.extension;
        }              
        const userId = this.props.auth.currentUser.id;
        const data = {
          charecter_id: id,
          name: this.props.data.name,
          image: image_src
        };
        console.log(data);
       this.props.dispatch(addCharecterToFavAction(userId, data) );
      }else{
        const id = this.props.data.id ? this.props.data.id: this.props.data.charecter_id;
        let image_src = this.props.data.image;
        if (!this.props.data.image) {
          
          image_src =
           this.props.data.thumbnail.path +
           "." +
           this.props.data.thumbnail.extension;
       }
       const userId = this.props.auth.currentUser.id;
  
          const data = {
            comic_id: id,
            title: this.props.data.title,
            image: image_src
          };
          console.log(data);
          this.props.dispatch(addComicToFavAction(userId, data));  
      }
  
    }
  };


  // Unfavourite button
  handleUnFavourite = () => {
    const userId = this.props.auth.currentUser.id;
    console.log("hello");
    this.setState({
      isFav: false,
    });
    if (this.props.reqParams === "charecters") {
      const id = this.props.data.id ? this.props.data.id: this.props.data.charecter_id;
      this.props.dispatch(removeCharecterToFavAction(userId, id));
    }else{
      const id = this.props.data.id ? this.props.data.id: this.props.data.comic_id;
      this.props.dispatch(removeComicToFavAction(userId, id));
    }
  };



  render() {
    if (this.props.reqParams === "comics") {
    }
    let reqParams = this.props.reqParams;
    let id = this.props.data.id;
    if (this.props.data.charecter_id) {
      id = this.props.data.charecter_id;
    }
    if (this.props.data.comic_id) {
      id = this.props.data.comic_id;
    }
    let dataUrl = "/" + reqParams + "/" + id;
    let image_src;
    if (this.props.data.image) {
      image_src = this.props.data.image;
    } else {
      image_src =
        this.props.data.thumbnail.path +
        "." +
        this.props.data.thumbnail.extension;
    }

    let image_not =
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
    if (this.props.data.name && image_src === image_not) {
      image_src = "https://image.flaticon.com/icons/png/512/21/21104.png";
    }
    let list = (
      <div className="card text-center ">
        <Link to={dataUrl}>
          <div className="card-img">
            <img src={image_src} className="card-img-top" alt="..." />
          </div>
        </Link>
        <div className="card-body">
          <div id="fav">
            {this.state.isFav ? (
              <button onClick={this.handleUnFavourite}>
                <i className="fa fa-heart" aria-hidden="true"></i>
              </button>
            ) : (
              <button onClick={this.handleFavourite}>
                <i className="fa fa-heart-o" aria-hidden="true"></i>
              </button>
            )}
          </div>
          <div className="card-title">
            {this.props.data.name
              ? this.props.data.name
              : this.props.data.title}
          </div>
        </div>
      </div>
    );
    return <>{list}</>;
  }
}

const mapStateToProps = ({ marvelData, auth }) => {
  return {
    marvelData,
    auth,
  };
};
export default withRouter(connect(mapStateToProps)(DisplayContent));
