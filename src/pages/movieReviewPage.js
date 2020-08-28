import React from "react";
import PageTemplate from '../components/templateMoviePage';
import MovieReview from "../components/movieReview";
import SimilarMovies from "../components/similarMovies";

const MovieReviewPage = (props) => {
  return (
      <PageTemplate movie={props.location.state.movie}>
        <MovieReview review={props.location.state.review} /> 
		<SimilarMovies movie={props.location.state.movie}/>
      </PageTemplate>
  );
};

export default MovieReviewPage;