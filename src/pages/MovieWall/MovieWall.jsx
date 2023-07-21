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
background-color:grey;
display:flex;
justify-content: center;
align-items:center
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
    let filmID = Math.floor(Math.random() * 999) + 1;
    let response = await getRandomMovie(filmID);
    const checkMovie = movieControl(filmID, disliked, favorites)
    if (response === null || checkMovie === false) {
      getMovieToDisplay()
    } else {
      dispatch(addRandomMovie(response.data))
    }
  }

  return (
    <MovieWallPage>
        <MovieCard movie={movie} addFavorite={handleFavorite} addDislike={handleDislike} />
    </MovieWallPage>
  );
};

export default MovieWall;
