import React, { useContext } from "react";
import {UpcomingMoviesContext} from "../../contexts/upcomingMoviesContext";

const AddToWatchlistButton = ({ movie }) => {
  const context = useContext(UpcomingMoviesContext);

  const handleAddToWatchlist = e => {
    e.preventDefault();
    context.addToWatchlist(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToWatchlist}
    >
      Add to Watchlist
    </button>
  );
};

export default AddToWatchlistButton;