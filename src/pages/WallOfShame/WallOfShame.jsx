/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllDisliked, removeDisliked, setInitialDisliked } from "../../redux/movieSlice";
import MovieList from "../../components/MovieList/MovieList";
import styled from "styled-components";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "../../utils/notifications";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const WallOfShamePage = styled.div`
  min-height:90vh;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,0.6446953781512605) 0%, rgba(248,249,248,1) 50%);

  @media(max-width: 480px) {
    padding-top: 10vh;
  }
`;

const WallOfShame = () => {
  const disliked = useSelector((state) => state.movie.disliked);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedDisliked = JSON.parse(localStorage.getItem('disliked'));
    dispatch(setInitialDisliked(savedDisliked))
  }, [])

  const removeFromDisliked = movie => {
    dispatch(removeDisliked(movie))
    notify(`${movie.title} has been removed from your wall of shame`)
  }

  const removeAllDislikedMovies = () => {
    dispatch(removeAllDisliked())
    notify("All your movies have been removed from your wall of shame")
  }

  return (
    <WallOfShamePage>
      <ToastContainer />
      {disliked.length > 0 ?
        <>
          <Button
            variant="outlined"
            sx={{ color: "#0d76b5", top: "1em" }}
            startIcon={<DeleteIcon />}
            onClick={() => removeAllDislikedMovies()}
          >
            Remove All
          </Button>
          <ScrollToTop />
        </>
        :
        <p>You don't have any disliked movies!</p>}
      <MovieList movies={disliked} action={removeFromDisliked} />
    </WallOfShamePage>
  );
};

export default WallOfShame;
