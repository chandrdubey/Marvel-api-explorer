import React from "react";
import { Link } from "react-router-dom";
const DisplayHomeData = (props) => {
  let dataUrl = "/" + props.reqParams + "/";

  return (
    <div className="row mx-auto align-items-center text-center ">
      {props.allData.length &&
        props.allData.map((data) => (
          <div className="mx-auto">
            <Link to={dataUrl + data.id}  key={data.id}>
           
                <div className="card text-center mx-auto">
                  <div className="card-img">
                    <img src={data.image} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className="card-title">
                      {data.name ? data.name : data.title}
                    </div>
                  </div>
                </div>
            </Link>
          </div>
        ))}
      <div className="btn-more">
        <Link to={"/" + props.reqParams} className="btn btn-get-started">
          All {props.reqParams}
        </Link>
      </div>
    </div>
  );
};
export default DisplayHomeData;
