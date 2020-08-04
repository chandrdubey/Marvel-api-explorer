import React from 'react'

 const marvelPageItemComponent =(props) =>{
    
    return (
        <>
        {
          props.comics && props.comics.map((comic,index) =>
          <div key={index}>
          <li > {comic.name}</li>
          <hr />
          </div>
          )
        }
        </>
    )
}

export default marvelPageItemComponent