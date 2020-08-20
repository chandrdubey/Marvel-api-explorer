import React from "react";
import {Link} from 'react-router-dom'
const DisplayHomeData = (props) => {
    let dataUrl ='/'+props.reqParams + '/'; 
    
   
  return (
    <div className="row align-items-center text-center ">
      {props.allData.length &&
        props.allData.map((data) => (
         
                <Link to={dataUrl + data.id} key={data.id} >
                <div key={data.id} className="">
            <div className="card text-center">
              <img src={data.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-title">
                   {data.name ? data.name : data.title}
                </div>
                 
                   
              </div>
            </div>
          </div>
                </Link>
              
        ))}
        <div className="btn-more">
            <Link to={"/" + props.reqParams} className="btn btn-get-started">All {props.reqParams}</Link>
        </div>
       
    </div>
  );
};
export default  DisplayHomeData;
