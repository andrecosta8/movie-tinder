import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllFavorites, removeFavorite } from "../../redux/movieSlice";
import MovieList from "../../components/MovieList/MovieList";


const Favorites = () => {
  const favorites = useSelector((state) => state.movie.favorites);
  const dispatch = useDispatch();  

  const removeFromFavorites = movie => {
    console.log("DELETE",movie)
    dispatch(removeFavorite(movie))
  }
  return (
    <div>
      <MovieList movies={favorites} action={removeFromFavorites} />
      {favorites.length > 0 ? <button onClick={()=> dispatch(removeAllFavorites())}>Remove All</button> : <p>You don't have any favorite movies!</p>}
    </div>
  );
};

export default Favorites;
