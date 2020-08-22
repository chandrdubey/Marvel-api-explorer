import React from "react";
import { Link } from "react-router-dom";
const DisplayHomeData = (props) => {
  let dataUrl = "/" + props.reqParams + "/";

  return (
    <div className="row align-items-center text-center ">
      {props.allData.length &&
        props.allData.map((data) => (
          <div className="col-lg-2 col-md-4 col-sm-6" key={data.id}>
            <Link to={dataUrl + data.id}>
              <div key={data.id} className="">
                <div className="card text-center">
                  <div className="card-img">
                    <img src={data.image} className="card-img-top" alt="..." />
                  </div>
                  <div className="card-body">
                    <div className="card-title">
                      {data.name ? data.name : data.title}
                    </div>
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
