import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieWall from '../MovieWall/MovieWall'
import Favorites from '../Favorites/Favorites'
import WallOfShame from '../WallOfShame/WallOfShame'
import SearchResults from '../SearchResults/SearchResults'
import NotFound from '../NotFound/NotFound'

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieWall />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/shame" element={<WallOfShame />}/>
      <Route path="/search" element={<SearchResults />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Body