import React from "react";
import { Link } from "react-router-dom";
import DisplayContent from "./DisplayContent";

const DisplayHomeData = (props) => {
  
  return (
    <div className="row  content-row align-items-center  ">
      {props.allData.length &&
        props.allData.map((data) => (
          <div key={data.id} className ="card-len">
                        <DisplayContent data = {data} reqParams = {props.reqParams} />
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
