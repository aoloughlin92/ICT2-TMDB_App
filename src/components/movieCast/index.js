import React from "react";
import Actor from "../actorCard/";
import "./movieCast.css";

const MovieCast = ({actors}) => {
  const actorCards = actors.map(m => (
    <Actor key={m.id} actor={m} />
  ));
  return <div className="row actors bg-info">{actorCards}</div>;
};

export default MovieCast;