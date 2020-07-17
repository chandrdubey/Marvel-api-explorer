import React from "react";

const DisplayContent = (props) => {
  let list = (
    <div className="card">
      <img
        src={props.data.thumbnail.path + "." + props.data.thumbnail.extension}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <a href={props.data.urls[0].url} className="card-title">
          {props.data.name ? props.data.name : props.data.title}
        </a>
      </div>
    </div>
  );
  return <div>{list}</div>;
};

export default DisplayContent;
