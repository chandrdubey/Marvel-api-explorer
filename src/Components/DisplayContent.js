import React from "react";

const DisplayContent = (props)=> {
    console.log(props.charecters);
    let list = props.charecters.map(charecter => 
    (
        <div key = {charecter.id}><div className="card" >
        <img src={charecter.thumbnail.path + '.'+charecter.thumbnail.extension } className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{charecter.name}</h5>
          <p className="card-text">
            {charecter.description}
          </p>
          <a href="#" className="btn btn-primary" >
            Go somewhere
          </a>
        </div>
      </div>
      </div>
      )
    )
  return (
      
      <div className="col-4">
            {list}
          </div> 
  );  
}

export default  DisplayContent
