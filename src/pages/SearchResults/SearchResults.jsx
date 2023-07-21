import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchResults } from "../../redux/movieSlice";
import { searchMovies } from "../../utils/apiCalls";
import MovieList from "../../components/MovieList/MovieList";




const SearchResults = () => {
  const searchResults = useSelector((state) => state.movie.searchResults);
  const dispatch = useDispatch(); 

  useEffect(()=>{
    dispatch(addSearchResults([]))
  },[])


  const inputSearchHandler = (e) => {
    let timeOutId;
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout( async() => {
      let response = await searchMovies(e.target.value);
      dispatch(addSearchResults(response.data.results));
    }, 1500);
  };

  return (
    <div>
    <input
          name="movie"
          placeholder="Search your product..."
          className="search-input"
          onChange={(e) => inputSearchHandler(e)}
        />
        <MovieList movies={searchResults} />
    </div>
  );
};

export default SearchResults;
