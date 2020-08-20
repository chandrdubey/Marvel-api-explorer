import React from "react";
import { Link } from "react-router-dom";

const DisplayContent = (props) => {
  let reqParams = props.reqParams;
  let id = props.data.id;
  if (props.data.charecter_id) {
    id = props.data.charecter_id;
  }
  if (props.data.comic_id) {
    id = props.data.comic_id;
  }
  let dataUrl = "/" + reqParams + "/" + id;
  let image_src;
  if (props.data.image) {
    image_src = props.data.image;
  } else {
    image_src =
      props.data.thumbnail.path + "." + props.data.thumbnail.extension;
  }

  let image_not =
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
  if (props.data.name && image_src === image_not) {
    image_src = "https://image.flaticon.com/icons/png/512/21/21104.png";
  }
  let list = (
    <Link to={dataUrl}>
      <div className="card text-center">
        <div className="card-img">
          <img src={image_src} className="card-img-top" alt="..." />
        </div>

        <div className="card-body">
          <div className="card-title">
            {props.data.name ? props.data.name : props.data.title}
          </div>
        </div>
      </div>
    </Link>
  );
  return <div>{list}</div>;
};

export default DisplayContent;
