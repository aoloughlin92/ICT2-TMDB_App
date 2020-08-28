import React, { useEffect, createContext, useReducer } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";

export const UpcomingMoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-watchlist":
      return {
        movies: state.movies.filter((m) => m.id !== action.payload.movie.id),
        watchlist: [...state.watchlist, action.payload.movie],
      };
    case "load-movies":
      return { movies: [...action.payload.movies], watchlist: []};
      break;
    default:
      return state;
  }
};

const UpcomingMoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], watchlist: []});

  const addToWatchlist = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.movies[index] } });
  };

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-movies", payload: { movies } });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <UpcomingMoviesContext.Provider
      value={{
        movies: state.movies,
        watchlist: state.watchlist,
        addToWatchlist: addToWatchlist,
       }}
    >
      {props.children}
    </UpcomingMoviesContext.Provider>
  );
};

export default UpcomingMoviesContextProvider;