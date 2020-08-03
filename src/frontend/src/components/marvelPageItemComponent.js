import React from 'react'

 const marvelPageItemComponent =(props) =>{
    
    return (
        <>
        {
          props.comics && props.comics.map(comic =>
          <div key={comic.name}>
          <li > {comic.name}</li>
          <hr />
          </div>
          )
        }
        </>
    )
}

export default marvelPageItemComponent