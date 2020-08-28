import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {UpcomingMoviesContext} from '../contexts/upcomingMoviesContext'

const WatchlistPage = props => {
  const context = useContext(UpcomingMoviesContext);
  return (
    <MovieListPageTemplate
      movies={context.watchlist}
      title={"Your Watchlist"}
      //action={movie => <AddReviewButton movie={movie} />}
	  action={movie => <div></div>}
    />
  );
};

export default WatchlistPage;