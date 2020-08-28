import React, {useState,useEffect} from "react";
import Movie from "../actorMovieCard/";
import "./actorMovies.css";
import { getActorMovies} from '../../api/tmdb-api';

const ActorMovies = ({movies}) => {

  const MovieCards = movies.map(m => (
    <Movie key={m.id} movie={m}/>
  ));
  return <div className="row movies bg-info">{MovieCards}</div>;
};

export default ActorMovies;