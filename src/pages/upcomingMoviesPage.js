import React, {useState, useEffect, useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddToWatchlistButton from '../components/buttons/addToWatchlist';
import {UpcomingMoviesContext} from '../contexts/upcomingMoviesContext';
import {getUpcomingMovies} from '../api/tmdb-api';

const UpcomingMoviesPage = () => {
  const [ titleFilter, setTitleFilter] = useState("");

	const context = useContext(UpcomingMoviesContext);


  return (
    <MovieListPageTemplate
      movies={context.movies}
      title={"Upcoming Movies"}
      action={movie => <AddToWatchlistButton movie={movie} />}
    />
  );
};

export default UpcomingMoviesPage;