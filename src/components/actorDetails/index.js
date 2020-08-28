import React from "react";
import "./actorDetails.css";

export default ({actor})=>{
	return (
		<>
		<h4>Overview</h4>
		<p>{actor.biography} </p>
		<ul className="list-group list-group-horizontal">
		<li key="ruh" className="list-group-item list-group-item-dark">
          popularity
        </li>
		<li key="rut" className="list-group-item ">
          {actor.popularity}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Birthday
        </li>
        <li key="rdv" className="list-group-item ">
          {actor.birthday}
        </li>
      </ul>
	  
	  </>
	);
};