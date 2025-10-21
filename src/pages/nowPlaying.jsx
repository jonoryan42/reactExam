import React from "react";
import PageTemplate from "../components/templateMovieListPage";
// import { getMovie } from "../api/tmdb-api";
import { getMovies } from "../api/tmdb-api";
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
// import getNowPlaying from "../api/tmdb-api";

const NowPlayingPage = (props) => {

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['discover'],
    queryFn: getMovies,
  })

  if (isPending) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }
  
    const movies = data.results;

//       // Redundant, but necessary to avoid app crashing.
//   const favorites = movies.filter(m => m.favorite)
//   localStorage.setItem('favorites', JSON.stringify(favorites))
//   const addToFavorites = (movieId) => true


return (
    <PageTemplate
      title="Now Playing"
      movies={movies}
    //   action={(movie) => {
    //     return <AddToFavoritesIcon movie={movie} />
    //   }}
    />
  );
};

export default NowPlayingPage;

