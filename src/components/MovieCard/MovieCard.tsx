import React from 'react';
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import Draggable from "react-draggable";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

type Movie = {
  title: string;
  poster_path: string;
};

type MovieCardProps = {
  movie: Movie;
  addFavorite: (movie: Movie) => void;
  addDislike: (movie: Movie) => void;
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 2em;
  width: 350px;
  @media(max-width: 480px) {
    font-size: 1.2em;
    width: 80vw;
  }
`;

const CardImage = styled.img`
  width:300px;
  height:400px;
  border: 1px solid;
  border-radius: 2%;
  border-color: #D29F12;
  box-shadow: rgba(42, 48, 226, 0.663) 0px 1px 2px, rgb(51, 51, 51) 0px 5px 5px 5px;
  cursor: pointer;

  &:hover{
    transition: linear 1s;
    opacity:0.8;
  }

  @media(max-width: 480px) {
    width:auto;
    height:55vh;
  }
`;

const Card = styled.div`
  margin-bottom: 1em;
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 500px;
  height: 650px;
  border: 1px solid;
  border-radius: 2%;
  border-color: #D29F12;
  box-shadow: rgba(42, 48, 226, 0.663) 0px 1px 2px, rgb(51, 51, 51) 0px 5px 5px 5px;
  
  @media(max-width: 480px) {
    border:none;
    box-shadow: none;
    width:90vw;
  }
`;

const Buttons = styled.div`
  margin-top:1em;
  height: 3em;
  cursor: pointer;
`;

const MovieCard: React.FC<MovieCardProps> = ({ movie, addFavorite, addDislike }) => {
  const actionHandler = (action: "left" | "right") => {
    if (action === "left") {
      addDislike(movie);
    } else if (action === "right") {
      addFavorite(movie);
    }
  };

  return (
    <Card>
      <Title>{movie.title}</Title>
      <Draggable
        axis="x"
        position={{ x: 0, y: 0 }}
        bounds={{ left: -300, right: 300 }}
        onStop={(e, data) => {
          // Determine swipe direction based on dragged distance
          if (data.x > 150) {
            actionHandler("right");
          } else if (data.x < -150) {
            actionHandler("left");
          }
        }}
      >
        <CardImage
          style={{ touchAction: 'pan-x' }}
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      </Draggable>
      <Buttons>
        <IconButton color="error" onClick={() => actionHandler("left")}>
          <CancelIcon sx={{ fontSize: 60 }} color="error" />
        </IconButton>
        <IconButton color="success" onClick={() => actionHandler("right")}>
          <CheckCircleIcon sx={{ fontSize: 60 }} />
        </IconButton>
      </Buttons>
    </Card>
  );
};

export default MovieCard;

