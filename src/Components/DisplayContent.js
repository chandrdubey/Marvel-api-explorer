import React from "react";


const DisplayContent = (props)=> {
    console.log(props.charecter.urls[0].url);
    let list = 
        <div className="card" >
        <img src={props.charecter.thumbnail.path + '.'+props.charecter.thumbnail.extension } className="card-img-top" alt="..." />
        <div className="card-body">
          <a href={props.charecter.urls[0].url} className="card-title">{props.charecter.name}</a>
          <p className="card-text">
            {props.charecter.description}
          </p>
        </div>
      </div>
  return (
      
         <div >
            {list}
          </div> 
  );  
}

export default  DisplayContent
