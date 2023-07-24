import React from "react";
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import Draggable from "react-draggable";
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  height: 3em;
  width: 350px;

  @media(max-width: 480px) {
    font-size: 1em;
    width: 300px;
  }
`;

const CardImage = styled.img`
  width:300px;
  height:400px;
  border: 1px solid;
  border-radius: 20%;
  border-color: #D29F12;

  @media(max-width: 480px) {
    width:250px;
    height:350px;
  }
`;

const Card = styled.div`
  margin-bottom: 1em;
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 500px;
  height: 650px;
  border: 5px solid;
  border-color: #D29F12;
  border-radius: 20%;


  @media(max-width: 480px) {
    width:350px;
    height:550px;
  }
`;

const Buttons = styled.div`
  margin-top:2em;
  height: 3em;
`;

const MovieCard = ({ movie, addFavorite, addDislike }) => {

    const actionHandler = (action) => {
        const movieToSend = movie;
        if (action === "left") {
            addDislike(movieToSend)

        }
        if (action === "right") {
            addFavorite(movieToSend)

        }
    }

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
                    alt={movie.title}>
                </CardImage>
            </Draggable>
            <Buttons>
                <IconButton sx={{ color: "#D29F12" }} onClick={() => actionHandler("left")} >
                    <ThumbDownOutlinedIcon sx={{ fontSize: 50 }} />
                </IconButton >
                <IconButton sx={{ color: "#D29F12" }} onClick={() => actionHandler("right")} >
                    <ThumbUpOutlinedIcon sx={{ fontSize: 50 }} />
                </IconButton>
            </Buttons>
        </Card>
    );
};

export default MovieCard;


