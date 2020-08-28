import React from "react";
import { Link } from "react-router-dom";
import "./actorMovieCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActorMovieCard = ({movie}) => {

  return (
    <div className="col-sm-2">
      <div className="card  bg-white">
      <Link to={`/movies/${movie.id}`}>
        <img
          className="card-img-tag center "
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <small>{movie.title}</small>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {movie.vote_average}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActorMovieCard;