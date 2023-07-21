import React from 'react'

const MovieList = ({movies, action}) => {
  return (
    <div>{movies && movies.map((elem)=>{
        return(
            <>
            {action ? <p onClick={() => action(elem)}>{elem.title}</p>: <p >{elem.title}</p> }
            </>
        )
    })}</div>
  )
}

export default MovieList