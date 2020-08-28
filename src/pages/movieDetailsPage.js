import React, {useState, useEffect} from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import SimilarMovies from "../components/similarMovies";
import MovieCast from "../components/movieCast";
import useMovie from "../hooks/useMovie";
import {getMovieCast} from '../api/tmdb-api';



const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)  // NEW

  const [actors, setActors] = useState([]);
	useEffect(() => {
		getMovieCast(id).then(actors => {
			  setActors(actors);
		  });
	},[]);

   return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        /><br/>
		<div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/similar") ? (
              <Link
                className="btn btn-secondary btn-block active"
                to={`/movies/${id}/similar`}
              >
                Show Similar Movies
              </Link>
            ) : (
              <Link
                className="btn btn-secondary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Similar Movies 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/similar`}
          render={props => <SimilarMovies movie={movie} {...props} />}
        /><br/>
		<div className="row actors bg-info">
			<div className="col-12">
				<h2 className="text-white">
					Actors in {movie.title}:
				</h2>
			</div>
		</div>
		<div>
		<MovieCast actors={actors} />
		</div>
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
}

export default MoviePage;