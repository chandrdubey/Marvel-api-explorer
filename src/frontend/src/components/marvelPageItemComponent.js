import React from 'react'

 const marvelPageItemComponent =(props) =>{
     console.log(`child ${props.comics}`)
    return (
        <>
        {
          props.comics && props.comics.map(comic =>
          <li key={comic.name}> {comic.name}</li>
          )
        }
        </>
    )
}

export default marvelPageItemComponent