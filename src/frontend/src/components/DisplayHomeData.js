import React from "react";
import { Link } from "react-router-dom";
const DisplayHomeData = (props) => {
  let dataUrl = "/" + props.reqParams + "/";

  return (
    <div className="row  content-row align-items-center  ">
      {props.allData.length &&
        props.allData.map((data) => (
          <div className="card-len " key={data.id}>
            <Link to={dataUrl + data.id}>
              <div className="card text-center">
                <div className="card-img">
                  <img src={data.image} className="card-img-top" alt="..." />
                  {/* <div className="card-img-overlay text-right p-0">
                  <i className="fa fa-heart"></i>
                  </div> */}
                </div>
                <div className="card-body ">
                {/* <div className="text-right p-0">
                  <i className="fa fa-heart"></i>
                  </div>  */}
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
