import React from "react";
import styled from "styled-components";


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: background-color:#D29F12;
  height: 3em;
  width: 400px;

  @media(max-width: 480px) {
    font-size: 1em;
  }
`;

const CardImage = styled.img`
width:300px;
height:400px;
border: 1px solid;
border-radius: 20%;
border-color: #D29F12;

@media(max-width: 480px) {
    width:200px;
    height:300px;
  }
`;

const Card = styled.div`
display: flex;
flex-direction:column;
align-items: center;
width: 500px;
height: 650px;
border: 2px solid;
border-color: #D29F12;
border-radius: 20%;
background-color: silver;

@media(max-width: 480px) {
    width:300px;
    height:400px;
  }
`;

const Buttons = styled.div`
margin-top:2em;
height: 3em;
`;

const LikeButton = styled.button`
width: 6em;
height: 3em;
font-size: 1em;
background-color: green;
color: white;
margin:0.5em;
border-radius: 15%;

:hover & {
    cursor:pointer;
  }
`;

const DislikeButton = styled.button`
width: 6em;
height: 3em;
font-size: 1em;
background-color: red;
color: white;
margin:0.5em;
border-radius: 15%;

:hover & {
    cursor:pointer;
  }
`;

const MovieCard = ({ movie, addFavorite, addDislike }) => {
    return (
        <Card>
            <Title>{movie.title}</Title>
            <CardImage
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}>
            </CardImage>

            <Buttons>
                <DislikeButton onClick={() => addDislike(movie)}>Dislike</DislikeButton>
                <LikeButton onClick={() => addFavorite(movie)}>Like</LikeButton>
            </Buttons>
        </Card>

    );
};

export default MovieCard;
