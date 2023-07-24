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
    setInitialFavorites: (state, action) => {
      state.favorites = action.payload
    },
    removeFavorite: (state, action) => {
      const movieIdToRemove = action.payload;
      state.favorites = state.favorites.filter((movie) => movie.id !== movieIdToRemove.id);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeAllFavorites: (state, action) => {
      state.favorites = []
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    addToDisliked: (state, action) => {
      state.disliked.push(action.payload)
      localStorage.setItem('disliked', JSON.stringify(state.disliked))
    },
    setInitialDisliked: (state, action) => {
      state.disliked = action.payload
    },
    removeDisliked: (state, action) => {
      const movieIdToRemove = action.payload;
      state.disliked = state.disliked.filter((movie) => movie.id !== movieIdToRemove.id);
      localStorage.setItem('disliked', JSON.stringify(state.disliked));
    },
    removeAllDisliked: (state, action) => {
      state.disliked = []
      localStorage.setItem('disliked', JSON.stringify(state.disliked));
    },

    addSearchResults: (state, action) => {
      state.searchResults = action.payload
    },
    removeSearchItem: (state, action) => {
      const movieIdToRemove = action.payload;
      state.searchResults = state.searchResults.filter((movie) => movie.id !== movieIdToRemove.id);
    },
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
  removeAllFavorites,
  setInitialFavorites,
  setInitialDisliked,
  removeSearchItem
} = movieSlice.actions

export default movieSlice.reducer