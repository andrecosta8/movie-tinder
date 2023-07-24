/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { getRandomMovie } from "../../utils/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { addRandomMovie, addToDisliked, addToFavorites } from "../../redux/movieSlice";
import { movieControl } from "../../utils/movieControl";
import styled from "styled-components";

const MovieWallPage = styled.div`
  height: 90vh;
  width:100vw;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,0.6446953781512605) 0%, rgba(248,249,248,1) 50%);

  @media(max-width: 480px) {
    padding-top: 10vh;
  }
`;

const Tip = styled.h3`
  font-size: 0.8em;
  text-align: center;

  @media(max-width: 480px) {
    width: 250px;
  }
`;

const MovieWall = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.randomMovie)
  const disliked = useSelector((state) => state.movie.disliked);
  const favorites = useSelector((state) => state.movie.favorites);

  useEffect(() => {
    getMovieToDisplay()
  }, [])

  const handleFavorite = movie => {
    dispatch(addToFavorites(movie))
    getMovieToDisplay()
  }

  const handleDislike = movie => {
    dispatch(addToDisliked(movie))
    getMovieToDisplay()
  }

  const getMovieToDisplay = async () => {
    try {
      let filmID = Math.floor(Math.random() * 999) + 1;
      let response = await getRandomMovie(filmID);
      const checkMovie = movieControl(filmID, disliked, favorites)
      if (response === null || checkMovie === false) {
        getMovieToDisplay()
      } else {
        dispatch(addRandomMovie(response.data))
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <MovieWallPage>
      <MovieCard data-testid="movie-card" movie={movie} addFavorite={handleFavorite} addDislike={handleDislike} />
      <Tip data-testid="tip" >TIP: Use the like or dislike button to add the movie to your favorites or to your disliked movies.
        Also you can swipe the movie image: Right to like, left to dislike.
      </Tip>
    </MovieWallPage>
  );
};

export default MovieWall;
