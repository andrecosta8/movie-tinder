import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    randomMovie: [],
    favorites: [],
    disliked: [],
    searchResults: []
  },
  reducers: {
    addRandomMovie: (state, action) => {
      state.randomMovie = action.payload
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload)
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
    removeFavorite: (state, action) => {
      const movieIdToRemove = action.payload;
      state.favorites = state.favorites.filter((movie) => movie.id !== movieIdToRemove.id);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeAllFavorites: (state, action) => {
      state.favorites = []
    },
    addToDisliked: (state, action) => {
      state.disliked.push(action.payload)
      localStorage.setItem('disliked', JSON.stringify(state.disliked))
    },
    removeDisliked: (state, action) => {
      const movieIdToRemove = action.payload;
      state.disliked = state.disliked.filter((movie) => movie.id !== movieIdToRemove.id);
      localStorage.setItem('disliked', JSON.stringify(state.disliked));
    },
    removeAllDisliked: (state, action) => {
      state.disliked = []
    },

    addSearchResults: (state, action) => {
      return {
        ...state,
        searchResults: action.payload,
      };
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  addToFavorites,
  addToDisliked,
  addRandomMovie,
  removeFavorite,
  removeDisliked,
  addSearchResults,
  removeAllDisliked,
  removeAllFavorites
} = movieSlice.actions

export default movieSlice.reducer