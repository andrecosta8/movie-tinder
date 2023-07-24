import React from 'react'
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const MovieListPage = styled.div`
  width: 100vw;
  display:flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 14em;

  @media(max-width: 480px) {
    flex-direction: column;
    align-items:center;
    padding-left: 0;
    }
`;

const SmallCard = styled.div`
  width:300px;
  height:400px;
  margin:1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;

const Title = styled.h3`
  text-align: center;
`;

const CardImage = styled.img`
  width:200px;
  height:300px;
  border: 2px solid;
  border-radius: 20%;
  border-color: #0d76b5;
  }
`;


const MovieList = ({ movies, action }) => {
  return (
    <MovieListPage>
      {movies && movies.map((elem) => {
        return (
          <SmallCard>
            <CardImage
              src={`https://image.tmdb.org/t/p/original${elem.poster_path}`}
              alt={elem.title} />
            <Title>
              {elem.title}
              <IconButton color="error" onClick={() => action(elem)}>
                <CloseIcon />
              </IconButton>
            </Title>
          </SmallCard>
        )
      })}
    </MovieListPage>
  )
}

export default MovieList