import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllDisliked, removeDisliked } from "../../redux/movieSlice";
import MovieList from "../../components/MovieList/MovieList";

const WallOfShame = () => {
  const disliked = useSelector((state) => state.movie.disliked);
  const dispatch = useDispatch();

  const removeFromDisliked = movie => {
    dispatch(removeDisliked(movie))
  }
  return (
    <div>
          <MovieList movies={disliked} action={removeFromDisliked} />
          {disliked.length > 0 ? <button onClick={()=> dispatch(removeAllDisliked())}>Remove All</button> : <p>You don't have any disliked movies!</p>}
          
    </div>
  );
};

export default WallOfShame;
