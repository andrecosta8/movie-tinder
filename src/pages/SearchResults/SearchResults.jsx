/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchResults, addToDisliked, addToFavorites, removeSearchItem } from "../../redux/movieSlice";
import { searchMovies } from "../../utils/apiCalls";
import './SearchResults.css'
import SearchIcon from "@mui/icons-material/Search";
import MovieCard from "../../components/MovieCard/MovieCard";
import { movieControl } from "../../utils/movieControl";


const SearchResults = () => {
  const searchResults = useSelector((state) => state.movie.searchResults);
  const disliked = useSelector((state) => state.movie.disliked);
  const favorites = useSelector((state) => state.movie.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSearchResults([]))
  }, [])

  const inputSearchHandler = (e) => {
    let timeOutId;
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(async () => {
      try {
        let response = await searchMovies(e.target.value);
        dispatch(addSearchResults(response.data.results));
      } catch (err) {
        console.error(err)
      }

    }, 1500);
  };

  const removeFromSearch = movie => {
    dispatch(removeSearchItem(movie))
  }

  const handleFavorite = movie => {
    const checkMovie = movieControl(movie.id, disliked, favorites)
    if (checkMovie === true) {
      dispatch(addToFavorites(movie))
      removeFromSearch(movie)
    } else {
      removeFromSearch(movie)
    }
  }

  const handleDislike = movie => {
    const checkMovie = movieControl(movie.id, disliked, favorites)
    if (checkMovie === true) {
      dispatch(addToDisliked(movie))
      removeFromSearch(movie)
    } else {
      removeFromSearch(movie)
    }
  }

  return (
    <div className="search-page">
      <div className="search-container">
        <input
          name="movie"
          placeholder="Search your movie..."
          className="search-input"
          onChange={(e) => inputSearchHandler(e)}
        />
        <SearchIcon sx={{ color: "#0d76b5" }} />
      </div>
      {searchResults.map((elem) => {
        return (
          <MovieCard movie={elem} addFavorite={handleFavorite} addDislike={handleDislike} />
        )
      })}

    </div>
  );
};

export default SearchResults;
