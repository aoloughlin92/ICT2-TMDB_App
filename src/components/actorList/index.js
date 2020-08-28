import React from "react";
import Actor from "../actorCard/";
import "./actorList.css";

const ActorList = props => {
  const actorCards = props.actors.map(m => (
    <Actor key={m.id} actor={m} />
  ));
  return <div className="row actors bg-info">{actorCards}</div>;
};

export default ActorList;