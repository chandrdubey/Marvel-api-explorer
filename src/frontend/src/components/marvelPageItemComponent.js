import React from 'react'

 const marvelPageItemComponent =(props) =>{
    
    return (
        <>
        {
          props.comics && props.comics.map((comic,index) => index < 5 &&
          <div key={index}>
          <li > <p> {comic.name}</p></li>
          <hr />
          </div>
          )
        }
        </>
    )
}

export default marvelPageItemComponent