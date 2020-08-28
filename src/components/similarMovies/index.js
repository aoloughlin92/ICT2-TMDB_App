import React, { useContext, useState, useEffect}from "react";
import MovieList from '../movieList'
import AddToFavoritesButton from '../buttons/addToFavorites'

export default ({ movie }) => {

const [movies, setMovies] = useState([]);
	useEffect(() => {
		  fetch(
				`https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
		  )
		  .then(res => res.json())
		  .then(json =>{
			  return json.results
		  })
		  .then(movies => {
			  setMovies(movies);
		  });
	},[]); 



  return (
      <MovieList 
        title=''
        movies={movies}
        action={movie => <AddToFavoritesButton movie={movie} />}
      />
  );
};
