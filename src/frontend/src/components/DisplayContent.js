import React from "react";
import {Link} from 'react-router-dom'

const DisplayContent = (props) => {
 
   let reqParams = props.reqParams;
   let dataUrl ='/'+reqParams + '/' + props.data.id; 
   let image_src = props.data.thumbnail.path + "." + props.data.thumbnail.extension;
   let image_not ="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available." + props.data.thumbnail.extension;
  if(props.data.name && image_src === image_not)
  {
       image_src = "https://image.flaticon.com/icons/png/512/21/21104.png";
  }
  let list = (
    
        <Link to={dataUrl} >
        <div className="card text-center" >
      <img
        src={image_src}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
      <div  className="card-title">
      {props.data.name ? props.data.name : props.data.title}
      </div>
         
          </div>
    </div>
        </Link>
       
    
  );
  return <div>{list}</div>;
};

export default DisplayContent;
